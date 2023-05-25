import React from 'react'
import { useState } from 'react';
import stars from './stars.png'
import moon from './moon.png'
import mountainsF from './mountainsF.png'
import mountainB from './mountainB.png'
import './OffsetValue.css'
import { Box, Container } from '@mui/system';
import { Grid } from '@mui/material';

const Offset = () => {
    
        const [offSet, setOffSet] = useState();
        const handleScroll = () => setOffSet(window.pageYOffset);
        window.addEventListener("scroll", handleScroll);



    
  return (
    <>
    {/* <section>
        <img
          src={stars}
          style={{ left: offSet * 0.25 + "px" }}
          id="stars"
          alt="m"
        />
        <img
          src={moon}
          style={{ top: offSet * 1.5 + "px" }}
          id="moon"
          alt="m"
        />
        <img
          src={mountainB}
          style={{ top: offSet * 0.5 + "px" }}
          id="mountainsBehind"
          alt="m"
        />
        <h2 id="text" style={{ marginRight: offSet * 6 + "px" }}>
          Hello, Im Md.Irbaaz Hussain
        </h2>
        <a href="#about" style={{ marginTop: offSet * 1.5 + "px" }} id="btn">
          Explore
        </a>
        <img
          src={mountainsF}
          style={{ top: offSet * 0 + "px" }}
          id="mountains_front"
          alt="m"
        />
      </section> */}

     


      
    </>
  )
}

export default Offset