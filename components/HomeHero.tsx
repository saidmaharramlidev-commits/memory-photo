"use client"



import Image from "next/image"
import HeroPic from "@/public/heroPic.webp"
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useState } from "react";


function HomeHero() {


    const [hover, setHover] = useState<boolean>(false)





    return (
        <div id="mainHero">
            <Image id="heroPic" src={HeroPic} alt="Logo" />
            <div id="heroText">
                <h1>Capturing Moments, Crafting Stories</h1>
                <p>High-end photography that turns fleeting moments into timeless art. Specializing in weddings, portraits, and lifestyle shoots.</p>
            </div>

            <div id="heroCta"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}

            >
                <div>
                    {hover ? <FaPause id="pauseIcon" /> : <FaPlay id="playIcon" />}
                </div>
                <span>See Portfolio</span>

            </div>


        </div>
    )
}

export default HomeHero