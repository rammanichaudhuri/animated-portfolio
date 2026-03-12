import { NavLink, Link, useLocation } from "react-router-dom";
import './navbar.css';
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RevealText from './RevealText';

const NAV_LINKS = [
    { to: '/', label: 'home', end: true },
    { to: '/projects', label: 'work', end: false },
    { to: '/about', label: 'about', end: false },
    { to: '/contact', label: 'contact', end: false },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => { setOpen(false); }, [location]);

    return (
        <>
            <header className="navbar">
                <Link to="/" className="navbar-logo">
                    rammani<span className="navbar-logo-dot">.</span>
                </Link>

                <nav className="navbar-links" aria-label="main navigation">
                    {NAV_LINKS.map(({ to, label, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) =>
                                `navbar-link${isActive ? ' navbar-link--active' : ''}`
                            }
                        >
                            <RevealText text={label} />
                        </NavLink>
                    ))}
                </nav>

                <a
                    href="mailto:rammanititli@gmail.com"
                    className="navbar-cta"
                >
                    get in touch →
                </a>

                <button
                    className={`navbar-burger${open ? ' navbar-burger--open' : ''}`}
                    onClick={() => setOpen(v => !v)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="navbar-mobile"
                        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <nav className="navbar-mobile-nav">
                            {NAV_LINKS.map(({ to, label, end }, i) => (
                                <motion.div
                                    key={to}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <NavLink
                                        to={to}
                                        end={end}
                                        className={({ isActive }) =>
                                            `navbar-mobile-link${isActive ? ' navbar-mobile-link--active' : ''}`
                                        }
                                    >
                                        <span className="navbar-mobile-num">0{i + 1}</span>
                                        {label}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            className="navbar-mobile-footer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a href="mailto:rammanititli@gmail.com" className="navbar-mobile-email">
                                rammanititli@gmail.com
                            </a>
                            <div className="navbar-mobile-socials">
                                <a href="https://github.com/rammanichaudhuri" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://linkedin.com/in/rammani-chaudhuri" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
