import './main.css';
import Silk from './Silk';

const HomePage = () => {
    return (
        <div className="container">
            <div className='silk'>
                <Silk
                    speed={5}
                    scale={1}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <div className='subContainer' style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'end' }}>
                <div className='textbox'>
                    <h1>rammani</h1>
                    <h1>chaudhuri.</h1>
                </div>
                <div className='descp'>
                    <h2 style={{ color: "#FFE4EF", fontSize: "1.5rem" }}>software developer</h2>
                    <br />
                    <h3 className='desc'>I bridge design and code—building interfaces that are both technically
                        solid and visually crafted. 2+ years at Microsoft + Loop. Currently
                        exploring GSAP and motion design.</h3>
                </div>
            </div>
        </div>

    );
}

export default HomePage;