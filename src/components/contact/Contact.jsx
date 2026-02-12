import './contact.css';
import Silk from '../Silk';
import PixelTransition from './PixelTransition';

const Contact = () => {
    return (
        <div className='containerContact'>
            {/* <div className='silkContact'>
                <Silk
                    speed={5}
                    scale={1}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div> */}
            <div className='subContainerContact' style={{ width: '100vw' }}>
                <div className='content'>
                    <div className='headingContact'>
                        <h1>we should talk! send me a message.</h1>
                    </div>
                    <div className='horizontalLine' style={{  }}>
                        <div>Email: </div>
                        <div>rammanititli@gmail.com</div>
                    </div>
                    <div className='horizontalLine'>
                        <div>LinkedIn:</div>
                        <a style={{ color: "white" }} href='https://linkedin.com/in/rammani-chaudhuri' target="_blank" rel="noopener noreferrer">linkedin.com/in/rammani-chaudhuri</a>
                    </div>
                    <div className='horizontalLine'>
                        <div>Github:</div>
                        <a style={{ color: "white" }} href='https://github.com/rammanichaudhuri' target="_blank" rel="noopener noreferrer">github.com/rammanichaudhuri</a>
                    </div>
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