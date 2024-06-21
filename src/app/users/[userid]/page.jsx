async function getUsers(id){
    let data =await fetch(`http://localhost:3000/api/users/${id}`);
    data= await data.json();
    return data[0];
}


export default async function page({params}){
    console.log(params);
    const user=await getUsers(params.userid)
    console.log(user);
    return(
        <div>
            <h1>About registered user</h1>
            <h4>Name: {user.name}</h4>
            <h4>Age: {user.age}</h4>
            <h4>Email:id: {user.email}</h4>
        </div>
    )
}