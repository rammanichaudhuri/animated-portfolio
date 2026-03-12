import './about.css';
import Stack from './Stack';

const images = [
    "https://cdn.cosmos.so/f1317272-c54a-4051-9aba-d49084fbf334?format=jpeg",
    "https://cdn.cosmos.so/9fba563d-b1a3-4890-9a55-397bdfc5150e?format=jpeg",
    "https://cdn.cosmos.so/0b749cff-492a-4bd6-ae09-286cbeed1d32?format=jpeg",
    "https://cdn.cosmos.so/765803ee-1a5d-41b4-8720-cc42173e0e7d?format=jpeg"
];

const skillGroups = [
    {
        label: 'frontend',
        skills: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Redux', 'GSAP', 'Framer Motion', 'HTML / CSS'],
    },
    {
        label: 'backend & db',
        skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'WebSocket', 'Yjs / CRDTs'],
    },
    {
        label: 'tools & other',
        skills: ['Git', 'Three.js', 'REST APIs', 'Stripe SDK', 'Design Systems', 'RBAC', 'Core Web Vitals'],
    },
];

const About = () => {
    return (
        <div className="about">
            <div className="about-overlay" />

            <div className="about-body">
                <div className="about-content">
                    <h1 className="about-heading">
                        here's a little<br />
                        <span className="about-heading-accent">about me.</span>
                    </h1>

                    <div className="about-bio">
                        <p>
                            I'm a frontend developer with 2+ years of experience building web applications at{' '}
                            <a href="https://www.microsoft.com/en-in/microsoft-viva/insights" target="_blank" rel="noopener noreferrer">
                                Microsoft Viva Insights
                            </a>{' '}
                            and{' '}
                            <a href="https://www.loopwork.co/" target="_blank" rel="noopener noreferrer">
                                Loop
                            </a>. I love the intersection of engineering and design — making things that work beautifully and perform well.
                        </p>
                        <p>
                            My stack: React, TypeScript, Redux, Node.js, TailwindCSS, MongoDB, MySQL — with a focus on animations (GSAP) and design systems. I graduated from{' '}
                            <a href="https://www.iitbhu.ac.in/" target="_blank" rel="noopener noreferrer">
                                IIT BHU
                            </a>{' '}
                            in Electrical Engineering (2022), where competitive programming taught me to think fast and build smart.
                        </p>
                        <p>
                            Outside tech: writing, sketching portraits, reading, podcasts, and working out. Always learning, always building!
                        </p>
                    </div>

                    <div className="about-skills">
                        {skillGroups.map((group) => (
                            <div key={group.label} className="skills-row">
                                <span className="skills-row-label">{group.label}</span>
                                <div className="skills-row-chips">
                                    {group.skills.map((skill) => (
                                        <span key={skill} className="skill-chip">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-image">
                    <div style={{ width: 320, height: 380 }}>
                        <Stack
                            randomRotation={false}
                            sensitivity={200}
                            sendToBackOnClick={true}
                            cards={images.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`photo-${i + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ))}
                            autoplay={false}
                            autoplayDelay={3000}
                            pauseOnHover={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
