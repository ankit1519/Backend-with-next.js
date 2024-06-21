// export async function GET(request){
//     return new Response("user")
// }

import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request){
    // return NextResponse.json({name:"Ankit Raj", age:22, city: "Patna"},{status:200})
    const data=user;
    return NextResponse.json(data,{status:200});
}