import { Box, Container, Typography } from "@mui/material";
import React, { FC, ReactNode, useContext, useEffect } from "react";
import ImageIcon from "@mui/icons-material/Image";
import LogoutNav from "./LogoutNav";
import { AuthContext } from "../context/authContext";
import { profile } from "console";
import { LoginInfo } from "../types/user";
import { Link } from "react-router-dom";


const Navbar: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const {user,reload }= useContext(AuthContext) as LoginInfo
  useEffect(() => {
		reload()
	}, [])

  // console.log(user);
  
  return (
    <Box
      sx={{
        height: "56px",
        backgroundColor: "rgb(39 39 42)",
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Link to={"/gallery/albums"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              gap: "0.5rem",
            }}
          >
       
            <ImageIcon sx={{ color: "white" }} fontSize="large" />
            <Typography color="white" fontWeight={"bold"} fontSize="1.25rem">
              Gallery
            </Typography>
          </Box>
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              gap: "1rem",
            }}
          >
            <Typography color="white">{user?.display_name}</Typography>
            <Box
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
              }}
            >
              <img style={{width: "2.5rem", height: "2.5rem", borderRadius: "50%"}} src={user?.photo_url + ""}/>
            </Box>
            <LogoutNav/>
          </Box>
        </Box>
      </Container>
      {children}
    </Box>
  );
};

export default Navbar;
