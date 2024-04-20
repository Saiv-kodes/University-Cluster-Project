"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  ColumnFiltersState,getFilteredRowModel
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Card, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger,SelectValue } from "@/components/ui/select";
import { images } from "@/app/login/page";
import { useState } from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters,setColumnFilters]=useState<ColumnFiltersState>([]);
  const [filterItem,setFilterItem]=useState<string>("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel:getPaginationRowModel(),
    onColumnFiltersChange:setColumnFilters,
    getFilteredRowModel:getFilteredRowModel(),
    state:{
      columnFilters,
    },
    initialState: {
      pagination: {
          pageSize: 5,
      },
    },
  })

  

  const handleSelectChange = (value:any) => {
    
    table.getColumn(filterItem)?.setFilterValue("");
    setFilterItem(value); 
    
  };
  

  return (<>
    <div className="h-[60px] flex items-center w-[100vw] bg-blue-400">
      <CardTitle className="h-full  flex items-center flex-1 justify-center text-white">Specialisations </CardTitle>
    </div>
    <div className="flex gap-2 container mx-auto">
     
      <Select>
        <SelectTrigger  className=" max-w-[20%]">
          <SelectValue placeholder={<span className="text-gray-400 ">Select Institute</span>}></SelectValue>
        </SelectTrigger>
        <SelectContent>
            {images.map((item:any,i)=>{
              return <SelectItem key={i} value={item.first}>{item.first}</SelectItem>
            })}
        </SelectContent>
      </Select>
      

      <Select onValueChange={(value)=>{handleSelectChange(value)}}>
        <SelectTrigger  className=" max-w-[20%]">
          <SelectValue placeholder={<span className="text-gray-400 ">Search by....</span>}></SelectValue>
        </SelectTrigger>
        <SelectContent>
            <SelectItem key={1} value="program">Program</SelectItem>
            <SelectItem key={2} value="group">Eligible Groups</SelectItem>
        </SelectContent>
      </Select>

      <Input
          placeholder={"Search for "+filterItem}
          value={(table.getColumn(filterItem)?.getFilterValue() as string) ?? ""}
          onChange={(event)=>{
            table.getColumn(filterItem)?.setFilterValue(event.target.value);
          }}
          
        />

    </div>
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header,idx) => {
                return (
                  <TableHead className={`${idx===3?"test:hidden":""}`} key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row,idx) => (
              <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className={``}
              >
                {row.getVisibleCells().map((cell,idx) => (
                  <TableCell key={cell.id} className={`${idx===3?"test:hidden":""}`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="justify-center flex gap-5">

        <Button className="bg-blue-400" onClick={()=>{table.previousPage()}}>Previous</Button>
        <Button className="bg-blue-400" onClick={()=>{table.nextPage()}}>Next</Button>
      </div>
    </div>
              </>
  )
}
