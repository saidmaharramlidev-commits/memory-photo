"use client"



import pic from "@/public/footerPic2.jpg"
import Image from "next/image"


import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import { useEffect } from "react";


function Footer() {


    useEffect(() => {
        const cta = document.getElementById("footer-contact-cta");
        const headerOfFooter = document.getElementById("headerOfFooter");


        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade");
                }
            });
        });

        if (cta) observer.observe(cta);
        if (headerOfFooter) observer.observe(headerOfFooter);

        return () => observer.disconnect();
    }, []);










    return (
        <div id="mainFooter">
            <Image id="footerPic" src={pic} alt="Pic" />
            <h1 id="headerOfFooter">Let's capture something beautiful.</h1>
            <Link id="footer-contact-cta" href={"/contact"}>
                Contact

            </Link>
            <span id="copyrightText">
                said-memory-photo.vercel.app | All rights reserved
            </span>

            <div className="contact-things">
                <h1>Contact</h1>
                <p><EmailIcon />example@gmail.com</p>
                <p><PhoneIcon />+1234567890</p>
                <p><LocationOnIcon />Somewhere in the world</p>


            </div>

            <div className="endpoints">
                <h1>Endpoints</h1>
                <Link href={"#"} className="endpointLink">Home</Link>
                <Link href={"#"} className="endpointLink">About</Link>
                <Link href={"#"} className="endpointLink">Services</Link>
                <Link href={"#"} className="endpointLink">Portfolio</Link>
                <Link href={"#"} className="endpointLink">Home</Link>


            </div>


        </div>
    )
}

export default Footer