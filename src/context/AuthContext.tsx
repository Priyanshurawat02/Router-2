import { createContext,useContext, useState, ReactNode } from "react";

interface AuthType{
    user: string | null;
    login: (username: string) =>void;
    logout:() => void;
}

const AuthContext =createContext<AuthType | undefined>(undefined);


export function AuthProvider({children}: {children :ReactNode}){
    
    const[user,setUser] =useState<string |null>(() =>localStorage.getItem("user"));
    
    const login =(username:string) =>{
        localStorage.setItem("user", username);
        setUser(username);
    };

    const logout =() =>{
        localStorage.removeItem("user");
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

    export function useAuth() {
        const context =useContext(AuthContext);
        if(!context){
            throw new Error("useAuth must be used inside AuthProvider");
        }
        return context;
    }
