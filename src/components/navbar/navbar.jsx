import { NavLink } from "react-router-dom";
import './navbar.css';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from 'react-icons/fa';
import RevealText from "./RevealText";

const navLinks = [
    { to: '/', label: 'home', end: true },
    { to: '/projects', label: 'work' },
    { to: '/about', label: 'about' },
    { to: '/contact', label: 'contact' },
];

export const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    const closeNav = () => setNavActive(false);

    return (
        <div className="navbar">
            <motion.div
                className="navbar-inner"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.5 }}
            >
                {/* Logo — left side */}
                <NavLink to='/' className="logo" onClick={closeNav}>
                    rc.
                </NavLink>

                {/* Desktop nav links — center/right */}
                <nav className="navlinks-desktop">
                    {navLinks.map(({ to, label, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                        >
                            <RevealText text={label} />
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile hamburger button */}
                <button
                    id="hamburger"
                    aria-label={navActive ? 'Close menu' : 'Open menu'}
                    onClick={() => setNavActive(prev => !prev)}
                >
                    {navActive
                        ? <FaTimes size={22} color="white" />
                        : <FaBars size={22} color="white" />
                    }
                </button>
            </motion.div>

            {/* Mobile dropdown — animated in/out */}
            <AnimatePresence>
                {navActive && (
                    <motion.nav
                        className="navlinks-mobile"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                        {navLinks.map(({ to, label, end }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={end}
                                className={({ isActive }) => isActive ? 'nav-item-mobile active' : 'nav-item-mobile'}
                                onClick={closeNav}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};
