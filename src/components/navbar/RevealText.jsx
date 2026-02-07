import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './RevealText.css';

// Define animation variants for the container (staggering the children)
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2, // Delay before the first child starts
            staggerChildren: 0.05 // Delay between each child
        }
    }
};

// Define animation variants for each word (fade up effect)

const RevealText = ({ text }) => {
    return (
        <div className="">
            {/* <div className="textBox">{text}</div> */}
            <div className="containerbox">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileHover="visible"
                // style={{ display: "flex", flexWrap: "wrap", overflow: "hidden", cursor: "pointer" }}
                >
                    <div className='textBox'>
                        {text.split("").map((l, i) => {
                            return <motion.span variants={{
                                hidden: { y: 0, opacity: 1 }, // Start position: slightly down, invisible
                                visible: {
                                    y: "-100%", // End position: original y, fully visible
                                    opacity: 1,
                                    transition: {
                                        type: "spring", // Use a spring for a natural feel
                                        damping: 12,
                                        stiffness: 100,
                                        delay: 0.05 * i
                                    }
                                }
                            }}
                                style={{ display: "inline-block" }} key={i}>{l}</motion.span>
                        })}
                    </div>
                    <div className='animatedTextBox'>
                        {text.split("").map((l, i) => {
                            return <motion.span variants={{
                                hidden: { y: "100%", opacity: 0 }, // Start position: slightly down, invisible
                                visible: {
                                    y: 0, // End position: original y, fully visible
                                    opacity: 1,
                                    transition: {
                                        type: "spring", // Use a spring for a natural feel
                                        damping: 12,
                                        stiffness: 100,
                                        delay: 0.05 * i
                                    }
                                }
                            }}
                                style={{ display: "inline-block" }} key={i}>{l}</motion.span>
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RevealText;
