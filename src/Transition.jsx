import { motion } from "framer-motion";

export const Transition = ({ children }) => {
    return (
        <>
            {children}
            <motion.div
                className="slideIn"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
            />
            <motion.div
                className="slideOut"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
            />
        </>

    );
}