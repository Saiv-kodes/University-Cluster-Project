"use client"
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { CardTitle } from "@/components/ui/card";

export type Instrument= {
  id: number;
  instrument: string;
  description: string;
  image: string;
  instituteId: string;
}


export const columns: ColumnDef<Instrument>[] = [

  
  
  {
    accessorKey: "instituteId",
    header: ()=><span className="hidden">Placeholder</span>,
    
  },
  {
    accessorKey: "image",
    header: ()=><span className="font-bold">Glimpse</span>,

    cell:({row})=>{
      const imageref:any=row.getValue("image");
      return <Image width={100} height={100} layout="intrinsic" className="rounded-sm" src={imageref} alt=""></Image>
    }
   
  },
  {
    accessorKey: "instrument",
    header: ()=><span className="font-bold">Instrument</span>,
    
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
          <Image width={300} height={300} className="rounded-sm max-w-[200px] max-h-[200px]" src={image} alt=""></Image>
          <p>{description}</p>
        </SheetContent>
       
      </Sheet>
    }
  },
  
]
