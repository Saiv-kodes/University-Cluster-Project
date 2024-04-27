import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs";
import { join } from "path";
// //model Proj {
//   id          Int        @id @default(autoincrement())
//   title       String
//   description String
//   discipline  String
//   professor   String
//   image  String 
//   instituteId String
// }


export async function POST(request: NextRequest) {
  const data = await request.formData()
  const image: File | null = data.get('image') as unknown as File

  if (!image) {
    return NextResponse.json({ success: false })
  }

  const bytes = await image.arrayBuffer()
  const buffer = Buffer.from(bytes)

  
  const path = join('/Users/satvi/Onedrive/Desktop/mini_proj/Mini-Project/univ_cluster/public/uploaded', image.name)
  const newPath='/uploaded/'+image.name
  writeFile(path, buffer,(err)=>{
    if(err) throw(err)
  })
  


  const title:string = data.get ('title') as unknown as string
  const description: string = data.get('description') as unknown as string;
  const discipline: string = data.get('discipline') as unknown as string;
  const professor: string = data.get('professor') as unknown as string;
  const instituteId: string = data.get('instituteId') as unknown as string;
  const newData={image:newPath,title,description,discipline,professor,instituteId}

  const result=await prisma.proj.create({
    data:newData
  })
  
  

  return NextResponse.json({ result })
}

export async function DELETE(request:NextRequest){
  console.log("WASSUP NIGGA")
  // const res=await request.json();

  // const result=await prisma.proj.delete({
  //   where:{
  //     id:res.id
  //   }
  // })
}