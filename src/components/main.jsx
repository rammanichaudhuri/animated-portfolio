import { Link } from 'react-router-dom';
import './main.css';

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-overlay" />

            <div className="home-body">
                <div className="home-hero">
                    <p className="home-eyebrow">frontend&nbsp;developer&nbsp;·&nbsp;ui engineer</p>
                    <h1 className="home-title">
                        hi, i'm<br />
                        <span className="home-title-name">rammani.</span>
                    </h1>
                    <p className="home-bio">
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
                    </p>
                    <div className="home-ctas">
                        <Link to="/projects" className="btn btn--primary">
                            view work →
                        </Link>
                        <Link to="/contact" className="btn btn--ghost">
                            get in touch
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HomePage;
