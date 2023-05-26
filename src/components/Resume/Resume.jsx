import PropTypes from 'prop-types';

import React from 'react'
import { Fade } from 'react-reveal'
import './Resume.css'
import { Box, Container, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div

      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



const Resume = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box mt={12} id='Resume'>
        <Container sx={{ marginBottom: "8rem" }}>
          <Fade bottom>
            <Typography sx={{
              color: "#f9004d",
              letterSpacing: "1px",
              marginBottom: "10px",
              textTransform: "uppercase",
              fontSize: { md: "14px", xs: "12px" },
              fontWeight: 500,
              fontFamily: "Montserrat, sans-serif",
              textAlign: "center",
            }}>
              10+ years’ experience in providing IT support for both software and hardware
            </Typography>
          </Fade>

          <Fade bottom>
            <Typography component={'h1'} sx={{
              fontWeight: 700,
              fontSize: { md: "60px", xs: "30px" },
              color: "#c4cfde",
              fontFamily: "Montserrat, sans-serif",
              lineHeight: 1.2,

            }}>
              My Resume
            </Typography>
          </Fade>

          <Grid container>

            <Box mt={6} sx={{ width: '100%', }}>
              <div>


                <Tabs id='tabsname' value={value} onChange={handleChange} aria-label="basic tabs examplesss" className='usman'
                  TabIndicatorProps={{ sx: { display: 'none' } }}
                  sx={{
                    // flexWrap: "wrap",
                    boxShadow: " 10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                    borderRadius: "10px",
                    background: "linear-gradient(145deg,#1e2024,#23272b)",
                    textAlign: "center",
                    margin: "16px 0px",
                    flexDirection: { md: "auto", xs: "column" }
                  }}>




                  <Tab sx={{ color: "#878e99", }} className='tabs tab1' value={0} label="Education" />
                  <Tab sx={{ color: "#878e99", }} className='tabs tab2' value={1} label="Technical Skills" />
                  <Tab sx={{ color: "#878e99", }} className='tabs tab3' value={2} label="Professional Experience" />
                </Tabs>


              </div>
              <TabPanel value={value} index={0}>

                <Box>
                  <div>
                    <Typography sx={{
                      fontWeight: 700,
                      fontSize: "36px",
                      lineHeight: "62px",
                      color: "#c4cfde",
                      marginBottom: "1.5rem"
                    }}>Education Quality</Typography>
                  </div>

                  <Box sx={{
                    padding: "55px 40px",
                    borderRadius: "6px",
                    background: "linear-gradient(145deg, #1e2024, #23272b)",
                    boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                    transition: "all 0.4s",
                    "&:hover": {
                      background: "linear-gradient(to right bottom, #212428, #16181c)",
                      animationDelay: "0.3s",

                    }

                  }}>

                    <Box sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #1a1d23",
                      paddingBottom: '20px',
                      marginBottom: "20px"
                    }}>

                      <Box sx={{
                        marginBottom: "15px"
                      }}>
                        <h1 className='h1-styling'>Bachelor of Science: Informational Technology</h1>
                        <Typography className='span-styling'>Saint Mary's University - Minneapolis, Minnesota ( January 2016 )</Typography>
                      </Box>



                    </Box>
                    <p style={{
                      fontSize: "18px",
                      color: "#878e99",
                      transition: "0.4s",
                      textAlign: "left"
                    }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem accusamus fugiat dolorum rem quos voluptate fugit omnis corrupti et dolorem ipsum maxime, atque illo, animi quis quas officia expedita minima?
                    </p>


                  </Box>

                </Box>

              </TabPanel>

              <TabPanel value={value} index={1}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Box>



                      <div className="skill-box">
                        <span className="title">Active Directory</span>
                        <div className="skill-bar">
                          <span className="skill-per html">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Citrix</span>
                        <div className="skill-bar">
                          <span className="skill-per css">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Windows Firewalls support</span>
                        <div className="skill-bar">
                          <span className="skill-per javascript">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Jira/Atlassian</span>
                        <div className="skill-bar">
                          <span className="skill-per nodejs">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Cherwell</span>
                        <div className="skill-bar">
                          <span className="skill-per reactjs">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">SSL Certificate knowledge</span>
                        <div className="skill-bar">
                          <span className="skill-per mui">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">VPN</span>
                        <div className="skill-bar">
                          <span className="skill-per mui">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Incident Management</span>
                        <div className="skill-bar">
                          <span className="skill-per mui">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Experience with Java</span>
                        <div className="skill-bar">
                          <span className="skill-per mui">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Knowledge in SQL</span>
                        <div className="skill-bar">
                          <span className="skill-per mui">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>

                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box>
                      <div className="skill-box">
                        <span className="title">Group policy</span>
                        <div className="skill-bar">
                          <span className="skill-per html">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Cisco phone</span>
                        <div className="skill-bar">
                          <span className="skill-per css">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Data backup, upgrades, and retrieval</span>
                        <div className="skill-bar">
                          <span className="skill-per javascript">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Azure Active Directory</span>
                        <div className="skill-bar">
                          <span className="skill-per nodejs">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Intune</span>
                        <div className="skill-bar">
                          <span className="skill-per reactjs">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">jamf</span>
                        <div className="skill-bar">
                          <span className="skill-per mui">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Powershell/Scripting</span>
                        <div className="skill-bar">
                          <span className="skill-per mui">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>
                      <div className="skill-box">
                        <span className="title">Zoom</span>
                        <div className="skill-bar">
                          <span className="skill-per mui">
                            <span className="tooltip">100%</span>
                          </span>
                        </div>
                      </div>


                    </Box>
                  </Grid>

                </Grid>
              </TabPanel>

              <TabPanel value={value} index={2}>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{
                      padding: "55px 40px",
                      borderRadius: "6px",
                      background: "linear-gradient(145deg, #1e2024, #23272b)",
                      boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                      transition: "all 0.4s",
                      "&:hover": {
                        background: "linear-gradient(to right bottom, #212428, #16181c)",
                        animationDelay: "0.3s",

                      }

                    }}>

                      <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #1a1d23",
                        paddingBottom: '20px',
                        marginBottom: "20px"
                      }}>

                        <Box sx={{
                          marginBottom: "15px"
                        }}>
                          <Typography component='h1' sx={{
                            fontSize: { md: "24px", xs: "18px" }
                          }} className='h1-styling'>EverCommerce Inc.</Typography>
                          <Typography className='span-styling' sx={{ textAlign: "left" }}>IT Administrator</Typography>
                        </Box>
                        <Box sx={{
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <span className='span-degree-styling' style={{ marginBottom: "1rem", padding: "0.5rem" }}>04/2017 to Present</span>


                        </Box>


                      </Box>
                      <Typography sx={{
                        fontSize: { md: "18px", xs: "14px" },
                        color: "#878e99",
                        transition: "0.4s",
                        textAlign: "left"
                      }}>
                        Interact with the help desk and other teams to assist in troubleshooting, identify root cause, and provide technical support when needed <br />
                        Image Desktop and laptop computers for new employees <br />
                        Manage physical and virtual servers, including backup and restore <br />
                        Support Windows and office licensing <br />
                        Device requirements for new IT initiatives and implement and manage solutions that meet these requirements. <br />
                        Manage vendors, including MSP, cloud services providers, IT equipment supplier, and software providers. <br />
                        Maintain essential IT operations, including operating systems, security tools, applications, servers, email systems, laptops, desktops, software, and hardware. <br />
                        Experience in project management, application design and integration, and cloud computing (specifically Microsoft Azure)

                      </Typography>


                    </Box>
                    <br />
                    <Box sx={{
                      padding: "55px 40px",
                      borderRadius: "6px",
                      background: "linear-gradient(145deg, #1e2024, #23272b)",
                      boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                      transition: "all 0.4s",
                      "&:hover": {
                        background: "linear-gradient(to right bottom, #212428, #16181c)",
                        animationDelay: "0.3s",

                      }

                    }}>

                      <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #1a1d23",
                        paddingBottom: '20px',
                        marginBottom: "20px"
                      }}>

                        <Box sx={{
                          marginBottom: "15px"
                        }}>
                          <Typography sx={{
                            fontSize: { md: "24px", xs: "18px" }
                          }} className='h1-styling'>Apple, Inc.</Typography>
                          <Typography sx={{
                            color: "#c4cfde",
                            fontSize: { md: "18px", xs: "14px" },
                            textAlign: "left"
                          }}>
                            Minneapolis, Minnesota
                          </Typography>
                          <Typography className='span-styling' sx={{ textAlign: "left", fontSize: { md: "16px", xs: "14px" } }}>Service Desk Technician</Typography>
                        </Box>
                        <Box sx={{
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <span className='span-degree-styling' style={{ marginBottom: "1rem", padding: "0.5rem" }}>01/2009 to 08/2012</span>


                        </Box>


                      </Box>
                      <Typography sx={{
                        fontSize: { md: "18px", xs: "14px" },
                        color: "#878e99",
                        transition: "0.4s",
                        textAlign: "left"
                      }}>
                        Provided technical support for customers related to the installation, troubleshooting and integration of iOS<br />
                        Software products and supporting technologies <br />
                        Provided direct assistance to customers as an escalation and collaborative problem-solving point for more complex support cases<br />
                        Implemented company policies, technical procedures and standards for preserving the integrity and security of data, reports and access<br />
                        Utilized available resources to independently resolve support issues <br />
                        Created and maintained internal and external documentation related to technical topic specialty<br />


                      </Typography>


                    </Box>
                    <br />
                    <Box sx={{
                      padding: "55px 40px",
                      borderRadius: "6px",
                      background: "linear-gradient(145deg, #1e2024, #23272b)",
                      boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                      transition: "all 0.4s",
                      "&:hover": {
                        background: "linear-gradient(to right bottom, #212428, #16181c)",
                        animationDelay: "0.3s",

                      }

                    }}>

                      <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #1a1d23",
                        paddingBottom: '20px',
                        marginBottom: "20px"
                      }}>

                        <Box sx={{
                          marginBottom: "15px"
                        }}>
                          <Typography sx={{
                            fontSize: { md: "24px", xs: "16px" }
                          }} className='h1-styling'>IBM–Rochester Minnesota</Typography>

                          <Typography className='span-styling' sx={{ textAlign: "left", fontSize: { md: "18px", xs: "14px" } }}>Desktop Support Technician</Typography>
                        </Box>
                        <Box sx={{
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <span className='span-degree-styling' style={{ marginBottom: "1rem", padding: "0.5rem" }}>01/2004 to 05/2008</span>


                        </Box>


                      </Box>
                      <Typography sx={{
                        fontSize: { md: "18px", xs: "14px" },
                        color: "#878e99",
                        transition: "0.4s",
                        textAlign: "left"
                      }}>
                        Set up hardware and install and configure software and  <br />
                        Maintain and repair technological equipment (e.g. routers) or peripheral devices <br />
                        Install well-functioning LAN/WAN and other networks and manage components (servers, IPs etc.) <br />
                        Manage security options and software in computers and networks to maintain privacy and protection from attacks <br />
                        Perform regular upgrades to ensure systems remain updated <br />
                        Troubleshoot system failures or bugs and provide solutions to restore functionality


                      </Typography>


                    </Box>
                  </Grid>


                  <Grid item xs={12} md={6}>
                    <Box sx={{
                      padding: "55px 40px",
                      borderRadius: "6px",
                      background: "linear-gradient(145deg, #1e2024, #23272b)",
                      boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                      transition: "all 0.4s",
                      "&:hover": {
                        background: "linear-gradient(to right bottom, #212428, #16181c)",
                        animationDelay: "0.3s",

                      }

                    }}>

                      <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #1a1d23",
                        paddingBottom: '20px',
                        marginBottom: "20px"
                      }}>

                        <Box sx={{
                          marginBottom: "15px"
                        }}>
                          <Typography sx={{
                            fontSize: { md: "24px", xs: "18px" }
                          }} className='h1-styling'>Faegre Drinker LLP </Typography>
                          <Typography sx={{ color: "#c4cfde", fontSize: { md: "18px", xs: "14px" }, textAlign: "left" }}>
                            (previously Faegre Baker Daniels LLP)
                          </Typography>
                          <Typography className='span-styling' sx={{ textAlign: "left", fontSize: { md: "18px", xs: "12px" } }}>Service Desk Analyst</Typography>
                        </Box>
                        <Box sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        }}>
                          <span className='span-degree-styling' style={{ marginBottom: "1rem", padding: "0.5rem" }}>08/2015 to 03/2017</span>


                        </Box>


                      </Box>
                      <Typography sx={{
                        fontSize: { md: "18px", xs: "14px" },
                        color: "#878e99",
                        transition: "0.4s",
                        textAlign: "left"
                      }}>
                        Field incoming technology requests from firm personnel via email inbox and call queue
                        <br />
                        Effectively communicate both verbally and electronically within virtual Service Desk team environment <br />
                        Administering Microsoft Active Directory<br />
                        Multitask and prioritize time-sensitive tasks in a dynamic high-pressure environment <br />
                        Able to troubleshoot and resolve complex issues <br />
                        Saw issues through end-to-end with high customer satisfaction (per customer surveys) <br />
                        Oversaw and ran the Service Desk’s VIP support process single-handedly

                      </Typography>


                    </Box>

                    <br />
                    <Box sx={{
                      padding: "55px 40px",
                      borderRadius: "6px",
                      background: "linear-gradient(145deg, #1e2024, #23272b)",
                      boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                      transition: "all 0.4s",
                      "&:hover": {
                        background: "linear-gradient(to right bottom, #212428, #16181c)",
                        animationDelay: "0.3s",

                      }

                    }}>

                      <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #1a1d23",
                        paddingBottom: '20px',
                        marginBottom: "20px"
                      }}>

                        <Box sx={{
                          marginBottom: "15px"
                        }}>
                          <Typography sx={{
                            fontSize: { md: "24px", xs: "16px" }
                          }} className='h1-styling'>ECMC–Oakdale, Minnesota </Typography>
                          <Typography className='span-styling' sx={{ textAlign: "left", fontSize: { md: "18px", xs: "14px" } }}>Service Desk Technician</Typography>
                        </Box>
                        <Box sx={{
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <span className='span-degree-styling' style={{ marginBottom: "1rem", padding: "0.5rem" }}>08/2012 to 08/2015</span>


                        </Box>


                      </Box>
                      <Typography sx={{
                        fontSize: { md: "18px", xs: "14px" },
                        color: "#878e99",
                        transition: "0.4s",
                        textAlign: "left"
                      }}>
                        Act as first point of contact for IT needs. Track issues and take ownership of problems. <br />
                        Escalate issues and involve experts wherever required to resolve issues as quickly as possible. <br />
                        Gathers information about problems from the end-user by asking clarifying questions, presenting options and/or    solutions and determining the level of complexity.<br />
                        Recognizes and identifies potential areas where existing policies and procedures require change, or where new ones need to be developed.<br />
                        Assist in maintaining internal and external facing knowledge base <br />
                        Utilizes ticketing system; accurately, quickly, and efficiently recording all interactions with customers while consistently meeting established Service Desk Key Performance Indicators.<br />
                        Assisted in planning and executing two operating system upgrades across the entire network.<br />
                        Investigates and implements ways of reducing calls to the Service Desk.<br />
                        Helps with unscheduled system outages or with unresolved issues to ensure timely updates to customers.<br />
                        Consulting with other vendors to identify best approaches to resolving complex issues
                      </Typography>


                    </Box>
                  </Grid>
                </Grid>

              </TabPanel>
            </Box>


          </Grid>

        </Container>
        <Divider sx={{
          maxWidth: "1270px",
          margin: "0 auto",
          background: "#121415",
          // marginTop:"6rem"
        }} />
      </Box>
    </>
  )
}

export default Resume