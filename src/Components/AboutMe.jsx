import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { skillsImg } from "../Utils/data";
import background from '../images/backgroundSVG/aboutme.svg'
import 'aos/dist/aos.css';

const AboutMe = () => {

  
    return (
        <Box  id="aboutme" role="region" aria-labelledby="about_section" data-aos="zoom-out-up"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage:`url(${background})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                color: 'black',
                py: { xs: '4rem', sm: '6rem', md: '10rem' }
            }}
        >
            <Box id="about_section"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h3" 
                sx={{fontWeight:'bold',
                fontFamily:'Cinzel',
               fontSize: {xs: '2rem', sm: '2.5rem'}}}>ABOUT ME</Typography>
                <Typography variant="h6" fontFamily="Source Sans Pro" sx={{fontWeight:'bold'}}>---Who am I---</Typography>
            </Box>

            <Grid
                container
                sx={{
                    columnSpacing: { xs: '1', sm: '2', md: '7' },
                    maxWidth: "90rem",
                    paddingBottom: '2.5rem', px: { xs: "1rem", sm: "3rem", md: "4.5rem" }
                }}
            >
                <Grid item xs={12} sm={8} md={8}>

                    <Typography variant="h6" py='2rem' component='div' sx={{ fontFamily: "Source Sans Pro" }}>
                        <Box sx={{ lineHeight: 2, letterSpacing: 1.5 }}>
                            I am a <b>Front-end web developer</b> with a passion for creating attractive and intuitive user interfaces. My portfolio includes projects ranging from responsive websites to dynamic web applications. I am well-versed in HTML, CSS, JavaScript, React js, Material UI and various front-end frameworks, always eager to learn and explore new technologies.
                        </Box>
                    </Typography>

                </Grid>
                <Grid
                    item

                    xs={12}
                    sm={4}
                    md={4}
                >
                    <Box sx={{ textAlign: "center", display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                        <Typography variant="h5" fontWeight='bold' fontFamily="Source Sans Pro">My Skills</Typography>

                        <Grid container columnSpacing={1}>
                            {skillsImg.map((item, index) => (
                                <Grid key={index} item xs={4}>
                                    <img src={item.icon} alt={item.name}
                                        style={{
                                            maxWidth: '76px',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;
