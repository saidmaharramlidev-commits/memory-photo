'use client'


import DetailsHero from "@/components/DetailsHero"
import Navbar from "@/components/Navbar"
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"

import Footer from "@/components/Footer"
import { getBlog1, getBlog2, getBlog3, getBlog4, getBlog5, getBlog6, getBlogs } from "./blogs"




function Blog() {




    const dispatch = useDispatch()
    const { blog } = useSelector((state: RootState) => state.counter)
    const router = useRouter()







    return (
        <div id="mainBlogPage">
            <Navbar />
            <DetailsHero header="Blog" url="Home > Blog" />


            <div id="blogs-wrapper" style={{ position: "relative", paddingTop: "150px", paddingBottom: "100px" }}>
                <h1 id="headerOfBlogPage">Blogs</h1>

                {blog === 0 ? getBlogs(dispatch) : ""}
                {blog === 1 ? getBlog1(dispatch) : ""}
                {blog === 2 ? getBlog2(dispatch) : ""}
                {blog === 3 ? getBlog3(dispatch) : ""}
                {blog === 4 ? getBlog4(dispatch) : ""}
                {blog === 5 ? getBlog5(dispatch) : ""}
                {blog === 6 ? getBlog6(dispatch) : ""}
            </div>





            <Footer />

        </div>
    )
}

export default Blog