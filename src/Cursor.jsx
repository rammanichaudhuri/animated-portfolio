// CustomCursor.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Cursor.css'; // Add your CSS styles here

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const size = 40;

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 12, // Subtract half of the cursor size (e.g., 24px width) to center it
            y: mousePosition.y - 12,
            WebkitMaskPosition: `${mousePosition.x - (size / 2)}px ${mousePosition.y - (size / 2)}px`,
            WebkitMaskSize: `${size}px`,
        }
    };

    return (
        <motion.div
            className="custom-cursor"
            variants={variants}
            animate="default"
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" src="src/assets/images/cursor1.svg">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 4l-8 8 1.41 1.41L11 7.83V20h2V7.83l5.58 5.58L20 12l-8-8z" />
            </svg> */}
            <img src="./cursor2.png" />
        </motion.div>
    );
};

export default Cursor;
