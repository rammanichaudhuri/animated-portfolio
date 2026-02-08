import './about.css';
import Silk from '../Silk';
import Stack from './Stack';

const images = [
    "https://cdn.cosmos.so/f1317272-c54a-4051-9aba-d49084fbf334?format=jpeg",
    "https://cdn.cosmos.so/9fba563d-b1a3-4890-9a55-397bdfc5150e?format=jpeg",
    "https://cdn.cosmos.so/0b749cff-492a-4bd6-ae09-286cbeed1d32?format=jpeg",
    "https://cdn.cosmos.so/765803ee-1a5d-41b4-8720-cc42173e0e7d?format=jpeg"
];

const About = () => {
    return (
        <div className='containerAbout'>
            <div className='silkAbout'>
                <Silk
                    speed={5}
                    scale={1}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <div className='subContainerAbout' style={{ width: '100vw', height: '100vh' }}>
                <div className='contentAbout'>
                    <div className='headingAbout'>
                        <h1>here's a little about me...</h1>
                    </div>
                    <div className='horizontalLineAbout' style={{}}>
                        <div className='description'>I'm a frontend developer with 2+ years of experience building web applications at Microsoft and Loop. I love the intersection of engineering and design—making things that work beautifully and perform well.</div>
                        <div className='description'>My stack: React, TypeScript, Redux, with a growing focus on animations (GSAP) and design systems. I graduated from IIT BHU in Electrical Engineering, where competitive programming taught me to solve problems efficiently. I still keep my DSA skills sharp on LeetCode and Codeforces.</div>    
                        <div className='description'>Outside tech, I'm into sketching portraits, devouring books, listening to podcasts, and hitting the gym. Always learning, always building.</div>
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
        </div >
    );
}

export default About;