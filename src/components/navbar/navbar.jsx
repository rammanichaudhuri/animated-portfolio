import { Link, NavLink } from "react-router-dom";
import './navbar.css';
import { useState } from "react";
import { AnimatePresence, delay, motion, stagger } from "framer-motion";
import { FaBars } from 'react-icons/fa';
import RevealText from "./RevealText";

const content = {
    animate: {
        transition: { staggerChildren: (0.2, { from: "last" }), delayChildren: 3.5 },
    }
};

const initial = { y: 100, opacity: 1 };
const animate = {
    y: 0,
    opacity: 1,
    transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.5
    }
}

export const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    function openNav() {
        setNavActive(true);
    }

    function closeNav() {
        setNavActive(false);
    }
    return (
        <div className="navbar">
            <motion.div
                initial={initial}
                animate={animate}
                variants={content}
            >
                    <Link className="logo" to='/'>
                    </Link>
                    <nav className={navActive ? 'navactive' : 'navlinks'}>
                        <NavLink to='/'>
                            <RevealText text={"home"} />
                        </NavLink>
                        <NavLink to='/projects'>
                            <RevealText text={"work"} />
                        </NavLink>
                        <NavLink to='/about'>
                            <RevealText text={"about"} />
                        </NavLink>
                        <NavLink to='/contact'>
                            <RevealText text={"contact"} />
                        </NavLink>
                    </nav>
            </motion.div>
            <button id="hamburger" style={{ textAlign: "end" }} onClick={() => navActive ? closeNav() : openNav()}>
                <FaBars size={24} color="white" />
            </button>
        </div>
    );
}