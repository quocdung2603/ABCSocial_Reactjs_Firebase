import { auth } from "database/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }){ 
    const [currentUser,setCurrentUser]=useState(null);
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,async(user)=>{
            setCurrentUser(user);
        }) 
        return ()=>{
            unsub();
        }
    },[])
    return( 
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}