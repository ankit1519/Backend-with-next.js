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

export async function POST(request){
    let payload=await request.json();
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"req field not found"},{status:400})
    }
    console.log(payload.name);
    return NextResponse.json({result:"new user created",success:true},{status:201})
}
