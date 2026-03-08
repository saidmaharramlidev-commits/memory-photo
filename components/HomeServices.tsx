"use client"


import Pic from "@/public/servicePic.jpg"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"


function HomeServices() {

    useEffect(() => {
        const services = document.getElementsByClassName("service");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fadeUp");
                }
            });
        });

        Array.from(services).forEach((service) => observer.observe(service));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const cta = document.getElementById("moreServicesBtn");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade");
                }
            });
        });

        if (cta) observer.observe(cta);

        return () => observer.disconnect();
    }, []);











    return (
        <div id="mainServices">
            <Image id="servicePic" src={Pic} alt="Picture" />

            <div id="services-wrapper">

                <div className="service">
                    <h2>Wedding Photography</h2>
                    <p>
                        Capturing emotional and timeless moments from your special day
                        with natural light and authentic storytelling.
                    </p>
                </div>

                <div className="service" style={{ animationDelay: "0.4s" }}>
                    <h2>Portrait Sessions</h2>
                    <p>
                        Professional portrait photography that highlights personality,
                        confidence, and unique character.
                    </p>
                </div>

                <div className="service" style={{ animationDelay: "0.8s" }}>
                    <h2>Event Coverage</h2>
                    <p>
                        Creative documentation of events, celebrations,
                        and important moments with cinematic style.
                    </p>
                </div>



            </div>
            <Link href="/services" id="moreServicesBtn">
                More Services
            </Link>
        </div>
    )
}

export default HomeServices