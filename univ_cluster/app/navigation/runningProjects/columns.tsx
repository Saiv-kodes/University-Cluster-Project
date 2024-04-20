"use client"
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { StaticImageData } from "next/image";

export type Proj = {
  id: number;
  title:React.ReactNode;
  description:React.ReactNode;
  discipline:string;
  professor:string;
  image:string

}


export const columns: ColumnDef<Proj>[] = [
  {
    accessorKey: "image",
    header: ()=><span className="font-bold">Glimpse</span>,

    cell:({row})=>{
      const imageref:any=row.getValue("image");
      return <Image width={100} height={100} layout="intrinsic" className="rounded-sm" src={imageref} alt=""></Image>
    }
   
  },
  {
    accessorKey: "discipline",
    header: ()=><span className="font-bold">Discipline</span>,
    
  },
  {
    accessorKey: "professor",
    header: ()=><span className="font-bold">Professor</span>,
    
  },
  {
    accessorKey: "title",
    header: ()=><span className="font-bold">Title</span>,
    
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
      const button:React.ReactNode=row.getValue("button");
      const image:any=row.getValue("image");
      const description:React.ReactNode=row.getValue("description");
      const title:React.ReactNode=row.getValue("title");
      const professor:React.ReactNode=row.getValue("professor");
      const discipline:React.ReactNode=row.getValue("discipline");
      
      return <Sheet >
        <SheetTrigger className="w-[60px] h-[45px] bg-black text-white rounded-sm">
          View
        </SheetTrigger>
        <SheetContent className="sm:max-w-none sm:w-3/4 w-full flex flex-col items-center">
          <CardTitle className="w-full text-center">{title}</CardTitle>
          <Image width={100} height={100} className="rounded-sm max-w-[200px] max-h-[200px]" src={image} alt=""></Image>
          <p>{description}</p>
          <div className="flex justify-start font-bold w-full">Supervisor:<span className="font-normal">{professor}</span></div>
          <div className="flex justify-start font-bold w-full">Discipline:<span className="font-normal">{discipline}</span></div>

        </SheetContent>
       
      </Sheet>
    }
  },
  
]
