import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import AvatarImg from '../images/Avatar.png'
import { Grid, Typography, Box, Button, Stack } from '@mui/material'
import background from '../images/backgroundSVG/WhitePoly.svg'


const Home = () => {
    return (
        <Grid container id="home" aria-labelledby='home_section' role="region"
            columnSpacing={2} sx={{
                minHeight: { xs: '90vh', sm: '95vh', md: '100vh' },
                backgroundImage: `url(${background})`,
                px: { xs: '3rem', sm: '5rem', md: '5rem' },
                backgroundAttachment: 'fixed',
                color: 'Black'

            }}>

            <Grid item xs={12} sm={4} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '250px' }, pt: { xs: '8rem', sm: '1rem', md: '0.5rem' } }}>
                    <img src={AvatarImg} alt="avatar-img"
                        style={{
                            width: '300px', maxWidth: '100%', borderRadius: '50%',
                            boxShadow: '1px 3px 6px 3px #2C3E50'
                        }}
                    />
                </Box>
            </Grid>

            <Grid item xs={12} sm={8} md={8}
                sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '16px',
                        flexWrap: 'nowrap',
                        alignItems: { xs: 'center', sm: 'normal', md: 'normal' }
                    }}>
                <Typography variant='h5' sx={{
                    fontSize: {
                        xs: '18px', sm: "32px", md: '30px',
                        fontFamily: "Cinzel", textAlign: 'left'
                    }
                }}>
                    Hello,👋 I'm
                </Typography>
                <Typography variant='h2' sx={{
                    fontSize: {
                        xs: '30px', sm: "32px", md: '52px', fontWeight: 'bold',
                        fontFamily: "Cinzel"
                    }
                }}>
                    Nikhil Saini
                </Typography>

                <Typography variant='h4' sx={{
                    fontSize: {
                        xs: '16px', sm: "20px", md: '30px',
                        fontFamily: "Cinzel"
                    }
                }}>
                <Typewriter words={["A Front End Web Developer....","Good to see you!!"]}
                    number={80}
                    loop={false}
                    cursorBlinking={true}
                    deleteSpeed={50}
                    delaySpeed={800}
                    cursorStyle='|'
                    cursor={true}
                />
                </Typography>
                <Stack direction="row" alignItems="center">
                    <Button variant="contained"
                    href="#projects"
                        sx={{
                            backgroundColor: '#ffbd03',
                            boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
                            '&:hover': { backgroundColor: '#ff9303',color:'black' },
                            color: 'black',
                            borderRadius: '5px',
                            textTransform:'capitalize',
                            fontWeight:'bold'
                        }}>View Projects</Button>
                </Stack>
            </Grid>

        </Grid>
    )
}

export default Home
