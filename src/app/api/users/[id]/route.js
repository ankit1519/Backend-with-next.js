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

