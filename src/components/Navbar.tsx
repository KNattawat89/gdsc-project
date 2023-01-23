import { Box, Container, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";
import ImageIcon from "@mui/icons-material/Image";
import LogoutNav from "./LogoutNav";

const Navbar: FC<{
  children: ReactNode;
}> = ({ children }) => {
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              gap: "1rem",
            }}
          >
            <Typography color="white">Saved</Typography>
            <Box
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "grey",
                borderRadius: "50%",
              }}
            ></Box>
            <LogoutNav/>
          </Box>
        </Box>
      </Container>
      {children}
    </Box>
  );
};

export default Navbar;
