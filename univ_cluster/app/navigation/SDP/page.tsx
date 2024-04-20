import { NavOption } from "@/components/navOption";
import { DataTable } from "./Datatable";
import { columns,Program } from "./columns";


const data:Program[]=[
  {
    id:1,
    program:"Big Brain",
    organiser:"Modi",
    group:"B-Tech students",
    description:"shanivar raati mainu neen nai aundi"
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
