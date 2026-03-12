import DetailsHero from "@/components/DetailsHero"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Pic from "@/public/servicePic.jpg"
import Image from "next/image"

function Services() {
    return (
        <div id="mainServicesPage">
            <Navbar />
            <DetailsHero header="Services" url="Home > Services" />
            <div id="allServicesDetails-wrapper">
                <Image id="allServicesImage" src={Pic} alt="Picture" />

                <div id="servicesDetails-wrapper">

                    <div className="service">
                        <h2>Wedding Photography</h2>
                        <p>
                            Capturing emotional and timeless moments from your special day
                            with natural light and authentic storytelling.
                        </p>
                    </div>

                    <div className="service" >
                        <h2>Portrait Sessions</h2>
                        <p>
                            Professional portrait photography that highlights personality,
                            confidence, and unique character.
                        </p>
                    </div>

                    <div className="service" >
                        <h2>Event Coverage</h2>
                        <p>
                            Creative documentation of events, celebrations,
                            and important moments with cinematic style.
                        </p>
                    </div>

                    <div className="service">
                        <h2>Fashion Photography</h2>
                        <p>
                            Stylish and modern fashion shoots for brands, designers,
                            and models with attention to detail and aesthetics.
                        </p>
                    </div>

                    <div className="service">
                        <h2>Product Photography</h2>
                        <p>
                            Clean and high-quality product images designed for
                            e-commerce, branding, and marketing purposes.
                        </p>
                    </div>

                    <div className="service">
                        <h2>Travel & Lifestyle Photography</h2>
                        <p>
                            Natural lifestyle and travel photography that captures
                            real experiences, environments, and authentic moments.
                        </p>
                    </div>

                    <div className="service">
                        <h2>Commercial Photography</h2>
                        <p>
                            High-quality photography for businesses, advertisements,
                            and marketing campaigns that help brands stand out visually.
                        </p>
                    </div>

                    <div className="service">
                        <h2>Real Estate Photography</h2>
                        <p>
                            Professional interior and exterior photography designed
                            to showcase properties in the most attractive and spacious way.
                        </p>
                    </div>





                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Services