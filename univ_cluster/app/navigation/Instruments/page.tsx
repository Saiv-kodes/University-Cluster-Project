import { NavOption } from "@/components/navOption";
import { DataTable } from "./Datable";
import { columns,Instrument } from "./columns";
import prisma from "@/lib/prisma";

async function getPosts(){
  const data = await prisma.instrument.findMany()
  return data;
}


export default async function SDP(){
  const data=await getPosts();
  return<>
    <NavOption/>
    <section>
      <DataTable data={data} columns={columns}/>
    </section>
  </>
}
