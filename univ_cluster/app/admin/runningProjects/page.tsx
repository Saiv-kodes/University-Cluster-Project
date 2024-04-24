import prisma from "@/lib/prisma";
import { NavOption } from "@/components/navOption";
import { DataTable } from "./DataTable";
import { columns } from "./columns";

async function getProj(){
  const data=await prisma.proj.findMany();
  return data;
}




export default async function Run(){
  const data=await getProj();
  return <>
    <NavOption/>
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  </>
}