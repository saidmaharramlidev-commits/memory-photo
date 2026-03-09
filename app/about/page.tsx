import DetailsHero from "@/components/DetailsHero"
import HomeAbout from "@/components/HomeAbout"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Pic from "@/public/aboutPagePic5.jpeg"
import Footer from "@/components/Footer"

function About() {
    return (
        <div id="mainAboutPage">
            <Navbar />
            <DetailsHero header="About" url="Home > About" />
            <HomeAbout />

            <div id="container-wrapper-about">
                <Image alt="Pic" src={Pic} id="aboutPagePic" />
                <div id="containerAbout">
                    <div id="aboutDiv">

                        <div className="infoAbout1">
                            <h3>Experience</h3>
                            <p>
                                Over 5 years of experience capturing portraits, landscapes, and
                                special moments. My goal is to turn simple scenes into timeless
                                visual stories.
                            </p>
                        </div>

                        <div className="infoAbout2">
                            <h3>Happy Clients</h3>
                            <p>
                                I have worked with more than 120 clients across portraits,
                                events and commercial photography. Building trust and
                                delivering meaningful photos is always my first priority.
                            </p>
                        </div>

                        <div className="infoAbout3">
                            <h3>Awards & Recognition</h3>
                            <p>
                                My work has been featured in photography communities and
                                creative showcases, reflecting my passion for storytelling
                                through light and composition.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />


        </div>
    )
}

export default About