"use client"


import Image from "next/image"
import pic from "@/public/aboutPic2.jpg"
import { useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)


function HomeAbout() {



    useEffect(() => {

        gsap.from(
            ".aboutName, .aboutTitle, .aboutLocation, .aboutBio, .infoGrid",
            {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: "#about-wrapper",
                    start: "top 70%",
                    end: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        )


    }, [])


















    return (
        <div id="mainAbout">
            <div id="pic-wrapper">
                <Image id="aboutPic" alt="pic" src={pic} />
            </div>
            <div id="about-wrapper">
                <h1 className="aboutName">Said Maharramli</h1>
                <h2 className="aboutTitle">Portrait & Lifestyle Photographer</h2>

                <p className="aboutLocation">📍 Baku, Azerbaijan</p>

                <p className="aboutBio">
                    I specialize in capturing authentic emotions and natural light.
                    My approach is simple — real moments, honest expressions,
                    and timeless compositions that tell a story.
                </p>

                <div className="infoGrid">
                    <div className="infoItem">
                        <span className="infoLabel">Email</span>
                        <span className="infoValue">example@gmail.com</span>
                    </div>

                    <div className="infoItem">
                        <span className="infoLabel">Studio</span>
                        <span className="infoValue">City Center Studio</span>
                    </div>

                    <div className="infoItem">
                        <span className="infoLabel">Specialty</span>
                        <span className="infoValue">Natural Light & Storytelling</span>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default HomeAbout