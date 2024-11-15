import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut ,updateProfile} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './init';
import { GoogleAuthProvider,GithubAuthProvider  } from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
export const AuthUserContext=createContext(null)
const AuthContext = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const registerEmailAndPassword=(email,password)=>{
        
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const logout=()=>{
        setLoading(true)
        return signOut(auth)

    }
    const updateProfiles=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})

    }
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,GoogleProvider)
    }
    const gitHubLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,GithubProvider)
    }
    const authInfo={
        user,
        setUser,
        registerEmailAndPassword,
        login,
        logout,
        updateProfiles,
        googleLogin,
        gitHubLogin,
        loading,
    }
    useEffect(()=>{
        const unsubsCribe =onAuthStateChanged(auth,(currentUSer)=>{
            setUser(currentUSer)
            setLoading(false)

        })

        return ()=>{
            unsubsCribe()
        }

    },[])
    console.log(user,'hello');
    
    return (
        <div>
            <AuthUserContext.Provider value={authInfo}>
                {children}
            </AuthUserContext.Provider>
           
        </div>
    );
};

export default AuthContext;