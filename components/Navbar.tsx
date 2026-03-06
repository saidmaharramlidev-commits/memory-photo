"use client"

import { setNavbarOpen } from "@/redux/counterSlice";
import { RootState } from "@/redux/store";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";




function Navbar() {
    const dispatch = useDispatch()
    const { isNavbarOpen } = useSelector((state: RootState) => state.counter)

    const pathname = usePathname()

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];



    return (
        <div id="mainNavbar">
            <div id="navbarText">
                Photographer
            </div>
            <div id="navbarEndpoints" className={isNavbarOpen ? "openedNavbar" : ''}>
                {links.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`endpoint ${pathname === link.href ? 'activeLink' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div id="menuBtn-wrapper" onClick={() => dispatch(setNavbarOpen())}>
                <IoMenu id="menuBtn" />
            </div>

        </div>
    )
}

export default Navbar