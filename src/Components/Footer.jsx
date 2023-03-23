import { Box, Typography, Divider, Stack } from "@mui/material";
import React from "react";
import { socials } from "../Utils/data";
// import background from '../images/backgroundSVG/footer1.svg'
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        // backgroundImage:`url(${background})`,
        px: { xs: "1rem", sm: "3rem", md: "5rem", lg:'10rem',xl:'13rem' },
        pb: { xs: "2rem", sm: "3rem", md: "2rem" },
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: { xs: "0.8rem", sm: "1rem", md: "2rem" },
          flexDirection: { xs: "column", sm: "row", md: "row" },
          gap: { xs: "0.2rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem"}} >
          <Typography
          
            variant="h5"
            sx={{mt:{xs:'2.5rem'}, fontFamily: "Source Sans Pro", letterSpacing: 1.5,
        fontSize:{xs:'1rem',sm:'1rem', md:'1.5rem'},fontWeight:'bold'  }}
          >
            NIKHIL SAINI
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Source Sans Pro", letterSpacing: 2,
            fontSize:{xs:'0.9rem',sm:'0.9rem', md:'1.2rem'} }}
          >
            <b>Front-end web developer</b> with a passion for creating
            attractive and intuitive user interfaces.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            mt: { xs: "1rem", sm: "0", md: "0" },
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Source Sans Pro",
          fontSize:{xs:'1rem',sm:'1rem', md:'1.3rem'},
          mt:{xs:'1.5rem',sm:'1.8rem', md:'2.2rem'},fontWeight:'bold' }}>
            SOCIAL'S
          </Typography>

          <Box sx={{ display: "flex", gap: "0.5rem",
           }}>
            {socials.map((item, index) => (
              <a href={item.url} target="*blank" key={index}><img
                src={item.icon}
                alt={item.name}
                style={{
                    cursor:"pointer",
                    borderRadius:'50%',
                  width:"100%",
                  maxWidth:'2rem'
                }}
              /></a>
            ))}
          </Box>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "white", mt:{xs:'2rem',sm:'3rem', md:'2rem'}}} />
      <Stack sx={{ textAlign: "center", mt: {xs:"1rem",sm:'4rem',md:'2rem'} }}>
        <Typography sx={{ fontFamily: "Cinzel",
        fontSize:{xs:'0.7rem',sm:'1rem', md:'1.1rem'} }}>
          © Copyright 2023. Created by <a href="*" style={{textDecoration:"none",
          color:'orangered'}}>Nikhil Saini</a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
