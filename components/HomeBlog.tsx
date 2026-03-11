"use client"


import WeddingBlog from "@/public/weddingBlog.jpg"
import StreetBlog from "@/public/streetBlog.png"
import PortraitBlog from "@/public/portraitBlog.jpeg"
import TravelBlog from "@/public/travelBlog.jpg"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setBlog } from "@/redux/counterSlice"

function HomeBlog() {

    const dispatch = useDispatch()

    const router = useRouter()

    useEffect(() => {
        const blogs = document.getElementsByClassName("blog");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fadeUp");
                }
            });
        });

        Array.from(blogs).forEach((blog) => observer.observe(blog));

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        const cta = document.getElementById("blog-cta-wrapper");

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
        <div id="mainHomeBlog">
            <h1 id="headerOfBlogs">Blogs</h1>
            <div id="blogs-wrapper">

                <div className="blog" onClick={() => {
                    dispatch(setBlog(1))
                    router.push('/blog')
                }}>
                    <Image className="blogPic" src={TravelBlog} alt="blogPic" />

                    <div className="blogText">
                        <span className="blogCategory">Travel</span>
                        <h3 className="blogTitle">Golden Hour in Cappadocia</h3>
                        <p className="blogDesc">
                            A quiet evening capturing balloons floating over the
                            valleys during sunset.
                        </p>
                        <span className="blogDate">May 12, 2026</span>
                    </div>
                </div>

                <div className="blog" style={{ animationDelay: "0.4s" }} onClick={() => {
                    dispatch(setBlog(2))
                    router.push('/blog')
                }}>
                    <Image className="blogPic" src={WeddingBlog} alt="blogPic" />

                    <div className="blogText">
                        <span className="blogCategory">Wedding</span>
                        <h3 className="blogTitle">An Elegant Garden Wedding</h3>
                        <p className="blogDesc">
                            A beautiful ceremony surrounded by flowers and soft
                            afternoon light.
                        </p>
                        <span className="blogDate">April 28, 2026</span>
                    </div>
                </div>

                <div className="blog" style={{ animationDelay: "0.8s" }} onClick={() => {
                    dispatch(setBlog(3))
                    router.push('/blog')
                }}>
                    <Image className="blogPic" src={PortraitBlog} alt="blogPic" />

                    <div className="blogText">
                        <span className="blogCategory">Portrait</span>
                        <h3 className="blogTitle">Natural Light Portraits</h3>
                        <p className="blogDesc">
                            Exploring soft window lighting for expressive portraits.
                        </p>
                        <span className="blogDate">April 10, 2026</span>
                    </div>
                </div>

                <div className="blog" style={{ animationDelay: "1.2s" }} onClick={() => {
                    dispatch(setBlog(4))
                    router.push('/blog')
                }}>
                    <Image className="blogPic" src={StreetBlog} alt="blogPic" />

                    <div className="blogText">
                        <span className="blogCategory">Street</span>
                        <h3 className="blogTitle">Morning Streets of Paris</h3>
                        <p className="blogDesc">
                            Capturing everyday life during the quiet early hours.
                        </p>
                        <span className="blogDate">March 18, 2026</span>
                    </div>
                </div>

            </div>

            <div id="blog-cta-wrapper" onClick={() => router.push('/blog')}>
                <div>See blogs</div>

            </div>
        </div>
    )
}

export default HomeBlog