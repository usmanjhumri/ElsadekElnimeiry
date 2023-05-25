import React from 'react'
import { Box, Container, Divider, Drawer, SwipeableDrawer, Typography } from '@mui/material'

import { FiLinkedin } from 'react-icons/fi'
import {AiOutlineGithub} from 'react-icons/ai'
import { RiWhatsappLine} from 'react-icons/ri'
import {Link} from 'react-scroll'
import './Responsive.css'

export default function ResponsiveHeader({ state, setstate }) {
    // let store = useSelector((s)=>s)
  return (
    <div className='drawer-color' style={{
     
      marginTop:"1rem"


    }}>
      <Drawer sx={{


      }}
        open={state}
        onClose={() => {
          setstate(!state);
        }}
          >
              <Box sx={{textAlign:'center', }}>
        
        </Box>
        <Box sx={{
          //  padding: "20px 3rem",
      // background:"#212328"
      textAlign:"center",
      

      }}>
          <Box
            className="name_logo"
            sx={{ fontSize: { md: "35px", xs: "25px" },
    color: '#c4cfde',
    marginTop:"2rem",
    marginBottom:"1.5rem"
           }}
          >
            Mohammad Usman
          </Box>
          <Container>
          <Divider sx={{
        maxWidth:"1270px",
        margin:"0 auto",
          background:"rgba(255, 255, 255, 0.1)"
        }}/>
        </Container>
        <Container>
          <Box sx={{ margin: "50px 0px" }}>
          <Link to="Home" spy={true} smooth={true} offset={50} duration={500} className='header-links'>
            Home     </Link>

            <Link to="Feature" spy={true} smooth={true} offset={50} duration={500} className='header-links'>
            Feature
            </Link>

            <Link to="Portfol" spy={true} smooth={true} offset={50} duration={500} className='header-links'>
            Portfol
            </Link>

            <Link to="Resume" spy={true} smooth={true} offset={50} duration={500} className='header-links'>
            Resume           </Link>

            <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className='header-links'>
            Contact
            </Link>
          </Box>
          </Container>


          <Container>
          <Divider sx={{
        maxWidth:"1270px",
        margin:"0 auto",
          background:"rgba(255, 255, 255, 0.1)"
        }}/>
        </Container>
          <Box sx={{
  display:"inline-block",
  alignItems:"left",
  marginTop:"3rem"
  
}} mt={1}>
<Box sx={{
  display:"flex"
}}>
<Box sx={{
}}>
  <Link className="link"  href="https://www.linkedin.com/in/muhammad-usman-97269b153/">

  <FiLinkedin className="find_me" id='linkedin' style={{
    padding:"20px",
    boxShadow:"rgb(28 30 34) 10px 10px 19px, rgb(38 42 46) -10px -10px 19px",
    color:"rgb(10, 102, 194)",
    background:"linear-gradient(145deg,#1e2024,#23272b)",
   
    margin:"14px",
    borderRadius:"8px",
    transition:"all .5s ease",
    Size:"14px",
  
    
    

    

  }}/>
  </Link>
  </Box>

  <Box>
<Link className="link" href="https://github.com/usmanjhumri" target="_blank" >
  <AiOutlineGithub className="find_me" id='linkedin' style={{
    padding:"20px",
    boxShadow:"rgb(28 30 34) 10px 10px 19px, rgb(38 42 46) -10px -10px 19px",
    color:"white",
    width:"20px",
    background:"linear-gradient(145deg,#1e2024,#23272b)",

    margin:"14px",
    borderRadius:"8px",
   
    

  }}/>
</Link>
</Box>

<Box sx={{
}}>

<Link className="link"  href="https://wa.me/923017044377/?text=I need help in my project" target="_blank" >
  <RiWhatsappLine className="find_me" id='linkedin' style={{
    padding:"20px",
    boxShadow:"rgb(28 30 34) 10px 10px 19px, rgb(38 42 46) -10px -10px 19px",
    color:"rgb(13, 193, 67)",
    width:"20px",
    
    background:"linear-gradient(145deg,#1e2024,#23272b)",

    margin:"14px",
    borderRadius:"8px",
 

  }}/>
  </Link>

  </Box>
  </Box>
</Box>
        </Box>
      </Drawer>
    </div>
  );
}
