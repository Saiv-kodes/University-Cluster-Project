"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Card, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { institutes } from "@/app/navigation/institutes";
import Link from "next/link";

import { Sheet,SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [filterItem, setFilterItem] = useState<string>("");
  const [id, setId] = useState<number>(1);
  const [image, setImage] = useState<File>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [discipline, setDiscipline] = useState<string>("");
  const [professor, setProfessor] = useState<string>("");
  const [instituteId, setInstituteId] = useState<string>("1"); //take from logged in user
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) return;

    const data = new FormData();
    data.set("image", image);
    data.set("title", title);
    data.set("description", description);
    data.set("discipline", discipline);
    data.set("professor", professor);
    data.set("instituteId", instituteId);

    await fetch("/api/addProj", {
      method: "POST",
      body: data,
    });
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const handleSelectChange = (value: any) => {
    table.getColumn(filterItem)?.setFilterValue("");
    setFilterItem(value);
  };

  return (
    <>
    
    <div className="h-[60px] flex items-center w-[100vw] bg-blue-400">
        <CardTitle className="h-full  flex items-center flex-1 justify-center text-white">
          Running Projects
        </CardTitle>
      </div>
      <div className="flex gap-2 container mx-auto">

        

        <Select
          onValueChange={(value) => {
            handleSelectChange(value);
          }}
        >
          <SelectTrigger className=" max-w-[20%]">
            <SelectValue
              placeholder={
                <span className="text-gray-400 ">Search by....</span>
              }
            >
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem key={1} value="discipline">Discipline</SelectItem>
            <SelectItem key={2} value="professor">Professor</SelectItem>
            <SelectItem key={3} value="title">Title</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder={"Please enter " + filterItem}
          value={(table.getColumn(filterItem)?.getFilterValue() as string) ??
            ""}
          onChange={(event) => {
            table.getColumn(filterItem)?.setFilterValue(event.target.value);
          }}
        />
      </div>
      <div className="rounded-md border w-full">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, idx) => {
                  return (
                    <TableHead
                      className={`${
                        idx === 2 || idx === 4 ? "test:hidden" : ""
                      } ${idx === 0 || idx === 1 ? "hidden" : ""}`}
                      key={header.id}
                    >
                      {header.isPlaceholder ? null : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length
              ? (
                table.getRowModel().rows.map((row, idx) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={`${
                      row.getValue("instituteId") != JSON.stringify(id)
                        ? "hidden"
                        : ""
                    }`}
                  >
                    {row.getVisibleCells().map((cell, idx) => (
                      <TableCell
                        key={cell.id}
                        className={`${
                          idx === 2 || idx === 4 ? "test:hidden" : ""
                        } ${idx === 0 || idx === 1 ? "hidden" : ""}`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                    <TableCell>
                      <Button
                        onClick={() => {
                          fetch("/api/addProj", {
                            method: "delete",
                            body: row.getValue("id"),
                          });
                        }}
                        variant={"destructive"}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )
              : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
        <div className="justify-center flex gap-5">
          <Button
            className="bg-blue-400"
            onClick={() => {
              table.previousPage();
            }}
          >
            Previous
          </Button>
          <Button
            className="bg-blue-400"
            onClick={() => {
              table.nextPage();
            }}
          >
            Next
          </Button>
          <Sheet>
            <SheetTrigger
              className={`${id === -1 ? "hidden" : "bg-black text-white rounded-sm px-3 text-sm "}`}
            >
              + Add Project
            </SheetTrigger>
            <SheetContent className="w-screen sm:max-w-none p-0">
              <main className="w-screen h-screen oui">
                <CardTitle className="w-full text-center text-4xl text-gray-700 flex items-center justify-center h-[10vh]">
                  Add New Project
                </CardTitle>
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col gap-2 container mx-auto "
                >
                  <span className="font-semibold">Title:</span>
                  <Input
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  >
                  </Input>

                  <span className="font-semibold">Description:</span>
                  <Textarea
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  >
                  </Textarea>
                  <div className="flex">
                    <span className="font-semibold flex-1">Discipline:</span>
                    <span className="font-semibold flex-1">
                      Supervising Professor:
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Input
                      onChange={(e) => {
                        setDiscipline(e.target.value);
                      }}
                    >
                    </Input>
                    <Input
                      onChange={(e) => {
                        setProfessor(e.target.value);
                      }}
                    >
                    </Input>
                  </div>

                  <span className="font-semibold">Image:</span>
                  <Input
                    type="file"
                    onChange={(e) => {
                      setImage(e.target.files?.[0]);
                    }}
                  >
                  </Input>
                  <Button className="w-full" type="submit">Submit</Button>
                </form>
              </main>
            </SheetContent>
          </Sheet>
        </div>
      </div>

  
          </>
  );
}
