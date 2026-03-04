"use client"

import { setNavbarOpen } from "@/redux/counterSlice";
import { RootState } from "@/redux/store";
import Link from "next/link"
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";



function Navbar() {
    const dispatch = useDispatch()
    const { isNavbarOpen } = useSelector((state: RootState) => state.counter)



    return (
        <div id="mainNavbar">
            <div id="navbarText">
                Photographer
            </div>
            <div id="navbarEndpoints" className={isNavbarOpen ? "openedNavbar" : ''}>
                <Link className="endpoint" href={'/'}>Home</Link>
                <Link className="endpoint" href={'/about'}>About</Link>
                <Link className="endpoint" href={'/services'}>Services</Link>
                <Link className="endpoint" href={'/portfolio'}>Portfolio</Link>
                <Link className="endpoint" href={'/blog'}>Blog</Link>
                <Link className="endpoint" href={'/contact'}>Contact</Link>
            </div>
            <div id="menuBtn-wrapper" onClick={() => dispatch(setNavbarOpen())}>
                <IoMenu id="menuBtn" />
            </div>

        </div>
    )
}

export default Navbar