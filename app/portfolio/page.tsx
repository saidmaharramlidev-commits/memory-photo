import DetailsHero from "@/components/DetailsHero"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import P1 from "@/public/wedding.jpg"
import P2 from "@/public/party.webp"
import P3 from "@/public/street.jpg"
import Footer from "@/components/Footer"


function Portfolio() {
    return (
        <div id="mainPortfolioPage">

            <Navbar />
            <DetailsHero header="Portfolio" url="Home > Portfolio" />

            <div id="containerPortfolio">

                <div className="rowPortfolioCard">
                    <div className="portfolioCard">

                        <Image
                            src={P1}
                            alt="portfolio photo"
                            fill
                            className="portfolioImg"
                        />

                    </div>

                    <div id="detailsPortfolio">

                        <span className="portfolioCategory">Wedding</span>
                        <h3 className="portfolioTitle">Romantic Ceremony</h3>

                        <p>Capturing the beauty, emotion, and authentic moments of your wedding day through natural and timeless photography. From the quiet, intimate preparations to the joyful celebration with family and friends, every detail is documented with care. The goal is to tell the complete story of the day in a genuine way, preserving laughter, love, and unforgettable memories that couples can look back on for years to come.</p>

                    </div>



                </div>





                <div className="rowPortfolioCard">
                    <div className="portfolioCard">

                        <Image
                            src={P2}
                            alt="portfolio photo"
                            fill
                            className="portfolioImg"
                        />



                    </div>

                    <div id="detailsPortfolio">

                        <span className="portfolioCategory">Party</span>
                        <h3 className="portfolioTitle">Energy</h3>

                        <p>Party photography that captures the energy, excitement, and unforgettable atmosphere of every celebration. From lively dance floors to candid moments between friends, each shot reflects the true spirit of the event. The focus is on natural reactions, vibrant lights, and the unique vibe that makes every party special, creating photos that let you relive the fun and emotions long after the night ends.</p>

                    </div>



                </div>


                <div className="rowPortfolioCard">
                    <div className="portfolioCard">

                        <Image
                            src={P3}
                            alt="portfolio photo"
                            fill
                            className="portfolioImg"
                        />



                    </div>

                    <div id="detailsPortfolio">

                        <span className="portfolioCategory">Street</span>
                        <h3 className="portfolioTitle">Lonely</h3>

                        <p>Street photography focused on capturing authentic life and spontaneous moments in everyday environments. From busy city corners to quiet urban scenes, each image reflects real emotions, movement, and atmosphere. The goal is to document natural interactions, unique characters, and the rhythm of the streets, turning ordinary moments into powerful visual stories that show the beauty of daily life.</p>

                    </div>



                </div>




            </div>
            <Footer />

        </div>
    )
}

export default Portfolio