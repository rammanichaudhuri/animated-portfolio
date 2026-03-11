import { Link, NavLink, useLocation } from "react-router-dom";
import './navbar.css';
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from 'react-icons/fa';
import RevealText from "./RevealText";

const initial = { y: 100, opacity: 1 };
const animate = {
    y: 0,
    opacity: 1,
    transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.5
    }
};

export const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setNavActive(false);
    }, [location]);

    return (
        <>
            <div className="navbar">
                <motion.div
                    className="navInner"
                    initial={initial}
                    animate={animate}
                >
                    <Link className="logo" to='/' />
                    <nav className="navlinks">
                        <NavLink to='/'><RevealText text={"home"} /></NavLink>
                        <NavLink to='/projects'><RevealText text={"work"} /></NavLink>
                        <NavLink to='/about'><RevealText text={"about"} /></NavLink>
                        <NavLink to='/contact'><RevealText text={"contact"} /></NavLink>
                    </nav>
                </motion.div>
                <button
                    id="hamburger"
                    aria-label={navActive ? "Close menu" : "Open menu"}
                    onClick={() => setNavActive(v => !v)}
                >
                    {navActive ? <FaTimes size={22} color="white" /> : <FaBars size={22} color="white" />}
                </button>
            </div>

            {/* Mobile overlay menu */}
            <AnimatePresence>
                {navActive && (
                    <motion.div
                        className="mobileMenu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                        <nav className="mobileNavLinks">
                            <NavLink to='/'><RevealText text={"home"} /></NavLink>
                            <NavLink to='/projects'><RevealText text={"work"} /></NavLink>
                            <NavLink to='/about'><RevealText text={"about"} /></NavLink>
                            <NavLink to='/contact'><RevealText text={"contact"} /></NavLink>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
