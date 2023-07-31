import React, { createContext, FC, ReactNode, useState } from 'react'
import { auth } from '../firebase'
import { LoginInfo, Profile, User } from '../types/user'
import { getRedirectResult } from 'firebase/auth';
import axios from "../utils/axios";

export const AuthContext = createContext<LoginInfo|null>(null)
export const AuthContextProvider: FC<{
    children: ReactNode;
  }> = ({ children })  => {
  const [user, setUser] = useState<Profile>();

  const reload = () => {
    axios.get('/account/profile',{ withCredentials:true })
    .then((response)=> {
        // console.log(response.data);
        
        if(response.data.success) {
            setUser(response.data.data)
        }
        else{
            alert("Success: false")
        }
    })
    .catch((err) => {
        // if (err.response.status === 500) {
        //     alert(err.response.data)
        // } else {
        //     alert(err.message)
        // }
        // alert(err+" profile part")
        console.log(err);
        
    })
}


  const handleUser = {
    user: user,
    reload: reload
  }
    // const fetchUser = async() => {
    //     try { 
    //        const userCred = await getRedirectResult(auth)
    //         check = true
    //         if (check) {
    //             user = userCred?.user
    //             console.log(user);
                
    //         }
    //     } catch (error) {
    //         console.log("Thung Thung error");
            
    //     }
    // }
    // console.log(user);
    
    return (
        <AuthContext.Provider value={{user,reload}}>
            {children}
        </AuthContext.Provider>
    )
}
const authContext = createContext<any>(AuthContext)
export default authContext