import { Box, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import  img  from "./img/wind.png";
import img2 from "./img/Google.png";
import { Link, useNavigate } from 'react-router-dom';
import { auth, signIn } from '../../firebase';
import { getRedirectResult } from 'firebase/auth';
import authContext from '../../context/authContext';
const Index = () => {
  // console.log(signIn);
  const [user, setUser] = useState<any>();
  const navigate = useNavigate()
  const [loading, setloading] = useState(false);
 const context = useContext(authContext);
  const fetchUser = async() => {
    console.log(context.user);
    const userCred = await getRedirectResult(auth)
    console.log(userCred?.user);
    
    if (context.user) {
      setloading(false)
      navigate("/gallery/albums")
    }
    else{
      navigate("/gallery")
    }
    // await auth.onAuthStateChanged(
    //   user => {
    //     setUser(user);
    //   }
    // )
    // console.log(user);
  }
  useEffect(() => {
  fetchUser()

  }, [user]);

  if(loading) return (
    <Typography> loaddddd</Typography>
  )
  

 
  
  return (
    <div style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width:"100vw", height:"100vh"}} >
    <Stack direction={{xs: "column", md: "row"}} justifyContent={{xs: "space-around",md:"space-between"}} alignItems= "center" color="white" height="100%" width="100%">
      <Stack direction="column" justifyContent="center" textAlign="start" ml={{xs: "1rem" , sm: "0", md:"4.5rem"}} spacing="0.7rem">
   
        <Typography variant='h2'>Gallery</Typography>
        <Typography variant='h6' fontWeight="600" >
          Google Student Developer Club 
          <br/>
        King Mongkut’s University of Technology Thonburi
          </Typography>
    
      </Stack>
    
      <Stack direction="column" sx={{backgroundColor: "#00000080"}} width={{xs: "23rem",sm:"25rem"}} height="14.9rem" borderRadius="12px" mr={{xs: "0",md:"5.2rem"}} alignItems={"center"}>
       <Typography fontFamily="body2" fontWeight="600" mt="3.9rem" mb="1.5rem"> To getting started... </Typography>
     
       <Box width="20.5rem" height="3.75rem" borderRadius="12px" border="2px solid white" display="flex" alignItems="center" onClick={() => {signIn() ;setloading(true)}} sx={{cursor: "pointer"}}>
         <img src={img2} width="64px" height="32px" style={{marginLeft: "1rem", marginRight: "0.5rem"}}/>
         <Typography fontFamily="body2" fontWeight="600"> Sign in with Google </Typography>
       </Box>
       
      </Stack>

    </Stack>
    
    </div>
  );
}

export default Index;
