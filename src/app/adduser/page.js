"use client"
import { useState } from 'react'
import style from './../style.module.css'
export default function page(){
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [email,setEmail]=useState();

    const addUser=async ()=>{
        let resp=await fetch("http://localhost:3000/api/users",{
            method:"Post",
            body:JSON.stringify({name,age,email})
        
        })
        resp=await resp.json()
        // console.log(resp);
        if(resp.success){
            alert("success")
        }else{
            alert("error")
        }
    }
    return(
        <div className={style.add}>
            <h1>Add user</h1>
            <input type="text" value={name} name="name" id="name" placeholder="Enter name" className={style.input} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name="age" value={age}id="age" placeholder="Enter age" className={style.input} onChange={(e)=>setAge(e.target.value)}/>
            <input type="text" name="email" value={email} id="email" placeholder="Enter email" className={style.input} onChange={(e)=>setEmail(e.target.value)}/>
            <button className={style.btn} onClick={addUser}>Add user</button>
        </div>
    )
}