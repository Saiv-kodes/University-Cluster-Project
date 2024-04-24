import { NavOption } from "@/components/navOption";
import { DataTable } from "./Datable";
import { columns } from "./columns";
import prisma from "@/lib/prisma";





async function getInstruments(){
  const data = await prisma.instrument.findMany()
  return data;
}


export default async function Instrument(){
  const data=await getInstruments();
  return<>
    <NavOption/>
    <section>
      <DataTable data={data} columns={columns}/>
    </section>
  </>
}
