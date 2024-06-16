import React, { useEffect } from 'react';
import "../cursor/cursor.scss";
import { motion, useMotionValue, useTransform } from 'framer-motion';

function Cursor() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const cursorX = useTransform(x, value => value + 10);
    const cursorY = useTransform(y, value => value + 10);

    useEffect(() => {
        const mouseMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, [x, y]);

    return (
        <motion.div
            className="cursor"
            style={{ x: cursorX, y: cursorY }}
        ></motion.div>
    );
}

export default Cursor;
