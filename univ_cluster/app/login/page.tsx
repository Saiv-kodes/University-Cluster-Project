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
import Aiims from "@/images/aiims.jpg";
import Iit from "@/images/iitjammu.jpeg"
import Bgsbu from "@/images/bgsbu.jpeg";
import Central from "@/images/central.jpeg";
import Iim from "@/images/iimjammu.jpeg"
import { useState } from "react";

export default function Login() {
  const images=[{first:Aiims,second:aiims},{first:Iit,second:iit},{first:Bgsbu,second:bgsbu},{first:Iim,second:iim},{first:Iit,second:iit},{first:Iit,second:iit},{first:Iit,second:iit},{first:Iit,second:iit},{first:Iit,second:iit}];
  const [activeImage,setActiveImage]=useState<any>(Iit);

  
  return (
    <main className="h-screen">
      <NavOption />
      <div className="flex h-[87%]">
        <div className="relative flex-1 h-full">

          <Card className="flex-1 h-full border-0 relative bg-white">

          </Card>
          <div className="absolute top-1/4 bottom-1/4 left-1/4 right-1/4 flex flex-col ">
            <CardTitle className="w-full text-center text-4xl font-bold">Login</CardTitle>
            <CardDescription className="w-full text-center">Click the logo of your respective institute</CardDescription>
            <div className="mx-8 mt-4 flex flex-col gap-4  h-full">
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
              <div className=" text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="#" className="underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Card className="flex flex-1 flex-wrap py-4 px-2 bg-[#dbdcde] ">
          {images.map((item,i)=>{
            return<div key={i} className="w-1/3 h-1/3  relative flex justify-center items-center">
              <Button onClick={()=>setActiveImage(item.first)} className="w-[75%] h-[90%] relative shadow-xl hover:shadow-2xl p-0 bg-white hover:bg-white">
                <Card >
                  <Image className="rounded-md" layout="fill" src={item.second} alt=""></Image>
                </Card>
              </Button>
              
            </div> 
          })}
        </Card>
      </div>
    </main>
  );
}
