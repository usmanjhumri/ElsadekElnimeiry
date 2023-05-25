import React, { useState } from "react";
import "./Navbar.css";
import { Box, Container } from "@mui/material";

const Navbar = () => {
    const [activeOffset, setActiveOffset] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setActiveOffset(true);
        } else {
            setActiveOffset(false);
        }
    });
    return (
        <Box>
            <Container>
                <nav className={activeOffset ? "navbar navbar-fixed" : "navbar"}>
                    <div className="">
                        <h1 className="heading">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt=""
                            />
                            <span>USMAN asdAS</span>
                        </h1>
                        <ul className="list">

                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">Features</a>
                            </li>
                            <li>
                                <a href="/">portfolio</a>
                            </li>
                            <li>
                                <a href="/">resume</a>
                            </li>
                            <li>
                                <a href="/">contacts</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </Box>
    );
};

export default Navbar;
