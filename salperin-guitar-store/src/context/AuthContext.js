

import React, {createContext, useContext, useEffect, useState} from "react";
import { /* createUserWithEmailAndPassword */ signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const authcontext = createContext();

export const useAuth = () =>{
    const contextusuario = useContext(authcontext);
    return contextusuario;
}

export function AuthProvider ({children}) {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   /*  const signup = (email, password) =>
        createUserWithEmailAndPassword(auth,email, password); */

    const login = async(correo, password) =>
     signInWithEmailAndPassword(auth, correo, password);

    const logout = () => signOut(auth)  
     
    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe();
        
    }, []) 
    
    return (

        <authcontext.Provider value={{login, user, logout, loading}}>{children}</authcontext.Provider>
    )
        
};