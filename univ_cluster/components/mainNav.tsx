import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image";
import logo from "../images/logo.png"
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectValue } from "./ui/select";
import { SelectTrigger } from "@radix-ui/react-select";


export default function MainNav(){
  const blah=["Home","Workshops","Careers","Projects","Instruments","Skill Development Program","Specialisations"]

  return <>
    <nav className="flex justify-between bg-[#F7F7F7] items-center min-h-[13vh]">
      <div className="w-[200px] h-full flex items-center justify-start ">
        <Image src={logo} alt="balls" className="container p-0"></Image>
      </div>
      <Button className="bg-blue-500 mr-2">Admin Login</Button>
    </nav>
    <Card className="lg:bg-[#57bbed] lg:rounded-t-none lg: lg:rounded-b-xl lg:h-[40px] border-t-0 border-l-0 border-r-0 hidden lg:flex">
        <Link className="flex items-center justify-center flex-1 text-white h-full hover:text-black" href="/">
            Home
        </Link>
        
        <Link className="flex items-center justify-center flex-1 text-white h-full hover:text-black" href="/">
            Instruments
        </Link>
        
        <Link className="flex items-center  justify-center flex-1 text-white h-full hover:text-black" href="/">
            Running Projects
        </Link>
        
        <Link className="flex items-center justify-center flex-1 text-white h-full hover:text-black" href="/">
            Careers
        </Link>
        
        <Link className="flex text-center items-center justify-center flex-1 text-white h-full hover:text-black" href="/">
            Skill development program
        </Link>
        
        <Link className="flex items-center justify-center flex-1 text-white h-full hover:text-black" href="/">
            Workshops
        </Link>
        
        <Link className="flex items-center justify-center flex-1 text-white h-full hover:text-black" href="/">
            Specialisations
        </Link>
        
    </Card>
    <Select>
      <SelectTrigger className="w-[100vw] lg:hidden bg-[#00649F]">
        <SelectValue placeholder={<span>Menu</span>}/>
        
      </SelectTrigger>
      <SelectContent>
      {blah.map(item=>{
          return <SelectItem value={item}>
            <Link href="/">{item}</Link>
          </SelectItem>
        })}
      </SelectContent>
    </Select>
  </>
}
