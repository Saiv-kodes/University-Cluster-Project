import { NavOption } from "@/components/navOption";
import { DataTable } from "./Datatable";
import { columns } from "./columns";
import prisma from "@/lib/prisma";

async function getProgram(){
  const data=await prisma.program.findMany();
  return data;
}



export default async function SDP(){
  const data=await getProgram();

  return<>
    <NavOption/>
    <section>
      <DataTable data={data} columns={columns}/>
    </section>
  </>
}
