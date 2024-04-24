"use client"
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";

export interface Job{
  id:number;
  vacancy:string;
  description:string;
  professor:string;
  discipline:string;
  instituteId:string;
}


export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: "instituteId",
    header: ()=><span className="hidden">Placeholder</span>,
    
  },
  
  {
    accessorKey: "vacancy",
    header: ()=><span className="font-bold">Vacancy For</span>,
    
  },
  {
    accessorKey: "professor",
    header: ()=><span className="font-bold">Supervising Professor</span>,
    
  },
  {
    accessorKey: "discipline",
    header: ()=><span className="font-bold">Discipline</span>,
    
  },
  {
    accessorKey: "description",
    header: ()=><span className="font-bold">Description</span>,
    cell:({row})=>{
      const desc:string=row.getValue("description")
      return <div className="">{desc.slice(0,80)+"..."}</div>
    }
  },
  {
    accessorKey: "button",
    header: ()=><div className="font-bold"></div> ,
    cell:({row})=>{

      const description:React.ReactNode=row.getValue("description");
      const title:React.ReactNode=row.getValue("vacancy");
      const professor:React.ReactNode=row.getValue("professor");
      const discipline:React.ReactNode=row.getValue("discipline");
      
      return <Sheet >
        <SheetTrigger className="w-[60px] h-[45px] bg-black text-white rounded-sm">
          View
        </SheetTrigger>
        <SheetContent className="sm:max-w-none sm:w-3/4 w-full flex flex-col items-center">
          <CardTitle className="w-full text-center">{title}</CardTitle>
          <p>{description}</p>
          <div className="flex justify-start font-bold w-full">Supervisor:<span className="font-normal">{professor}</span></div>
          <div className="flex justify-start font-bold w-full">Discipline:<span className="font-normal">{discipline}</span></div>

        </SheetContent>
       
      </Sheet>
    }
  },
  
  
]
