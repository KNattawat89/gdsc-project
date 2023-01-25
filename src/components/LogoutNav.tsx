import React from 'react'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import axios from 'axios';
const LogoutNav = () => {
  const navigate = useNavigate()
  const logOut = () => {
    axios.post("http://localhost:8000/api/account/logout",{withCredentials:true})
    signOut(auth).then(() => {
      navigate('/gallery')
    }).catch((err) => {
        alert(err.message)
    })
  }
  return(
    <Typography color={"white"} onClick={logOut} sx={{cursor: "pointer"}}>Logout</Typography>
  )
}

export default LogoutNav