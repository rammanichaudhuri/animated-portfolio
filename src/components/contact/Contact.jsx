import './contact.css';
import PixelTransition from './PixelTransition';

const contactLinks = [
    {
        label: 'Email',
        display: 'rammanititli@gmail.com',
        href: 'mailto:rammanititli@gmail.com',
        icon: '✉',
    },
    {
        label: 'LinkedIn',
        display: 'linkedin.com/in/rammani-chaudhuri',
        href: 'https://linkedin.com/in/rammani-chaudhuri',
        icon: '↗',
    },
    {
        label: 'GitHub',
        display: 'github.com/rammanichaudhuri',
        href: 'https://github.com/rammanichaudhuri',
        icon: '↗',
    },
];

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-overlay" />

            <div className="contact-body">
                <div className="contact-content">
                    <p className="contact-eyebrow">open to work · available now</p>
                    <h1 className="contact-heading">
                        we should talk!<br />
                        <span className="contact-heading-accent">say hello.</span>
                    </h1>

                    <div className="contact-links">
                        {contactLinks.map(({ label, display, href, icon }) => (
                            <a
                                key={label}
                                className="contact-link"
                                href={href}
                                target={href.startsWith('mailto') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                            >
                                <span className="contact-link-label">{label}</span>
                                <span className="contact-link-display">{display}</span>
                                <span className="contact-link-icon">{icon}</span>
                            </a>
                        ))}
                    </div>

                    <p className="contact-note">
                        Open to frontend / full-stack roles, freelance projects, and interesting collabs.
                    </p>
                </div>

                <div className="contact-image">
                    <PixelTransition
                        firstContent={
                            <img
                                src="https://cdn.cosmos.so/be20a0fd-639e-4bb7-9c68-93a689b05197?format=jpeg"
                                alt="contact visual"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        }
                        secondContent={
                            <img
                                src="https://cdn.cosmos.so/dc426982-e3d5-496e-8b9c-814d040483d4?format=jpeg"
                                alt="contact visual 2"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        }
                        gridSize={8}
                        pixelColor="#ffffff"
                        once={false}
                        animationStepDuration={0.4}
                        className="contact-pixel"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
