import { useEffect, useRef, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const pos = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });
    const raf = useRef(null);
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const onMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
            }
            const isHover = !!e.target.closest('a, button, [data-hover], input, textarea, label, select');
            setHovered(isHover);
        };

        const onDown = () => setClicked(true);
        const onUp = () => setClicked(false);

        const tick = () => {
            const lerp = 0.13;
            ringPos.current.x += (pos.current.x - ringPos.current.x) * lerp;
            ringPos.current.y += (pos.current.y - ringPos.current.y) * lerp;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
            }
            raf.current = requestAnimationFrame(tick);
        };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mousedown', onDown);
        window.addEventListener('mouseup', onUp);
        raf.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div
                ref={ringRef}
                className={`cursor-ring${hovered ? ' cursor-ring--hover' : ''}${clicked ? ' cursor-ring--click' : ''}`}
            />
        </>
    );
};

export default Cursor;
