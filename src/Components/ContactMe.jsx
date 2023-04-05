import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
    InputLabel,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import background from '../images/backgroundSVG/WhitePoly.svg'
import 'aos/dist/aos.css';

const ContactMe = () => {
    const [state, handleSubmit] = useForm("mdovzall");

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

useEffect(()=>{

    if (state.succeeded) {
        alert('Thank you for Contacting, will reach out to you as soon as possible')
        setUserName("");
        setEmail("");
        setMessage("");
    }
   
},[state])





        return (
        <Box id="contact_me" aria-labelledby="contact_section" role="region" 
       
            sx={{
                display: "flex",
                flexDirection: "column",
                //  background: 'radial-gradient(circle, rgba(238,174,202,0.6) 0%, rgba(148,187,233,0.6) 100%)',
                backgroundImage:`url(${background})`,
                alignItems: "center",
                justifyContent: "center",
                px: { xs: "1rem", sm: "4.2rem", md: "10rem" },
                py:{xs:'3rem', sm:'5rem',md:'6rem'}
            }}
        >
            <Typography
                id="contact_section"
                variant="h3"
                sx={{
                    fontFamily:'Cinzel',
                    paddingTop: "4rem",
                    fontSize: { xs: "25px", sm: "30px", md: "40px" },
                    fontWeight:'bold'}}
            >
                CONTACT ME
            </Typography>

            <Grid
                container
                sx={{
                    marginTop: "1.5rem",
                    mb:'2rem'
                }}
            >
                <Grid item xs={12} sm={12} md={12} pt={2}>
                    <Paper
                        elevation={10}
                        sx={{
                            
                            maxWidth: "800px",
                            mx: "auto",
                            backgroundColor: "white",
                            p: { xs: "0.8rem", sm: "1.5rem", md: "2.5rem" },
                            py:{xs:'3rem',md:'4rem'},
                          
                        }}
                        data-aos="flip-up"
                    >
                        <Box
                        
                            id="form"
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                            }}
                            autoComplete="off"
                        >
                            <Box id="name_Div">
                                <InputLabel sx={{pb:'0.5rem', display: "block", width: "100%" ,fontWeight:'bold',
                                    color:'black'}}>
                                    Name
                                </InputLabel>

                                <TextField
                                    value={userName}
                                    variant="outlined"
                                    label="Your Name"
                                    id="name"
                                    name="name"
                                    fullWidth
                                    InputLabelProps={{style:{color:'gray'}}}
                                    inputProps={{
                                        inputMode:'text',
                                        style: {
                                            height: "50px",
                                        },
                                    }}
                                   onChange={(e)=>setUserName(e.target.value)}
                                    required
                                />
                            </Box>

                            <Box>
                                <InputLabel sx={{pb:'0.5rem', display: "block", width: "100%",fontWeight:'bold',
                                color:'black' }}>
                                    Email
                                </InputLabel>
                                <TextField
                               value={email}
                                    variant="outlined"
                                    label="Your Email"
                                    id="email"
                                    name="email"
                                    fullWidth
                                    InputLabelProps={{style:{color:'gray'}}}
                                    inputProps={{
                                        inputMode:'email',
                                        style: {
                                            height: "50px",
                                        },
                                    }}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </Box>

                            <Box>
                                <InputLabel sx={{pb:'0.5rem', display: "block", width: "100%",fontWeight:'bold',
                               color:'black' }}>
                                    Message
                                </InputLabel>
                                <TextField
                                 value={message}
                                    variant="outlined"
                                    label="Your Message"
                                    name="message"
                                    fullWidth
                                    multiline
                                    InputLabelProps={{style:{color:'gray'}}}
                                    inputProps={{
                                        inputMode:'text',
                                        style: {
                                            height: "50px",
                                        },
                                    }}
                                    sx={{backgroundColor:'white'}}
                                    onChange={(e)=>setMessage(e.target.value)}
                                    required
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </Box>
                                    <Box >
                                    {/* #FFBF00 yellow amber Golden Yellow	#FFC000 Mango	#F4BB44*/}
                            <Button
                            sx={{ 
                                mb:{xs:'1rem',sm:'2rem'},
                                backgroundColor: '#ffbd03',
                            boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
                            '&:hover': { backgroundColor: '#ff9303',color:'black' },
                            color: 'black',
                            borderRadius: '5px',
                            textTransform: 'capitalize',
                            fontWeight:'bold'}}
                            
                                variant="contained"
                                type="submit"
                                endIcon={<SendIcon />}
                                disabled={state.submitting}
                            >Send Message
                            </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactMe;
