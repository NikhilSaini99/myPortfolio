import React from "react";
import background from '../images/backgroundSVG/project2.svg'
import { projects_data } from '../Utils/data'
import {
  Typography,
  Button,
  Grid,
  Box,
  Stack,
} from "@mui/material";
import 'aos/dist/aos.css';

const Projects = () => {



  return (
    <Box id="projects" role="region" aria-labelledby="project_section"
      sx={{
        color: 'black',
        backgroundImage: `url(${background})`,
        margin: 'auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        py: { xs: '4rem', sm: '6rem', md: '7rem' }
      }}>
      <Stack direction="row" justifyContent="center" sx={{ mb: { xs: '3rem', sm: '2.5rem', md: '4rem' } }}>
        <Typography variant="h3" sx={{
          fontSize: {
            fontFamily: 'Cinzel',
            xs: '2rem', sm: '2.5rem',
            fontWeight: 'bold'
          }
        }}>
          PROJECTS
        </Typography>
      </Stack>

      <Grid container sx={{
        maxWidth: { xs: '300px', sm: '600px', md: '900px', lg: '1200px', xl: '1536px' }, margin: '0 auto'
      }}>
        <Grid item xs={12} sx={{ flexGrow: 1 }}>
          {projects_data.map((item, index) => {
            return (
              <Stack direction="column" key={index} mb={10} spacing={5} data-aos="fade-left">
                <Box sx={{ display: { xs: 'column', sm: 'column', md: 'flex' }, gap: '2rem' }}>
                  <Box
                    sx={{ margin: { xs: '0 auto', sm: '0 auto' }, maxWidth: '600px' }}
                  >
                    <img src={item.img} alt={item.name} style={{
                      width: "100%",
                      objectFit: 'contain',
                      height: '100%',
                      borderRadius: '10px'
                    }} />
                  </Box>
                  <Box>
                    <Stack direction='column' sx={{
                      textAlign: { xs: 'center', sm: 'center', md: 'left' },
                    }}>
                      <Typography variant="h3" sx={{
                        fontSize: { xs: '1.5rem' }, fontWeight: 'bold',
                        fontFamily: "Cinzel",
                        my: { xs: '1.5rem', sm: '1.1rem', md: '1.2rem' }
                      }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body1" sx={{
                        color: 'gray', fontSize: {
                          xs: '0.8rem', sm: '1.1rem', md: '1.2rem',
                          fontFamily: 'Source Sans Pro',
                          letterSpacing: '2px'
                        }
                      }}>
                        {item.description}
                      </Typography>

                      <Stack direction='row' spacing={2} sx={{
                        mt: { xs: '1rem', sm: '2rem', md: '4rem' },
                        margin: { xs: '1rem auto', sm: '2rem auto', md: '4rem 0' }
                      }}>
                        <a href={item.liveDemo} target="blank"> <Button variant="contained" sx={{
                          backgroundColor: '#ffbd03',
                          boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
                          '&:hover': { backgroundColor: '#ff9303', color: 'black' },
                          color: 'black',
                          borderRadius: '5px',
                          textTransform: 'capitalize',
                          fontWeight: 'bold'
                        }}>Live Demo</Button></a>
                        <a href={item.sourceCode} target="*blank"> <Button variant="contained" sx={{
                          backgroundColor: '#ffbd03',
                          boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
                          '&:hover': { backgroundColor: '#ff9303', color: 'black' },
                          color: 'black',
                          borderRadius: '5px',
                          textTransform: 'capitalize',
                          fontWeight: 'bold'
                        }}>Source Code</Button></a>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Stack>

            )
          })}

        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
