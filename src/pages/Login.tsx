import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Login(){
    const[name, setName] =useState("");
    const {login} =useAuth();
    const navigate= useNavigate();

    const handleClick =()=>{
    if(!name.trim()) return;
    login(name.trim());
    navigate("/dashboard");
}

return(
    <div>
        <input
        value={name}
        onChange={(e) =>setName(e.target.value)}
        placeholder="Enter your name"/>
        <button onClick={handleClick}>Login</button>
    </div>
)
}


