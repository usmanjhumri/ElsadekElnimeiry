import React, { useState } from 'react'
import CLOUD from './clouds_repeat.png'
import MOON2 from './moon2.png'
import MOON1 from './moon1.png'
import './Footer.css'
import { Box, Grid, Link, Typography } from '@mui/material'
import Sparkles from 'react-sparkle'
import USMAN from './IMG.jpeg'
import ScrollToTop from 'react-scroll-to-top'
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
const Footer = () => {

  return (
    <>
      <Box mt={12}>
        <div >
          <ScrollUpButton smooth color="#E4E6EA" style={{

            zIndex: 999,
            borderColor: "#212428",
            background: "#212428",
            color: "#E4E6EA",
            boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e"
          }} />
        </div>


        <div style={{
          position: "relative"
        }}>

          <div className='bg-img' style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          }}>
            <Sparkles
              color="white"
              count={300}
              minSize={6}
              maxSize={8}

              fadeOutSpeed={5}
              flicker={false}

            />


            <img src={MOON1} alt="" className='moon1' />

          </div>

          <div className='rn-footer-area rn-section-gap' style={{
            position: "relative",
            zIndex: 9
          }}>

            <div className='container'>
              <div className="row">

                <div className="col-lg-12">

                  <div className="footer-area text-center">

                    <div>

                      <img src={USMAN} alt="" id='flogo' />

                      <p className='discription xs-black'>Elsadek Elnimeiry</p>
                    </div>
                    <p className='discription mt-30' >
                      © 2023. All rights reserved by  <a href="/">Elsadek Elnimeiry</a>
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>



        </div>




      </Box>





    </>
  )
}

export default Footer
