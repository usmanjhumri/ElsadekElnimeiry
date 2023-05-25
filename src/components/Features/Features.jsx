import React from 'react'
// import './Features.css';
import { Box, Divider, Grid, Typography, Link } from '@mui/material'
import { Container } from '@mui/system'
import { VscMenu } from 'react-icons/vsc'
import { FiArrowRight } from 'react-icons/fi'
// import { Link } from 'react-router-dom'
import cardType from './FeatureArray'
import Fade from 'react-reveal/Fade'
import './Features.css'



function Features() {
    return (
        <>

            <Box mt={12} id='Feature'>
                <Container sx={{
                    marginBottom: "8rem"
                }}>

                    <Fade bottom>

                        <Box sx={{
                            textAlign: "left"
                        }}>

                            <Typography sx={{
                                letterSpacing: "1PX",
                                color: "#f9004d",
                                lineHeight: "14px",
                                textTransform: "uppercase",
                                fontWeight: 500,
                                fontSize: "14px"
                            }}>
                                features
                            </Typography>

                            <Typography variant='h1' component={'h2'} sx={{
                                fontWeight: 700,
                                fontSize: { md: "60px", xs: "30px" },
                                lineHeight: 1.2,
                                fontFamily: "Montserrat, sans-serif",
                                textTransform: "capitalize",
                                color: "#c4cfde",
                                marginTop: "12px",
                                letterSpacing: "1px"
                            }}>
                                what i do
                            </Typography>

                        </Box>
                    </Fade>

                    <Grid container spacing={6} justifyContent="center" alignItems="center">




                        {
                            cardType.map((item, ind) => {
                                return (
                                    <>
                                        <Grid item xs={12} key={ind} md={4} sm={6}>

                                            <Fade bottom>

                                                <Box id='hoverho' sx={{
                                                    boxShadow: " 10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                                                    padding: "35px 50px",
                                                    borderRadius: "10px",
                                                    textAlign: "left",
                                                    background: "linear-gradient(145deg,#1e2024,#23272b)",
                                                    transition: "all 0.5s ease-in-out",
                                                    cursor: "pointer",

                                                    marginTop: "15%",
                                                    "&:hover": {
                                                        background: "linear-gradient(to right bottom,#212428,#16181c)",

                                                    }

                                                }}>

                                                    <Box sx={{
                                                        overflowY: "hidden"
                                                    }}>
                                                        <Box sx={{
                                                            transform: "translateY(14%)",
                                                            transition: "all 0.5s",
                                                            "&:hover": {
                                                                transform: "translateY(0)",
                                                                transition: "all 0.5s ease-in-out"
                                                            }
                                                        }}>

                                                            <span> {item.icons}</span>

                                                            <Link href={item.link} target='_blank' style={{
                                                                textDecoration: "none",
                                                                transition: "all .5s ease-in-out",
                                                                "&:hover": {
                                                                    transform: "scale(1.009)"
                                                                }
                                                            }}>


                                                                <Typography variant='h4' sx={{
                                                                    fontWeight: 600,
                                                                    fontSize: "22px",
                                                                    lineHeight: "32px",
                                                                    color: "#c4cfde",
                                                                    fontFamily: "Montserrat, sans-serif",
                                                                    marginBottom: "20px"


                                                                }}>
                                                                    {item.title}
                                                                </Typography>


                                                                <Typography sx={{
                                                                    fontSize: "16px",
                                                                    lineHeight: "28px",
                                                                    color: "#c4cfde",
                                                                    marginBottom: "22px",
                                                                    fontWeight: 500
                                                                }}>
                                                                    {item.para}
                                                                </Typography>




                                                            </Link>
                                                            <FiArrowRight className='arrow' style={{
                                                                color: "#f9004d",
                                                                height: "auto",
                                                                width: "40px",
                                                                fontSize: "16px",

                                                            }} />
                                                        </Box>
                                                    </Box>

                                                </Box>

                                            </Fade>
                                        </Grid>
                                    </>
                                )
                            })


                        }
                    </Grid>




                </Container>
                <Divider sx={{
                    maxWidth: "1270px",
                    margin: "0 auto",
                    background: "#121415"
                }} />
            </Box>

        </>
    )
}

export default Features