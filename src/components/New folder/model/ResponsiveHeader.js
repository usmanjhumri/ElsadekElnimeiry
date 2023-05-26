import React from "react";
import { Box, Container, Divider, Drawer } from "@mui/material";

import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-scroll";
import "./Responsive.css";
import CV from "./ElNewresume.pdf";

export default function ResponsiveHeader({ state, setstate }) {
  // let store = useSelector((s)=>s)
  return (
    <div
      className="drawer-color"
      style={{
        marginTop: "1rem",
        padding: "2rem",
      }}
    >
      <Drawer
        sx={{}}
        open={state}
        onClose={() => {
          setstate(!state);
        }}
      >
        <Box sx={{ textAlign: "center" }}></Box>
        <Box
          sx={{
            //  padding: "20px 3rem",
            // background:"#212328"
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <Box
            className="name_logo"
            sx={{
              fontSize: { md: "35px", xs: "25px" },
              color: "#c4cfde",
              marginTop: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            Elsadek Elnimeiry
          </Box>
          <Container>
            <Divider
              sx={{
                maxWidth: "1270px",
                margin: "0 auto",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            />
          </Container>
          <Container>
            <Box sx={{ margin: "50px 0px" }}>
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="header-links"
              >
                Home{" "}
              </Link>

              <Link
                to="Feature"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="header-links"
              >
                Feature
              </Link>

              <Link
                to="Portfol"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="header-links"
              >
                Portfolio
              </Link>

              <Link
                to="Resume"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="header-links"
              >
                Resume{" "}
              </Link>

              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="header-links"
              >
                Contact
              </Link>
            </Box>
          </Container>

          <Container>
            <Divider
              sx={{
                maxWidth: "1270px",
                margin: "0 auto",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            />
          </Container>
          {/* <Box
            sx={{
              display: "inline-block",
              alignItems: "left",
              marginTop: "3rem",
            }}
            mt={1}
          >
            <Box
              sx={{
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              mt={1}
            >
              <Link className="link" href="mailto:elsadekelnimeriy@gmail.com">
                <AiOutlineMail
                  className="find_me"
                  id="linkedin"
                  style={{
                    padding: "20px",
                    boxShadow:
                      "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                    color: "rgb(10, 102, 194)",
                    background: "linear-gradient(145deg,#1e2024,#23272b)",

                    margin: "14px",
                    borderRadius: "8px",
                    transition: "all .5s ease",
                    Size: "14px",
                    //   "&:hover":{
                    //     background:"linear-gradient(to right bottom,#ffffff,#00ff40)",

                    // }
                  }}
                />
              </Link>

              <Link
                href={CV}
                download="Elsadek Elnimeiry.pdf"
                sx={{
                  textDecoration: "none",
                  color: "#ff014f",
                  background: "linear-gradient(145deg,#1e2024,#23272b)",
                  boxShadow: "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e",
                  // padding: "1rem 0.5rem",
                  borderRadius: "8px",
                  transition: "all 0.5s",
                  cursor: "pointer",
                }}
                className="send-btn"
                id="send-masg"
              >
                Download Resume
              </Link>
            </Box>
          </Box> */}
        </Box>
      </Drawer>
    </div>
  );
}
