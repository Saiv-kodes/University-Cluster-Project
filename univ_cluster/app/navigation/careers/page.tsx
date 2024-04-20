import { NavOption } from "@/components/navOption";
import { DataTable } from "./DataTable";
import { columns,Job } from "./columns";

const data:Job[]=[
  {
    id:1,
    vacancy:"Research Intern",
    discipline:"Mechanical engineering",
    description:"You will do research and more research",
    professor:"Amitabh Bachhan",
    
  },
  {
    id:2,
    vacancy:"Research Intern",
    discipline:"Mechanical engineering",
    description:"You will do research and more research",
    professor:"Amitabh Bachhan",
    
  },
  {
    id:3,
    vacancy:"Research Intern",
    discipline:"Mechanical engineering",
    description:"You will do research and more research",
    professor:"Amitabh Bachhan",
    
  },
]
export default function Careers(){
  return <>
    <main className="h-screen">
      <NavOption/>
      <section>
        <DataTable data={data} columns={columns}/>
      </section>

    </main>
  </>
}