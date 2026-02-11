import './main.css';
import Silk from './Silk';

const HomePage = () => {
    return (
        <div className="container">
            {/* <div className='silk'>
                <Silk
                    speed={5}
                    scale={1}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div> */}
            <div className='subContainer' style={{ width: '100vw' }}>
                <div className='textbox'>
                    <h1>hi!</h1>
                    <h1 style={{ display: 'flex', flexDirection: 'row' }}>i'm rammani.</h1>
                </div>
                <div className='descp'>
                    <h2 style={{ color: "#000000", fontSize: "1.5rem", fontFamily: "Pixelify Sans" }}>software developer</h2>
                    <br />
                    <h3 className='desc'>I bridge design and code—building interfaces that are both technically
                        solid and visually crafted. 2+ years at Microsoft + Loop, IIT BHU'22. Currently
                        exploring GSAP and motion design.</h3>
                </div>
            </div>
        </div>

    );
}

export default HomePage;