import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "emailjs-com";
import CV from './Elsadek Elnimeiry.pdf'
import CONTACT_IMG from "./contact1.png";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
// const ErrorText = ({ text }) => {
//   return (
//     <Typography sx={{ fontSize: '9px', color: 'red', marginBottom: '8px' }}>
//       {text}
//     </Typography>
//   )
// }
const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    phone: "",
    user_email: "",
    subject: "",
    contactMessage: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name + value);

    setMessage({ ...message, [name]: value });
  };
  const sendemail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kiit8ng",
        "template_2bbbsne",
        e.target,
        "Exm8lruIVvWzkiLNu"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    toast.success("thanks for contact me", {
      theme: "#212428",
      style: {
        borderRadius: "10px",
        color: "#fff",
      },
    });
    setMessage({
      name: "",
      phone: "",
      user_email: "",
      subject: "",
      contactMessage: "",
    });
  };

  return (
    <>
      <Box mt={12}>
        <Container
          sx={{
            marginBottom: "8rem",
          }}
        >
          <Fade bottom>
            <Typography
              id="Contact"
              sx={{
                color: "#f9004d",
                letterSpacing: "1px",
                marginBottom: "10px",
                textTransform: "uppercase",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Montserrat, sans-serif",
                textAlign: "center",
              }}
            >
              contact
            </Typography>
          </Fade>

          <Fade bottom>
            <Typography
              component={"h1"}
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "4rem" },
                color: "#c4cfde",
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1.2,
                marginBottom: "3rem",
              }}
            >
              Contact With Me
            </Typography>
          </Fade>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Box>
                  <Container>
                    <Grid container>
                      <Box
                        className="img"
                        sx={{
                          padding: "30px",
                          backgroundColor: "#212428",
                          borderRadius: "10px",
                          boxShadow:
                            "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                          height: "100%",
                          overflow: "hidden",
                          verticalAlign: "middle",
                        }}
                      >
                        <Box
                          className="img-box"
                          sx={{
                            marginBottom: "28px",
                            overflow: "hidden",
                            borderRadius: "10px",
                          }}
                        >
                          <img
                            className="img"
                            src={CONTACT_IMG}
                            alt="contact img"
                            style={{
                              width: "100%",
                              height: "auto",
                              // borderRadius:"10px",
                            }}
                          />
                        </Box>

                        <Box
                          sx={{
                            marginBottom: "15px",
                            textAlign: "left",
                          }}
                        >
                          <h1
                            style={{
                              fontSize: "29px",
                              marginBottom: "9px",
                              color: "#E4E6EA",
                              fontWeight: 700,
                              letterSpacing: "2px",
                              wordSpacing: "2px",
                            }}
                          >
                            Elsadek Elnimeiry
                          </h1>
                          {/* <p className="span-text">Developer</p> */}
                        </Box>

                        <Box
                          sx={{
                            marginBottom: "39px",
                            textAlign: "left",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 400,
                              color: "#878e99",
                              marginBottom: "20px",
                            }}
                          >
                            I am available for freelance work. Connect with me
                            via email or my phone number.
                          </Typography>

                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: "#878e99",
                              }}
                            >
                              Email: {""}
                              <Link
                                href="mailto:usman.latif762@gmail.com"
                                className="usman-mail"
                                sx={{
                                  color: "#c4cfde",
                                  fontWeight: 400,
                                  textDecoration: "none",
                                  outline: "none",
                                }}
                              >
                                elsadekelnimeriy@gmail.com
                              </Link>
                            </p>
                          </div>
                        </Box>

                        <Fade bottom>
                          <Box
                            sx={{
                              marginRight: "25%",
                              textAlign: "left",
                            }}
                          >
                            <Typography
                              sx={{
                                marginRight: "32%",
                                color: "#c4cfde",
                                fontSize: "14px",
                                fontWeight: 300,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                              }}
                            >
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
                                cursor: "pointer",
                                textAlign: "center"

                              }} className='send-btn' id='send-masg'>
                                Download Resume
                              </Link>


                            </Box>
                          </Box>
                        </Fade>
                      </Box>
                    </Grid>
                  </Container>
                </Box>
              </Grid>

              <Grid item xs={12} md={7}>
                <Box>
                  <Container>
                    <Grid container>
                      <Box
                        sx={{
                          padding: "30px",
                          backgroundColor: "#212428",
                          borderRadius: "10px",
                          boxShadow:
                            "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                          marginLeft: "20px",
                          height: "100%",
                          margin: "auto",
                        }}
                      >
                        <form action="" onSubmit={handleSubmit(sendemail)}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <div className="margin-bottom">

                                <label htmlFor="">your name</label>
                                <input
                                  required
                                  type="text"
                                  name="name"
                                  id="name"
                                  autoComplete="off"
                                  value={message.name}
                                  style={{ width: "90%" }}
                                  onChange={handleInput}
                                // error={errors.name}
                                // {...register("name", {
                                //   required: true,
                                //   pattern: /^[A-Za-z]{1,}$/,
                                // })}
                                />
                                {/* {errors.firstName && (
                                  <>
                                    {errors.firstName.type === "pattern"
                                      ? ErrorText("Minimum Length 3 characters!")
                                      : ErrorText("First Name is Required!")}
                                  </>
                                )} */}

                              </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <div className="margin-bottom">
                                <label htmlFor="">phone number</label>
                                <input
                                  required
                                  style={{ width: "90%" }}
                                  autoComplete="off"
                                  value={message.phone}
                                  type="text"
                                  onChange={handleInput}
                                  name="phone"
                                  id="phone"
                                />
                              </div>
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <div className="margin-bottom">
                                <label htmlFor="">email</label>
                                <input
                                  required
                                  style={{ width: "95%" }}
                                  autoComplete="off"
                                  value={message.user_email}
                                  type="text"
                                  onChange={handleInput}
                                  name="user_email"
                                  id="user_email"
                                />
                              </div>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <div className="margin-bottom">
                                <label htmlFor="">subject</label>
                                <input
                                  required
                                  style={{ width: "95%" }}
                                  autoComplete="off"
                                  value={message.subject}
                                  type="text"
                                  onChange={handleInput}
                                  name="subject"
                                  id="subject"
                                />
                              </div>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <div className="margin-bottom">
                                <label htmlFor="">your message</label>
                                <textarea
                                  required
                                  style={{ width: "95%" }}
                                  autoComplete="off"
                                  value={message.contactMessage}
                                  className="input"
                                  onChange={handleInput}
                                  name="contactMessage"
                                  id="contactMessage"
                                  rows="10"
                                  cols="30"
                                ></textarea>
                              </div>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <div className="margin-bottom">
                                <Button
                                  type="submit"
                                  className="send-btn send-btn2"
                                  id="send-masg"
                                  sx={{
                                    color: "#ff014f",
                                    padding: "15px 35px",
                                    fontSize: "14px",
                                    border: "none",
                                    fontWeight: 500,
                                    borderRadius: "6px",
                                    background:
                                      "linear-gradient(145deg, #1e2024, #23272b)",
                                    boxShadow:
                                      "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                                    cursor: "pointer",
                                  }}
                                >
                                  send message
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </form>
                      </Box>
                    </Grid>
                  </Container>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Divider
          sx={{
            maxWidth: "1270px",
            margin: "0 auto",
            background: "#121415",
          }}
        />
      </Box>
    </>
  );
};

export default Contact;
