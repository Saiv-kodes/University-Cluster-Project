import Link from "next/link"
import Image from "next/image"
import {
  CircleUser,
  Menu,
 Package2
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from "../images/logo.png"

export function NavOption() {
  return (
      <header className="sticky top-0 flex bg-[#f7f7f7] min-h-[13vh] items-center gap-4 px-4 md:px-6 z-10">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Image  className="p-0 max-h-24 max-w-40 " src={logo} alt=""></Image>
            </Link>
          <div className="flex navbar">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 navbar"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">                                                                     
                  <Link href="#" className="hover:text-foreground">
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Instruments
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Running Projects
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Workshops
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Skill Development program
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel> Login</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link href="/login">Admin Login</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
  

        <div className="flex flex-row-reverse relative right items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 anti">        
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel> Login</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link href="/login">Admin Login</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <nav className="md:min-h-[13vh] flex-col bg-[#F7F7F7] gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-8 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground text-center"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground text-center"
          >
            Running Projects
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground text-center"
          >
            Skill Development Program
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground text-center"
          >
            Instruments
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground text-center"
          >
            Careers
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground text-center"
          >
            Specialisations
          </Link>
        </nav>
        </div>
      </header>
      
  )
}
