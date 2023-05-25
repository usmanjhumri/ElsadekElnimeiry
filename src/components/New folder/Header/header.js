import React, { useState } from "react";
import { Grid, Box, Typography, IconButton, Container } from "@mui/material";
import "./Header.css";
import { Link } from "react-scroll";
import { IoIosMenu } from "react-icons/io";
import ResponsiveHeader from "../model/ResponsiveHeader";

export default function Header() {
  const [state, setstate] = useState(false);
  const [activeOffset, setActiveOffset] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setActiveOffset(true);
    } else {
      setActiveOffset(false);
    }
  });
  return (
    <>
      <nav
        className={activeOffset ? "navbar navbar-fixed" : "navbar"}
        style={{ opacity: 9 }}
      >
        <div>
          <Grid
            container
            sx={{
              padding: { md: "10px 10px", xs: "10px 20px" },
              alignItems: "center",
            }}
          >
            <Container>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={
                    {
                      // flexGrow: 1,
                    }
                  }
                >
                  <Typography
                    sx={{
                      color: "#e8e9e9",
                      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.7rem" },
                    }}
                  >
                    Elsadek Elnimeiry
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: { md: "flex", xs: "none" },
                    alignItems: "center",
                    justifyContent: "space-around",
                    gap: 4,
                  }}
                >
                  <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="header-link"
                  >
                    Home{" "}
                  </Link>

                  <Link
                    to="Feature"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="header-link"
                  >
                    Feature
                  </Link>

                  <Link
                    to="Portfol"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="header-link"
                  >
                    Portfol
                  </Link>

                  <Link
                    to="Resume"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="header-link"
                  >
                    Resume{" "}
                  </Link>

                  <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="header-link"
                  >
                    Contact
                  </Link>
                  {/* <ToogleMenu/>  */}
                </Box>

                <Box
                  sx={{
                    display: { md: "none", xs: "block" },
                    textAlign: "right",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      setstate(!state);
                    }}
                  >
                    <IoIosMenu
                      style={{
                        fontSize: "36px",
                        color: "#ff014f",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Container>
          </Grid>
          <ResponsiveHeader state={state} setstate={setstate} />
        </div>
      </nav>
    </>
  );
}
