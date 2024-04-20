"use client"
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";

export type Instrument = {
  id: number;
  instrument:React.ReactNode;
  description:React.ReactNode;
  image:any;
}


export const columns: ColumnDef<Instrument>[] = [
  {
    accessorKey: "image",
    header: ()=><span className="font-bold">Glimpse</span>,

    cell:({row})=>{
      const imageref:any=row.getValue("image");
      return <Image layout="intrinsic" className="w-[100px] h-[100px] rounded-sm" src={imageref} alt=""></Image>
    }
   
  },
  {
    accessorKey: "instrument",
    header: ()=><span className="font-bold">Instument</span>,
    
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
      const image:any=row.getValue("image");
      const description:React.ReactNode=row.getValue("description");
      const instrument:React.ReactNode=row.getValue("instrument");
      
      
      return <Sheet >
        <SheetTrigger className="w-[60px] h-[45px] bg-black text-white rounded-sm">
          View
        </SheetTrigger>
        <SheetContent className="sm:max-w-none sm:w-3/4 w-full flex flex-col items-center">
          <CardTitle className="w-full text-center">{instrument}</CardTitle>
          <Image className="rounded-sm max-w-[200px] max-h-[200px]" src={image} alt=""></Image>
          <p>{description}</p>
        </SheetContent>
       
      </Sheet>
    }
  },
  
]
