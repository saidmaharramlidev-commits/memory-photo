"use client"


import Image from "next/image"
import pic from "@/public/aboutPic2.jpg"
import { useEffect } from "react";

function HomeAbout() {



    useEffect(() => {
        const elements = document.querySelectorAll(
            ".aboutName, .aboutTitle, .aboutLocation, .aboutBio, .infoGrid"
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("slideUp");
                observer.unobserve(entry.target);
            });
        });

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


















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