import './about.css';
import Stack from './Stack';

const images = [
    "https://cdn.cosmos.so/f1317272-c54a-4051-9aba-d49084fbf334?format=jpeg",
    "https://cdn.cosmos.so/9fba563d-b1a3-4890-9a55-397bdfc5150e?format=jpeg",
    "https://cdn.cosmos.so/0b749cff-492a-4bd6-ae09-286cbeed1d32?format=jpeg",
    "https://cdn.cosmos.so/765803ee-1a5d-41b4-8720-cc42173e0e7d?format=jpeg"
];

// Pulled directly from the description text — makes the stack scannable at a glance
const skills = [
    'React', 'TypeScript', 'Redux', 'Node.js',
    'TailwindCSS', 'MongoDB', 'MySQL', 'GSAP',
    'WebSocket', 'PostgreSQL', 'Yjs',
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
                        <div className='description'>
                            I'm a frontend developer with 2+ years of experience building web applications at{' '}
                            <a href="https://www.microsoft.com/en-in/microsoft-viva/insights" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Microsoft</a>
                            {' '}and{' '}
                            <a href="https://www.loopwork.co/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Loop subscriptions</a>.
                            {' '}I love the intersection of engineering and design—making things that work beautifully and perform well too!
                        </div>
                        <div className='description'>
                            My tech stack spans React, TypeScript, Redux, Node.js, TailwindCSS, MongoDB, MySQL, with a recent focus on animations (GSAP) and design systems. I graduated from{' '}
                            <a href="https://www.iitbhu.ac.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>IIT BHU</a>
                            {' '}in Electrical Engineering in 2022, where competitive programming + building projects with friends taught me to solve problems efficiently along with teamwork. I still keep my DSA skills sharp by practicing regularly on{' '}
                            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>LeetCode</a>
                            {' '}and{' '}
                            <a href="https://codeforces.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Codeforces</a>.
                        </div>
                        <div className='description'>
                            Outside tech, I'm into writing, sketching portraits, devouring books, listening to podcasts, and working out. Always learning, always building!
                        </div>

                        {/* Visual skill tags — replaces the buried "My tech stack: ..." text */}
                        <div className='skillsRow'>
                            {skills.map(skill => (
                                <span key={skill} className='skillTag'>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Interactive card stack — explicitly placed in column 2 */}
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
