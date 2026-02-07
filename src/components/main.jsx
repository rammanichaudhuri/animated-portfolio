import './main.css';
import Noise from './Noise.jsx';
import { motion, stagger } from "framer-motion";

const content = {
    animate: {
        transition: { staggerChildren: 0.2, delayChildren: 3.5 },
    }
};

const initial = { y: 100, opacity: 0 };
const animate = {
    y: 0,
    opacity: 1,
    transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
    }
}

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0.5,
    opacity: 0
  },
  animate: {
    height: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const HomePage = () => {
    return (
        <div className="container">
            {/* <motion.section> */}
                {/* <motion.div
                    className="absolute z-50 flex items-center justify-center w-full bg-black"
                    initial="initial"
                    animate="animate"
                    variants={blackBox}
                    onAnimationStart={() => document.body.classList.add("overflow-hidden")}
                    onAnimationComplete={() =>
                        document.body.classList.remove("overflow-hidden")
                    }
                >
                </motion.div>
                <motion.div
                    initial={initial}
                    animate={animate}
                    variants={content}
                > */}
                    <div className='subContainer' style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'end' }}>
                        <h1 className='textbox'>rammani chaudhuri</h1>
                        <Noise
                            patternSize={250}
                            patternScaleX={2}
                            patternScaleY={2}
                            patternRefreshInterval={2}
                            patternAlpha={15}
                        />
                    </div>
                {/* </motion.div>
            </motion.section> */}
        </div>
    );
}

export default HomePage;