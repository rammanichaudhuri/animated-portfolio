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
        <div className='containerAbout'>
            <div className='subContainerAbout' style={{ width: '100vw' }}>
                <div className='contentAbout'>
                    <div className='headingAbout'>
                        <h1>here's a little about me...</h1>
                    </div>
                    <div className='horizontalLineAbout'>
                        <div className='description'>I'm a frontend developer with 2+ years of experience building web applications at Microsoft and Loop subscriptions. I love the intersection of engineering and design—making things that work beautifully and perform well too!</div>
                        <div className='description'>My tech stack: React, TypeScript, Redux, Node.js, TailwindCSS, MongoDB, MySQL, with a recent focus on animations (GSAP) and design systems. I graduated from IIT BHU in Electrical Engineering in 2022, where competitive programming + building projects with friends taught me to solve problems efficiently along with teamwork. I still keep my DSA skills sharp by practicing regularly on LeetCode and Codeforces.</div>
                        <div className='description'>Outside tech, I'm into writing, sketching portraits, devouring books, listening to podcasts, and working out. Always learning, always building!</div>
                    </div>

                    <div className='skills-section'>
                        {skillGroups.map((group) => (
                            <div key={group.label} className='skills-group'>
                                <span className='skills-group-label'>{group.label}</span>
                                <div className='skills-chips'>
                                    {group.skills.map((skill) => (
                                        <span key={skill} className='skill-chip'>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='contactImageAbout'>
                    <div style={{ width: 400, height: 400 }}>
                        <Stack
                            randomRotation={false}
                            sensitivity={200}
                            sendToBackOnClick={true}
                            cards={images.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`card-${i + 1}`}
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
}

export default About;
