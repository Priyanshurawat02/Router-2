import { useEffect, useState } from "react"

interface User{
    id: string;
    name: string;
    email: string;
}

export default function User(){
    const[users, setUser]=useState<User[]>([])
    const[loading, setloading]=useState<boolean>(true);
    const[error, setError] =useState<string | null>(null);


    useEffect(() =>{
        const fetchUsers =async () =>{
            try {
                const response =await fetch (
                     "https://jsonplaceholder.typicode.com/users"
                );

                if(!response.ok){ 
                    throw new Error("failed to fetch");
                }

                const data: User[] =await response.json();
                setUser(data);
            } catch (err) {
                setError("Something went wrong");
            } finally{
                setloading(false);
            }
        };
        fetchUsers();
    },[]);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>

    return(
        <div>
            <h2>User List</h2>
            {users.map((user) =>(
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
    
}