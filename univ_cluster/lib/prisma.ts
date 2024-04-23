import { PrismaClient } from "@prisma/client";

let prisma:any;
let x=global as any
let y=x.prisma

if (process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient();
} else {
    if (!y){
        y = new PrismaClient();
    }
    prisma = y;
}

export default prisma;
