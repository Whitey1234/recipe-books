import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

  

// google provider 
 const Provider = new GoogleAuthProvider()




export  const AuthContext = createContext()

const AuthProvider = ({children}) => {
    
 const [user,setUser] = useState(null)
 const [loading,setLoding] =useState(true)
    
    // firebase create user 
 const createUser = (email,password)=>{
    setLoding(true)
    return  createUserWithEmailAndPassword(auth,email,password)
 }
// firebase observe 

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser)
      setLoding(false)
    })
    return ()=>{
       unSubscribe()
    }
   
   
   },[])
   // firebase login 
   const login =(email,password)=>{
    
 setLoding(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   //update user profile

const updateUser =(updateData)=>{
    return updateProfile(auth.currentUser,updateData)

}
//google log in 
 const gLogin = ()=>{
     return signInWithPopup(auth,Provider)
 }

   

   // firebse loguut
   
   const logout =()=>{
    return signOut(auth)

 }
  const authData ={
    createUser,
    user,
    setUser,
    logout,
    login,
    updateUser, 
    loading,
    setLoding,
    gLogin
  }

 return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;