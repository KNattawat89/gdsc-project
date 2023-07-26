import { Box, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import  img  from "./img/wind.png";
import img2 from "./img/Google.png";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import authContext from '../../context/authContext';
import axios from 'axios';
import { Player } from '@lottiefiles/react-lottie-player';
import loading from '../../animation/loading.json'
const HomeGallery = () => {
  const navigate = useNavigate()
  const [check, setcheck] = useState(false);
  const processCredential = async(result:any) => {
     GoogleAuthProvider.credentialFromResult (result)
    //Get IdToken from backend
    result.user.getIdToken().then((token:String) => {
      axios.post('http://localhost:8000/api/account/login', {
        id_token: token,
      },{withCredentials:true} )
      .then((response) => {
        
        if(response.data.success) {
          //Set token from backend to cookie
          // document.cookie = 'token=' + response.data.data.token
          navigate('/gallery/albums')
        } else {
         alert(response.data.message)
        }
      })
      .catch((err) => {
            alert(err +"login part")
        // }
      })
    })
  }

 const signIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
  .then((result) => {
     processCredential(result)
  })
  .catch((error) => {
     alert(error.message)
  })
 }

 if (check) {
  return(
    <Box width={"100vw"} height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Player 
      autoplay
      speed={1}
      loop
      src={loading}
      style={{height: "300px", width: "300px"}}
      >
      </Player>
      </Box>
  )
 }
 
  

 
  
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
     
       <Box width="20.5rem" height="3.75rem" borderRadius="12px" border="2px solid white" display="flex" alignItems="center" onClick={() => { return signIn(), setcheck(true)}} sx={{cursor: "pointer"}}>
         <img src={img2} width="64px" height="32px" style={{marginLeft: "1rem", marginRight: "0.5rem"}}/>
         <Typography fontFamily="body2" fontWeight="600"> Sign in with Google </Typography>
       </Box>
       
      </Stack>

    </Stack>
    
    </div>
  );
}

export default HomeGallery;
