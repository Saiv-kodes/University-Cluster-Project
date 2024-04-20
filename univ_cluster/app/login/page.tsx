"use client"

import { NavOption } from "@/components/navOption";
import Image from "next/image"
import Link from "next/link"
import aiims from "@/images/logos/aiimslogo.png"
import iit from "@/images/logos/iitlogo.png"
import iim from "@/images/logos/iimlogo.png"
import bgsbu from "@/images/logos/bgsbulogo.jpg"
import smvdu from "@/images/logos/smvdulogo.jpg"
import uoj from "@/images/logos/UOJlogo.jpg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Select,SelectContent,SelectItem,SelectTrigger, SelectValue } from "@/components/ui/select";

export const images=[{first:"BGSBU",second:bgsbu},{first:"SMVDU",second:smvdu},{first:"CSIR-IIIM",second:iit},{first:"University Of Jammu",second:uoj},{first:"IIT Jammu",second:iit},{first:"AIIMS Jammu",second:aiims},{first:"IIM Jammu",second:iim},,{first:"SKUAST-Jammu",second:iit},{first:"GMC Jammu",second:iit},{first:"Cluster University of Jammu",second:iit},{first:"Central University of Jammu",second:iit}];
export default function Login() {
  const [activeInst,setActiveInst]=useState<string>();
  return (
    <main className="h-screen">
      <NavOption />
      <div className="flex  max-h-[87%] min-h-[87%]">
        <div className="relative flex-1 min-h-[87%]">
          <div className=" absolute top-1/4 bottom-1/4 sm:left-1/4 sm:right-1/4 left-0 right-0  flex flex-col ">
            <CardTitle className="w-full text-center text-4xl font-bold">Login</CardTitle>
            <CardDescription className="w-full text-center">Click the logo of your respective institute</CardDescription>
            <div className="mx-8 mt-4 flex flex-col gap-4  h-full">
              <div className="hidden lg:block">
                <Label>Institute:</Label>
                <Input disabled={true} placeholder={activeInst}></Input>
              </div>
              <div className="lg:hidden">
                <Label>Institute:</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    

                      {images.map((item:any,i)=>{
                        return <SelectItem key={i} value={item.first}>{item.first}</SelectItem>
                      })}
                    
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Email:</Label>
                <Input></Input>
              </div>
              <div>

                <Label>Password:</Label>
                <Input></Input>
              </div>

              <Button className="w-full">Login</Button>
              <Button variant="outline" className="w-full bg-white">Login with Google</Button>
            </div>
          </div>
        </div>
        <Card className="lg:flex lg:flex-1 lg:flex-wrap lg:py-4 lg:px-2 lg:bg-[#dbdcde] hidden ">
          {images.map((item:any,i )=>{
            if(i>=0 && i<4 || i>=images.length-4){
              
              return<div key={i} className={`${((i>=0 && i<4)||(i>=images.length-4))?"w-1/4":"w-1/3"}  h-1/3 relative flex justify-center items-center`}>
                <Button onClick={()=>setActiveInst(item.first)} className={`${((i>=0 && i<4)||(i>=images.length-4))?"w-[90%]":`${i==4 || i==images.length-3?"flex-":""}`} h-[85%] relative shadow-none hover:shadow-md p-0 bg-white hover:bg-white`}>
                  <Card >
                    <Image className={`rounded-md p-4 ${i==1?"py-10":""}`} layout="fill" src={item.second} alt=""></Image>
                  </Card>
                </Button>
                
              </div> 
            }else{
              return <div key={i} className=" h-1/3 relative flex justify-center items-center">
                <div className="">

                </div>
              </div>
            }
            })}
        </Card>
      
      </div>
    </main>
  );
}
