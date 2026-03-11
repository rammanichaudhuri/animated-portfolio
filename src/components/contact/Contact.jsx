import './contact.css';
import PixelTransition from './PixelTransition';

const contactLinks = [
    {
        label: 'Email',
        display: 'rammanititli@gmail.com',
        href: 'mailto:rammanititli@gmail.com',
    },
    {
        label: 'LinkedIn',
        display: 'linkedin.com/in/rammani-chaudhuri',
        href: 'https://linkedin.com/in/rammani-chaudhuri',
    },
    {
        label: 'GitHub',
        display: 'github.com/rammanichaudhuri',
        href: 'https://github.com/rammanichaudhuri',
    },
];

const Contact = () => {
    return (
        <div className='containerContact'>
            <div className='subContainerContact' style={{ width: '100vw' }}>
                <div className='content'>
                    <div className='headingContact'>
                        <h1>we should talk!<br />send me a message.</h1>
                    </div>
                    <div className='contactLinks'>
                        {contactLinks.map(({ label, display, href }) => (
                            <div key={label} className='horizontalLine'>
                                <span className='contactLabel'>{label}</span>
                                <a
                                    className='contactValue'
                                    href={href}
                                    target={href.startsWith('mailto') ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                >
                                    {display}
                                </a>
                            </div>
                        ))}
                    </div>
                    <p className='contactNote'>
                        Open to frontend / full-stack roles, freelance projects, and interesting collabs.
                    </p>
                </div>
                <div className='contactImage'>
                    <PixelTransition
                        firstContent={
                            <img
                                src='https://cdn.cosmos.so/be20a0fd-639e-4bb7-9c68-93a689b05197?format=jpeg'
                                alt="image"
                                style={{ width: "inherit", height: "inherit", objectFit: "cover" }}
                            />
                        }
                        secondContent={
                            <img
                                src='https://cdn.cosmos.so/dc426982-e3d5-496e-8b9c-814d040483d4?format=jpeg'
                                alt="image"
                                style={{ width: "inherit", height: "inherit", objectFit: "cover" }}
                            />
                        }
                        gridSize={8}
                        pixelColor='#ffffff'
                        once={false}
                        animationStepDuration={0.4}
                        className="custom-pixel-card"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;
