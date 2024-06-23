import Link from "next/link";
import style from "../style.module.css";

async function getUsers(){
    let data =await fetch("http://localhost:3000/api/users");
    data= await data.json();
    return data;
}

export default async function users(){
    let users=await getUsers();
    console.log(users);
    return(
        <>
            <h1>Hii jsx</h1>
            {
                users.map((item)=>(
                    <div key={item.id} className={style.ui}>
                        <span><Link href={`users/${item.id}`}>{item.name}</Link></span>
                        
                        <span ><Link href={`users/${item.id}/update`}>Edit</Link></span>
                    </div>
                ))
            }
        </>
    )
    
}