import React from 'react'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
const LogoutNav = () => {
    const navigate = useNavigate()
  const logOut = () => {
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