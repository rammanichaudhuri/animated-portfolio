import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './main.css';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-overlay" />

            <div className="home-body">
                <div className="home-hero">
                    <motion.p className="home-eyebrow" {...fadeUp(0.05)}>
                        software&nbsp;developer&nbsp;/&nbsp;frontend
                    </motion.p>
                    <motion.h1 className="home-title" {...fadeUp(0.18)}>
                        hi, i'm<br />
                        <span className="home-title-name">rammani.</span>
                    </motion.h1>
                    <motion.p className="home-bio" {...fadeUp(0.34)}>
                        I build apps &amp; websites at the intersection of{' '}
                        <strong>code and design</strong>. Previously at{' '}
                        <a
                            href="https://www.microsoft.com/en-in/microsoft-viva/insights"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-bio-link"
                        >
                            Microsoft
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://www.loopwork.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-bio-link"
                        >
                            Loop
                        </a>{' '}
                        — 2+ years building products used by thousands. Grad from{' '}
                        <a
                            href="https://www.iitbhu.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-bio-link"
                        >
                            IIT BHU
                        </a>{' '}
                        '22.
                    </motion.p>
                    <motion.div className="home-ctas" {...fadeUp(0.48)}>
                        <Link to="/projects" className="btn btn--primary">
                            view work →
                        </Link>
                        <Link to="/contact" className="btn btn--ghost">
                            get in touch
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
