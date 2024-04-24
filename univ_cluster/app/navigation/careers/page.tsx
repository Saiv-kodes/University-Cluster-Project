import prisma from "@/lib/prisma";
import { NavOption } from "@/components/navOption";
import { DataTable } from "./DataTable";
import { columns } from "./columns";

async function getJob(){
  const data=await prisma.job.findMany();
  return data;
}




export default async function Run(){
  const data=await getJob();
  return <>
    <NavOption/>
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  </>
}