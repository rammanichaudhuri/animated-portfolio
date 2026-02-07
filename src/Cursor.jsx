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
        />
    );
};

export default Cursor;
