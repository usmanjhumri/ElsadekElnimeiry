import React, {useState} from 'react'
import { Box, Button, Grid, Link, Modal, Typography } from '@mui/material'
import { Container } from '@mui/system'
import './Portfolio.css'

const Popupwindow = ({idMessage}) => {

     const [open, setOpen] = useState(false)

    
  return (
    <>
    <button
        onClick={() => setOpen(true)}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${idMessage}`}
      >
       {idMessage} usman
      </button>

    
    {
        open &&(

            // <Modal className="Modal" open={open}
            // onClose={()=>setOpen(true)}
            // sx={{
                
            //     marginTop:"15%",
                
            // }}
            // >
                

            <Box mb={12}>
        <Container sx={{
                        boxShadow:" 10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                        padding:"45px",
                        borderRadius:"10px",
                        textAlign:"left",
                        border:"none",
                        background:"linear-gradient(145deg,#1e2024,#23272b)",
                        transition:"all .2s ease-in-out",
                        // marginTop:"15%",
                        
                    }}>
                        <Box sx={{
                            padding:"0",
                            border:"none",
                            position:"relative",
                            top:"0"
                        }}>
                            <button data-toggle="modal" onClick={()=>setOpen(false)}   type='button' className='close' areia-aria-label='close' style={{
                                position:"absolute",
                                padding:"1rem 1rem",
                                margin:"-1rem -1rem -1rem auto",
                                width:"0",
                                right:"10px",
                                top:"-1.5rem",
                                cursor:"pointer",
                                border:"none",
                                borderRadius:"50%",
                                background:"none"
                            }}>
                                <span className='cross' style={{
                                    color:"#ffffff",
                                    position:"absolute",
                                    zIndex:1,
                                    transition:"all 0.5s ease-in-out",
                                    fontWeight:800
                                }}>
                                    X
                                </span>

                            </button>
                        </Box>
            <Grid container spacing={6}>

                
                    
                <Grid item xs={12} md={6} spacing={4}>

                        <div style={{
        marginTop:"2rem",
        paddingLeft:"2rem"
    }}>
        <iframe style={{
            borderRadius:"8px"
        }} scrolling='no' src="https://animationweb.netlify.app/" width="100%" height="400px" frameBorder='0' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title='WebAnimation'>

        

        </iframe>
    </div>
    </Grid>

<Grid item xs={12} md={6}>
    <Box sx={{
        paddingLeft:"2rem",
        marginTop:"3.5rem"
    }}>
        <div style={{
            marginBottom:'4rem'

        }}>
        <Typography sx={{
            
            color:"#878e99",
            letterSpacing:"1px",
            marginBottom:"8px",
            textTransform:"uppercase",
            fontSize:"16px",
            fontWeight:500,
            fontFamily:"Montserrat, sans-serif",
            textAlign:"left",
        }}>
    React MUI
        </Typography>
        
            
        <Typography className='projectName' sx={{
            color:"#c4cfde",
            letterSpacing:"1px",
            marginBottom:"15px",
            textTransform:"uppercase",
            fontSize:"34px",
            fontWeight:700,
            fontFamily:"Montserrat, sans-serif",
            textAlign:"left",
        }}>
            VIEW PROJECT
        </Typography>

        <Typography sx={{
            fontSize:"18px",
            fontWeight:400,
            color:"#878e99",
            width:"93%",
            textAlign:"left",
        }}>
        A pplication for managing club is a web application that allows the user to manage their club. The application is built with Node.js, Express.js, MongoDB, React.js, and Redux.js. The application is deployed on Heroku.
        </Typography>
            

        </div>

        <Box sx={{
            position:"relative"
        }}>
            <Link href='https://animationweb.netlify.app/' target='_blank' className='popup-link' sx={{
                textDecoration:"none",
                padding:"15px 35px",
                color:"#ff014f",
                // textAlign:"left",
                transition:"all 0.5s",
                borderRadius:"5px",
                boxShadow:" 10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                // position:"absolute",
                "&:hover":{
                    background: "linear-gradient(to right bottom,#212428,#16181c)",
                    // transition:"all 0.5s ease",
                    top:"-8px",
                }

            }}>
                view project
            </Link>
        </Box>
    </Box>
    </Grid>
    

                    
                </Grid>

        </Container>

 
    </Box>
    // </Modal>


        )
    }


    {/* </Modal> */}
    </>
  )
}

export default Popupwindow