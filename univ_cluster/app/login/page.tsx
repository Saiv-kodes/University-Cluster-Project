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
import { BentoGrid,BentoGridItem } from "@/components/ui/bento";

export default function Login() {
  const logos = [aiims, iit, iim, bgsbu, iit, uoj, iit, iit, iit];
  return (
    <main className="h-screen">
      <NavOption />
      <div className="flex h-[87%]">
        <div className="flex-1 h-full bg-black">
          Hello
        </div>
        <div className="flex-1">

        </div>
      </div>
    </main>
  );
}
