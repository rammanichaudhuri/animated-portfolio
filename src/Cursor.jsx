import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Cursor.css';

const Cursor = () => {
    const rawX = useMotionValue(-100);
    const rawY = useMotionValue(-100);

    const x = useSpring(rawX, { stiffness: 180, damping: 22, mass: 0.4 });
    const y = useSpring(rawY, { stiffness: 180, damping: 22, mass: 0.4 });

    useEffect(() => {
        const move = (e) => {
            rawX.set(e.clientX - 12);
            rawY.set(e.clientY - 12);
        };
        document.addEventListener('mousemove', move);
        return () => document.removeEventListener('mousemove', move);
    }, [rawX, rawY]);

    return (
        <motion.div className="custom-cursor" style={{ x, y }}>
            <img src="/cursor2.png" alt="" />
        </motion.div>
    );
};

export default Cursor;
