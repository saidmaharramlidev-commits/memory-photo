import Pic from "@/public/servicePic.jpg"
import Image from "next/image"
import Link from "next/link"

function HomeServices() {
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

                <div className="service">
                    <h2>Portrait Sessions</h2>
                    <p>
                        Professional portrait photography that highlights personality,
                        confidence, and unique character.
                    </p>
                </div>

                <div className="service">
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