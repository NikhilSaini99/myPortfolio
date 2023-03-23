import React from "react";
import "./Navbar.css";
import AvatarImg from '../images/Avatar.png'
import { Stack, Box, IconButton, Drawer, Paper, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navColor, setNavColor] = useState(false)


  function changeColor() {
    if (window.scrollY > 100) {
      setNavColor(true)
    }
    else {
      setNavColor(false)
    }
  }
 
  useEffect(() => {
    changeColor();
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    }
  }, [])


  function handleHamburger() {
    setIsOpen(!isOpen);
  }
  return (
    <Paper elevation={1} sx={{ zIndex: '999', position: "fixed", top: '0', backgroundColor: 'transparent' }}>
      <Stack
        py={1.5}
        sx={{
          width:"100%",
          position: "fixed", top: '0',
          flexDirection: { xs: "row", sm: "row", md: "row" },
          ...(navColor ? {
            backgroundColor:'white',
            transition: "background-color 0.5s ease",
          } : {
            backgroundColor:'transparent',
            transition: 'background-color 0.8s ease-out',
          }),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: { md: "1rem" },
          px: { xs: "2rem", md: "5rem" },
        }}
      >
        <Box
          display="flex"
          sx={{
            "&:hover": {
              color: "#DE3163",
              transition: "color 0.5s",
            },
            cursor: "pointer",
            alignItems: "center",
            gap: { xs: "10px", sm: "20px" },
            py: { xs: "1rem", sm: "0.8rem", md: "0.2rem" },
            
          }}
        >
          <img
            src={AvatarImg}
            alt="Profile_image"
            style={{
              width: "100%",
              height: '100%',
              maxWidth: "47px",
              borderRadius: "50%",
            }}
          />
          <span style={{ fontWeight: "bold"}}>NIKHIL SAINI</span>
        </Box>

        <Box className="menu-items" fontWeight="bold">
          <ul className="check">
            <a href="#home"><li>Home</li></a>
            <a href="#aboutme"><li>About</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#contact_me"> <li>Contact</li></a>
          </ul>
          <Button sx={{ display: "none", color: 'black' }}
            onClick={handleHamburger}
            className="hamburger"
            type="button"
            aria-label="menu"
            endIcon={<MenuIcon sx={{ fontSize: "1.5rem" }} />}></Button>

        </Box>
        <Drawer
          anchor="right"
          open={isOpen}
          variant="temporary"
          onClose={handleHamburger}
          className="drawer"
          BackdropProps={{
            style: { backgroundColor: "transparent", opacity: 2 },
          }}
          PaperProps={{
            elevation: 5,
            sx: {
              paddingTop: "20px",
              // height: 320,
              width: "100%",
              backgroundColor: "#E9F1FA",
            },
          }}
        >
          <Box fontWeight="bold">
            <ul>
              <a href="#home" onClick={handleHamburger}><li>Home</li></a>
              <a href="#aboutme" onClick={handleHamburger}><li>About</li></a>
              <a href="#projects" onClick={handleHamburger}><li>Projects</li></a>
              <a href="#contact_me" onClick={handleHamburger}> <li>Contact</li></a>
            </ul>

            <IconButton
              onClick={handleHamburger}
              display="flex"
              sx={{ width: "100%", marginTop: "2.5rem" }}
              role="button"
            >
              <CloseIcon
                sx={{
                  fontSize: "2rem",
                  // background: "white",
                  color: "black",
                  borderRadius: "50px",
                }}
              />
            </IconButton>
          </Box>
        </Drawer>
      </Stack>
     </Paper>
  );
};
export default Navbar;
