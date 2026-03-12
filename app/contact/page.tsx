"use client"








import DetailsHero from "@/components/DetailsHero"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";


const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#DAA520",
                    },
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "white",
                    "&.Mui-focused": {
                        color: "#DAA520",
                    },
                },
            },
        },

        // 👇 THIS PART MAKES INPUT TEXT WHITE
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: "white",
                },
            },
        },
    },
});














function Contact() {


    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [message, setMessage] = useState<string>('')










    return (
        <div id="mainContact">
            <Navbar />
            <DetailsHero header="Contact" url="Home > Contact" />


            <div id="containerContact">
                <div id="headersContact">
                    <h1>Want to work with me?</h1>
                    <h4>If you’re interested in working together or want to book a session, send a message and I’ll get back to you as soon as possible</h4>

                </div>

                <div id="formContact-wrapper">

                    <ThemeProvider theme={theme}>
                        <TextField className="field" value={name} onChange={(e) => setName(e.target.value)} label="Name" />
                        <TextField className="field" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} label="Phone Number" />
                        <TextField className="field" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
                        <TextField className="field" value={message} onChange={(e) => setMessage(e.target.value)} label="Message" multiline rows={4} />
                    </ThemeProvider>

                    <Button variant="contained" id="contactSubmitCta" >Send Form</Button>

                </div>



            </div>

            <div id="location-wrapper">
                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps?q=40.4093,49.8671&z=13&output=embed"
                ></iframe>

            </div>

            <Footer />

        </div>
    )
}

export default Contact