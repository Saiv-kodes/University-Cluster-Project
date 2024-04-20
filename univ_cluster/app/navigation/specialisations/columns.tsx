"use client"
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";

export type Program = {
  id: number;
  program:React.ReactNode;
  description:React.ReactNode;
  group:string;
  organiser:string
  
}


export const columns: ColumnDef<Program>[] = [
  {
    accessorKey: "program",
    header: ()=><span className="font-bold">Program</span>,

   
  },
  {
    accessorKey: "organiser",
    header: ()=><span className="font-bold">Organiser</span>,
    
  },
  {
    accessorKey: "group",
    header: ()=><span className="font-bold">Organised for</span>,
    
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
      const program:React.ReactNode=row.getValue("program");
      const organiser:React.ReactNode=row.getValue("organiser");
      const group:React.ReactNode=row.getValue("group");
      
      return <Sheet >
        <SheetTrigger className="w-[60px] h-[45px] bg-black text-white rounded-sm">
          View
        </SheetTrigger>
        <SheetContent className="sm:max-w-none sm:w-3/4 w-full flex flex-col items-center">
          <CardTitle className="w-full text-center">{program}</CardTitle>
          <p>{description}</p>
          <div className="flex justify-start font-bold w-full">Organiser:<span className="font-normal">{organiser}</span></div>
          <div className="flex justify-start font-bold w-full">Organised for :<span className="font-normal">{group}</span></div>

        </SheetContent>
       
      </Sheet>
    }
  },
  
]
