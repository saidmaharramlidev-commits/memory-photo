"use client"



import WeddingBlog from "@/public/weddingBlog.jpg"
import StreetBlog from "@/public/streetBlog.png"
import PortraitBlog from "@/public/portraitBlog.jpeg"
import TravelBlog from "@/public/travelBlog.jpg"
import { setBlog } from "@/redux/counterSlice"
import LandscapeBlog from "@/public/landscapeBlog.jpg"
import FashionBlog from "@/public/fashionBlog.jpg"
import Image from "next/image"
import { useDispatch, UseDispatch } from "react-redux"



export const getBlogs = (dispatch: any) => (
    <>
        <div className="blog" onClick={() => dispatch(setBlog(1))}>
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

        <div className="blog" onClick={() => {
            dispatch(setBlog(2))
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

        <div className="blog" onClick={() => {
            dispatch(setBlog(3))
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

        <div className="blog" onClick={() => {
            dispatch(setBlog(4))
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

        <div className="blog" onClick={() => {
            dispatch(setBlog(5))
        }}>
            <Image className="blogPic" src={LandscapeBlog} alt="blogPic" />

            <div className="blogText">
                <span className="blogCategory">Landscape</span>
                <h3 className="blogTitle">Misty Mountains at Sunrise</h3>
                <p className="blogDesc">
                    Capturing the peaceful moment when morning fog slowly
                    reveals the beauty of the mountains.
                </p>
                <span className="blogDate">March 5, 2026</span>
            </div>
        </div>

        <div className="blog" onClick={() => {
            dispatch(setBlog(6))
        }}>
            <Image className="blogPic" src={FashionBlog} alt="blogPic" />

            <div className="blogText">
                <span className="blogCategory">Fashion</span>
                <h3 className="blogTitle">Minimalist Fashion Session</h3>
                <p className="blogDesc">
                    A clean studio shoot focusing on style, expression,
                    and modern fashion aesthetics.
                </p>
                <span className="blogDate">February 21, 2026</span>
            </div>
        </div>
    </>
)





export const getBlog1 = (dispatch: any) => (
    <div id="blogDetails-wrapper">
        <div className="detailBlogImage-wrapper">
            <Image className="detailBlogImage" src={TravelBlog} alt="blogPic" />
        </div>

        <div className="detailBlogInfos-wrapper">
            <h3 className="blogCategory-detail">Travel</h3>
            <h1 className="blogTitle-detail">Golden Hour in Cappadocia</h1>
            <p className="blogDesc-detail">
                Cappadocia during golden hour feels almost magical. As the sun begins
                to set, warm light spreads across the valleys while colorful hot air
                balloons slowly rise into the sky. The quiet landscape and soft tones
                create a peaceful atmosphere that is perfect for photography.

                Walking through the hills with a camera, every moment offers a new
                perspective — balloons drifting above the unique rock formations and
                sunlight gently touching the valley floor. It is a beautiful reminder
                of how powerful natural light can be in storytelling through images.
            </p>
            <span className="blogDate-detail">May 12, 2026</span>

        </div>

        <div className="ctaOfDetails" onClick={() => dispatch(setBlog(0))}>
            Back

        </div>

    </div >
)

export const getBlog2 = (dispatch: any) => (
    <div id="blogDetails-wrapper">
        <div className="detailBlogImage-wrapper">
            <Image className="detailBlogImage" src={WeddingBlog} alt="blogPic" />
        </div>

        <div className="detailBlogInfos-wrapper">
            <h3 className="blogCategory-detail">Wedding</h3>
            <h1 className="blogTitle-detail">An Elegant Garden Wedding</h1>
            <p className="blogDesc-detail">
                This garden wedding was filled with elegance, emotion, and beautiful
                natural light. Surrounded by blooming flowers and soft greenery, the
                ceremony created a calm and romantic atmosphere for everyone present.

                As the afternoon sun gently lit the garden, every moment felt special —
                from quiet smiles between the couple to joyful celebrations with family
                and friends. Capturing these authentic emotions is what makes wedding
                photography truly meaningful.
            </p>
            <span className="blogDate-detail">April 28, 2026</span>

        </div>

        <div className="ctaOfDetails" onClick={() => dispatch(setBlog(0))}>
            Back

        </div>

    </div >
)

export const getBlog3 = (dispatch: any) => (
    <div id="blogDetails-wrapper">
        <div className="detailBlogImage-wrapper">
            <Image className="detailBlogImage" src={PortraitBlog} alt="blogPic" />
        </div>

        <div className="detailBlogInfos-wrapper">
            <h3 className="blogCategory-detail">Portfolio</h3>
            <h1 className="blogTitle-detail">Natural Light Portraits</h1>
            <p className="blogDesc-detail">
                Natural light has a unique way of revealing emotion and character in
                portrait photography. For this session, soft window light was used to
                create gentle shadows and natural highlights that bring depth to each
                expression.

                By keeping the environment simple and focusing on light and emotion,
                the portraits feel honest and personal. The result is a series of images
                that capture not only appearance, but also personality and mood.
            </p>
            <span className="blogDate-detail">April 10, 2026</span>

        </div>

        <div className="ctaOfDetails" onClick={() => dispatch(setBlog(0))}>
            Back

        </div>

    </div >
)

export const getBlog4 = (dispatch: any) => (
    <div id="blogDetails-wrapper">
        <div className="detailBlogImage-wrapper">
            <Image className="detailBlogImage" src={StreetBlog} alt="blogPic" />
        </div>

        <div className="detailBlogInfos-wrapper">
            <h3 className="blogCategory-detail">Street</h3>
            <h1 className="blogTitle-detail">Morning Streets of Paris</h1>
            <p className="blogDesc-detail">
                Early mornings in Paris have a calm and poetic atmosphere that is perfect
                for street photography. As the city slowly wakes up, soft morning light
                fills the streets while cafés begin to open and a few pedestrians walk
                through the quiet avenues.

                These moments of everyday life create authentic and timeless images.
                Capturing small details — reflections on wet streets, warm light on
                historic buildings, and natural human moments — makes street photography
                feel alive and real.
            </p>
            <span className="blogDate-detail">March 18, 2026</span>

        </div>

        <div className="ctaOfDetails" onClick={() => dispatch(setBlog(0))}>
            Back

        </div>

    </div >
)


export const getBlog5 = (dispatch: any) => (
    <div id="blogDetails-wrapper">
        <div className="detailBlogImage-wrapper">
            <Image className="detailBlogImage" src={LandscapeBlog} alt="blogPic" />
        </div>

        <div className="detailBlogInfos-wrapper">
            <h3 className="blogCategory-detail">Landscape</h3>
            <h1 className="blogTitle-detail">Misty Mountains at Sunrise</h1>
            <p className="blogDesc-detail">
                Sunrise in the mountains offers a quiet and powerful scene for landscape
                photography. As the first light appears, a soft layer of mist slowly
                moves between the peaks, revealing the shapes and textures of the
                landscape little by little.

                The calm atmosphere and gentle morning colors create a peaceful mood
                that feels almost untouched. Moments like these remind us how patience
                and natural light can transform a simple landscape into something truly
                breathtaking.
            </p>
            <span className="blogDate-detail">March 5, 2026</span>

        </div>

        <div className="ctaOfDetails" onClick={() => dispatch(setBlog(0))}>
            Back

        </div>

    </div >
)


export const getBlog6 = (dispatch: any) => (
    <div id="blogDetails-wrapper">
        <div className="detailBlogImage-wrapper">
            <Image className="detailBlogImage" src={FashionBlog} alt="blogPic" />
        </div>

        <div className="detailBlogInfos-wrapper">
            <h3 className="blogCategory-detail">Fashion</h3>
            <h1 className="blogTitle-detail">Minimalist Fashion Session</h1>
            <p className="blogDesc-detail">
                This minimalist fashion session focused on clean composition, subtle
                lighting, and modern styling. By keeping the background simple, the
                attention naturally shifts to the model’s expression, posture, and
                the details of the outfit.

                Soft studio lighting was used to create balanced shadows and highlight
                textures, giving the images a refined and contemporary look. The result
                is a series of portraits that feel elegant, confident, and timeless.
            </p>
            <span className="blogDate-detail">February 21, 2026</span>

        </div>

        <div className="ctaOfDetails" onClick={() => dispatch(setBlog(0))}>
            Back

        </div>

    </div >
)