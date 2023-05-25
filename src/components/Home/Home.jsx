import React from 'react'
import { Box, Divider, Grid, Link, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { BsFiletypeJava } from 'react-icons/bs'
import { AiOutlineConsoleSql, AiOutlineMail } from 'react-icons/ai'
import { DiJira } from 'react-icons/di'
import CV from './ElNewresume.pdf'
import US from './ElsadekElnimeiry.png'
import './Home.css'
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/Roll';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
function Home() {





  const handleType = (count) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log('done with 5 loop');
  }


  const handeDon = () => {
    console.log('handel don')
  }

  const open = urls => {
    window.open(urls, '_blank')
  }

  const opengithub = urlgithub => {
    window.open(urlgithub, '_blank')
  }

  const openlinkedin = urllinkedin => {
    window.open(urllinkedin, '_blank')

  }

  const { text } = useTypewriter({
    words: ['Active Directory', 'Windows Firewalls support', 'Experience with Java', 'Knowledge in SQL', 'Azure Active Directory'],
    loop: {},
    typeSpeed: 120,
    // delaySpeed: 20,
    deleteSpeed: 30
  })


  return (
    <>




      <Box id='Home' >
        <Container sx={{
          marginBottom: "8rem",
          marginTop: "4rem"
        }}>


          {/* direction={{xs:"column-reverse", md:"row"}} */}

          <Grid container direction={{ xs: "column-reverse", md: "row" }} sx={{
            alignItems: "center",
            justifyContent: "center"
          }}>

            <Grid item xs={12} md={8} sx={{
              marginTop: { xs: "20%", md: "auto" }

            }}>


              <Box sx={{
                textAlign: "left",
                // marginTop:"20px",
              }}>
                <Typography sx={{
                  color: "#c4cfde",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  fontWeight: 500,
                  fontSize: "14px",
                  marginBottom: "20px",
                }}>
                  welcome to my world
                </Typography>
                <Typography component={'h1'} sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.2rem", md: "4.5rem" },
                  lineHeight: "75px",
                  marginTop: "22px",
                  color: "#ffffff",
                  fontFamily: "Montserrat"
                }}>
                  Hi, I'm
                </Typography>

                <Fade bottom cascade>
                  <Typography className='M.Usman' sx={{
                    fontWeight: 700,
                    fontSize: { xs: "2.2rem", md: "4.5rem" },
                    lineHeight: "75px",
                    color: "#ff014f",
                  }}>
                    Elsadek Elnimeiry
                  </Typography>
                </Fade>

                <Typography component={'h1'} sx={{
                  // fontWeight: 500,
                  color: "#ffffff",
                  fontSize: { xs: "2rem", md: "3rem" },
                  background: "linear-gradient(330deg, #99e052 0%, #52e0e0 50%, #9952e0 100%)",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  display: "inline-block"
                }}>
                  <span >

                    Technical Skills in {''}
                  </span>
                  <br />
                  <span style={{
                    color: "red",
                    display: "inline",
                    // fontWeight:"bold"
                  }}>

                    {text}
                  </span>
                  <span style={{ color: "red", }}>
                    <Cursor cursorStyle='|' />
                  </span>
                </Typography>

              </Box>

              {/* clear the error and run ok abi krta hun not working
     */}
              <Fade bottom>
                <Typography sx={{
                  textAlign: "left",
                  fontSize: "16px",
                  lineHeight: "30px",
                  opacity: 0.9,
                  color: "#c4cfde",
                  paddingRight: "12%",
                  // textShadow:"0px 2px 3px #555",
                }}>
                  Excellent IT professional, eager to learn more and grow my career in the field. I bring 10+ years’ experience in providing IT support for both software and hardware. Highly skilled in maintaining, analyzing, troubleshooting, and repairing computers/laptops, hardware, software, and peripherals. My personal areas of strength are: <br />
                  <br />
                  Documenting and upgrading hardware and software systems
                  <br />
                  Creating user accounts including user rights, security, and groups creation
                  <br />
                  Outstanding customer service and communication skills
                </Typography>
              </Fade>
              <Grid container spacing={2} sx={{
                marginTop: { xs: "10%", md: "10%" }
              }}>

                <Grid item xs={12} md={5}>

                  <Fade bottom>
                    <Box sx={{
                      marginRight: "25%",
                    }}>

                      <Typography sx={{
                        marginRight: "32%",
                        color: "#c4cfde",
                        fontSize: "14px",
                        fontWeight: 300,
                        letterSpacing: "2px",
                        textTransform: "uppercase"
                      }}>
                        find with me
                      </Typography>


                      <Box sx={{
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"

                      }} mt={1}>


                        <Link className="link" href="mailto:elsadekelnimeriy@gmail.com">

                          <AiOutlineMail className="find_me" id='linkedin' style={{
                            padding: "20px",
                            boxShadow: "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                            color: "rgb(10, 102, 194)",
                            background: "linear-gradient(145deg,#1e2024,#23272b)",

                            margin: "14px",
                            borderRadius: "8px",
                            transition: "all .5s ease",
                            Size: "14px",
                            //   "&:hover":{
                            //     background:"linear-gradient(to right bottom,#ffffff,#00ff40)",

                            // }

                          }} />
                        </Link>

                        <Link href={CV} download="Elsadek Elnimeiry.pdf" sx={{
                          textDecoration: "none",
                          color: "#ff014f",
                          background: "linear-gradient(145deg,#1e2024,#23272b)",
                          boxShadow: "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                          padding: "1rem 0.5rem",
                          borderRadius: "8px",
                          transition: "all 0.5s",
                          cursor: "pointer"

                        }} className='send-btn' id='send-masg'>
                          Download Resume
                        </Link>


                      </Box>
                    </Box>
                  </Fade>
                </Grid>



                <Grid item xs={12} md={7}>

                  <Fade bottom>
                    <Box sx={{
                      marginRight: "25%"
                    }}>

                      <Typography sx={{
                        marginRight: "32%",
                        color: "#c4cfde",
                        fontSize: "14px",
                        fontWeight: 300,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        textShadow: "#111 0 0 1px, rgba(rgba(255,255,255,0.1) 0 1px 3px)",

                      }}>
                        best skill on
                      </Typography>

                      <Box sx={{
                        display: "inline-block",

                      }} mt={1}>

                        <Box sx={{
                          display: "flex"
                        }}>

                          <Box>
                            <AiOutlineConsoleSql style={{
                              padding: "20px",
                              boxShadow: "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                              color: "#00d1f7",
                              width: "20px",
                              // height:"auto",
                              // background: "linear-gradient(to right bottom,#212428,#16181c)",
                              background: "linear-gradient(145deg,#1e2024,#23272b)",

                              margin: "14px",
                              borderRadius: "8px"



                            }} />
                          </Box>

                          <Box>
                            <BsFiletypeJava style={{
                              padding: "20px",
                              boxShadow: "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                              color: "rgb(10, 102, 194)",
                              width: "20px",
                              // height:"auto",
                              // background: "linear-gradient(to right bottom,#212428,#16181c)",
                              background: "linear-gradient(145deg,#1e2024,#23272b)",

                              margin: "14px",
                              borderRadius: "8px"

                            }} />
                          </Box>

                          <Box>
                            <DiJira style={{
                              padding: "20px",
                              boxShadow: "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                              color: "white",
                              width: "20px",
                              // height:"auto",
                              // background: "linear-gradient(to right bottom,#212428,#16181c)",
                              background: "linear-gradient(145deg,#1e2024,#23272b)",

                              margin: "14px",
                              borderRadius: "8px"

                            }} />
                          </Box>

                        </Box>

                      </Box>
                    </Box>
                  </Fade>

                </Grid>



              </Grid>



            </Grid>

            <Grid item xs={12} md={4} sx={{
              marginTop: { xs: "40%", md: "20%" },

            }}>

              <div className='thumbnail'>
                <Box sx={{
                  textAlign: "center",
                  boxShadow: "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                  background: "linear-gradient(145deg,#1e2024,#23272b)",
                  padding: "0 30px"

                }}>
                  <Box component={'img'} src={US} sx={{
                    marginTop: { xs: "-40%", md: "-40%" },
                    maxWidth: "90%",
                    height: "auto",
                    verticalAlign: "middle",
                    border: "0"
                  }} />


                </Box>
              </div>

            </Grid>



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

export default Home
