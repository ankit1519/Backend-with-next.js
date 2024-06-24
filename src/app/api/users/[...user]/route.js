import { NextResponse } from "next/server";
export async function GET(req,con){
    // console.log(con);
    const det=con.params.user;
    // console.log(det);
    return NextResponse.json({result:det},{status:200})
}