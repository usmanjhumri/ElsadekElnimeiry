import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material'
import './Portfolio.css'
import {FiArrowUpRight} from 'react-icons/fi'
import portfolioArray from './PortfolioArray'
import React from 'react'
import Fade  from 'react-reveal/Fade'
// import Popupwindow from './Popupwindow'

const Portfolio = () => {
  return (
    <>
    <Box mt={12} id='Portfol'>
       
        <Container sx={{
            // marginBottom:"8rem"

        }}>
            <Fade bottom>
            <Typography sx={{
                color:"#f9004d",
                letterSpacing:"1px",
                marginBottom:"10px",
                textTransform:"uppercase",
                fontSize:"14px",
                fontWeight:500,
                fontFamily:"Montserrat, sans-serif",
                textAlign:"center",
            }}>
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </Typography>
            </Fade>

            <Fade bottom>
            <Typography component={'h1'} sx={{
                fontWeight:700,
                fontSize:"60px",
                color:"#c4cfde",
                fontFamily:"Montserrat, sans-serif",
                lineHeight:1.2,

            }}>
            My Portfolio
            </Typography>
            </Fade>

            <Grid container spacing={6}>
{
    portfolioArray.map((item, ind)=>{
        return(
            <>
<Grid item xs={12} md={4} sm={6} key={ind}>

<Fade bottom>
<Box sx={{
     boxShadow:" 10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
     padding:"20px 25px",
     borderRadius:"10px",
     textAlign:"left",
     background:"linear-gradient(145deg,#1e2024,#23272b)",
     transition:"all .2s ease-in-out",
     marginTop:"15%",
     "&:hover":{
         background: "linear-gradient(to right bottom,#212428,#16181c)",
         
     }
}}>
    <div style={{
        marginBottom:"2rem"
    }}>
        <iframe style={{
            borderRadius:"8px"
        }} scrolling='no' src={item.src} width="100%" height="210px" frameBorder='0' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">

        </iframe>
    </div>

    <Box>
        <div style={{
            marginBottom:'1rem'

        }}>
        <a href="" style={{
            textDecoration:"none",
            outline:"none",
            color:"#f9004d",
            letterSpacing:"1px",
            marginBottom:"10px",
            textTransform:"uppercase",
            fontSize:"14px",
            fontWeight:500,
            fontFamily:"Montserrat, sans-serif",
            textAlign:"left",
        }}>
        {item.technology}
        </a>
        </div>

        <div className='projectname'>
            
        <Link href={item.src} target='_blank'  className='projectName' sx={{
            textDecoration:"none",
            outline:"none",
            color:"#c4cfde",
            letterSpacing:"1px",
            marginBottom:"10px",
            textTransform:"uppercase",
            fontSize:"24px",
            fontWeight:600,
            fontFamily:"Montserrat, sans-serif",
            textAlign:"left",
            // transition:"all 0.3s ease-in-out"
           
        }}>
            {item.projectname}

            {/* <FiArrowUpRight style={{

            }}/> */}

        </Link>
            

        </div>
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
        maxWidth:"1270px",
        margin:"0 auto",
          background:"#121415",
          marginTop:"6rem"
        }}/>

        

        {/* <Popupwindow/> */}
    </Box>
    </>
  )
}

export default Portfolio