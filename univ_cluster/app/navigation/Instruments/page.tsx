import { NavOption } from "@/components/navOption";
import { DataTable } from "./Datable";
import { columns,Instrument } from "./columns";
import uma from "@/images/reacticon.png"

const data:Instrument[]=[
  {
    id:1,
    instrument:"Big Brain",
    image:uma,
    description:"Shanivar raati mainu neen nai aundi"
  },
  {
    id:2,
    instrument:"Big Brain",
    image:uma,
    description:"Shanivar raati mainu neen nai aundi"
  },
  {
    id:3,
    instrument:"Big Brain",
    image:uma,
    description:"Shanivar raati mainu neen nai aundi"
  }
]
export default function SDP(){
  return<>
    <NavOption/>
    <section>
      <DataTable data={data} columns={columns}/>
    </section>
  </>
}
