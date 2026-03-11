import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Cursor.css';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="custom-cursor"
            animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        >
            <img src="/cursor2.png" alt="" />
        </motion.div>
    );
};

export default Cursor;
