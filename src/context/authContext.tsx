import React, { createContext, useState } from 'react'
import { auth } from '../firebase'
import { User } from '../types/user'
import { getRedirectResult } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext({})
const AuthContextProvider = () => {
  const [user, setUser] = useState({
    userId: undefined,
    name: undefined,
    profile: undefined,
  });

  const handleUser = {
    user: user,
    reload: () => {
        axios.get('http://localhost:8000/api/account/user')
        .then((response)=> {
            if(response.data.data) {
                setUser(response.data.data)
            }
            else{
                alert(response.data.message)
            }
        })
        .catch((err) => {
            if (err.response.status === 500) {
                alert(err.response.data)
            } else {
                alert(err.message)
            }
        })
    }
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
    return (
        <AuthContext.Provider value={handleUser}>
        </AuthContext.Provider>
    )
}
const authContext = createContext<any>(AuthContext)
export default authContext