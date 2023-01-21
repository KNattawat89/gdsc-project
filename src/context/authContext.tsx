import React, { createContext } from 'react'
import { auth } from '../firebase'
import { User } from '../types/user'
import { getRedirectResult } from 'firebase/auth';
const AuthContext = () => {
    let user: any
    let check = false
    const fetchUser = async() => {
        try {
           const userCred = await getRedirectResult(auth)
            check = true
            if (check) {
                user = userCred?.user
                console.log(user);
                
            }
        } catch (error) {
            console.log("Thung Thung error");
            
        }
    }
}
const authContext = createContext<any>(AuthContext)
export default authContext