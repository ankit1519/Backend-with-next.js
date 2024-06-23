import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(req,content){
    // return NextResponse.json({name:"Ankit Raj", age:22, city: "Patna"},{status:200})
    
    // const data=user;
    // console.log(data,content.params.id);

    const userData=user.filter((item)=>item.id==content.params.id)

    if(userData.length==0){
        return NextResponse.json({result:"No data found",success:false});
    }
    return NextResponse.json(userData,{status:200});
}

export async function PUT(req,content){
    
   let payload=await req.json();
   let uid=content.params.id;

   payload.id=uid;
   console.log(payload);
   console.log(uid);

   if(!payload.id || !payload.name || !payload.email || !payload.age){
    return NextResponse.json({result:"req data not valid",success:false},{status:400});
   }

   return NextResponse.json({result:payload,success:true},{status:200});
}
