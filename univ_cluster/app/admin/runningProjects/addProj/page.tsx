"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AdminNav } from "@/components/adminNav";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Proj } from "../columns";
import { Textarea } from "@/components/ui/textarea";
import { CardTitle } from "@/components/ui/card";
// //model Proj {
//   id          Int        @id @default(autoincrement())
//   title       String
//   description String
//   discipline  String
//   professor   String
//   image  String
//   instituteId String
// }



export default function AddProj() {
 

  const onSubmit=async (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    if (!image) return

    const data=new FormData();
    data.set('image',image)
    data.set('title',title)
    data.set('description',description)
    data.set('discipline',discipline)
    data.set('professor',professor)
    data.set('instituteId',instituteId)


    await fetch('/api/addProj', {
      method: 'POST',
      body:data
    })

  }

  const [image,setImage]=useState<File>()
  const [title,setTitle]=useState<string>("");
  const [description,setDescription]=useState<string>("");
  const [discipline,setDiscipline]=useState<string>("");
  const [professor,setProfessor]=useState<string>("");
  const[instituteId,setInstituteId]=useState<string>("1");//take from logged in user 



  return (
      <main className="w-screen h-screen oui">
        <CardTitle className="w-full text-center text-4xl text-gray-700 flex items-center justify-center h-[10vh]">Add New Project</CardTitle>
        <form onSubmit={onSubmit} className="flex flex-col gap-2 container mx-auto ">
          <span className="font-semibold">Title:</span>
          <Input onChange={(e)=>{setTitle(e.target.value)}}></Input>


          <span className="font-semibold">Description:</span>
          <Textarea onChange={(e)=>{setDescription(e.target.value)}}></Textarea>
          <div className="flex">
            <span className="font-semibold flex-1">Discipline:</span>
            <span className="font-semibold flex-1">Supervising Professor:</span>
          </div>
          
          <div className="flex gap-2">

          
          <Input onChange={(e)=>{setDiscipline(e.target.value)}}></Input>
          <Input onChange={(e)=>{setProfessor(e.target.value)}}></Input>
          </div>


          <span className="font-semibold">Image:</span>
          <Input type="file" onChange={(e)=>{setImage((e.target.files?.[0]))}}></Input>          
          <Button type="submit">Submit</Button>
        </form>
       
      </main>
    
  );
}
