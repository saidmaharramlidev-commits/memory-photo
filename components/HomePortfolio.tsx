"use client"



import Image from "next/image"
import Pic from "@/public/portfolioPic2.jpg"
import Link from "next/link"
import P1 from "@/public/wedding.jpg"
import P2 from "@/public/party.webp"
import P3 from "@/public/street.jpg"



function HomePortfolio() {

    return (
        <div id="mainPortfolio">
            <Image id="picOfPortfolio" src={Pic} alt="pic" />
            <h1 id="headerOfPortfolio">Portfolio</h1>

            <div id="portfolio-wrapper">

                <div className="portfolioCard">

                    <Image
                        src={P1}
                        alt="portfolio photo"
                        fill
                        className="portfolioImg"
                    />

                    <div className="portfolioOverlay">
                        <span className="portfolioCategory">Wedding</span>
                        <h3 className="portfolioTitle">Romantic Ceremony</h3>
                    </div>

                </div>

                <div className="portfolioCard">

                    <Image
                        src={P2}
                        alt="portfolio photo"
                        fill
                        className="portfolioImg"
                    />

                    <div className="portfolioOverlay">
                        <span className="portfolioCategory">Party</span>
                        <h3 className="portfolioTitle">Energy</h3>
                    </div>

                </div>

                <div className="portfolioCard">

                    <Image
                        src={P3}
                        alt="portfolio photo"
                        fill
                        className="portfolioImg"
                    />

                    <div className="portfolioOverlay">
                        <span className="portfolioCategory">Street</span>
                        <h3 className="portfolioTitle">Lonely</h3>
                    </div>

                </div>

            </div>

            <div id="portfolioCta-wrapper">
                <div id="cta-portfolio">
                    See Portfolio
                </div>

            </div>



        </div>
    )
}



export default HomePortfolio