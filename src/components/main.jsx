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
                    <h2 style={{ color: "#000000", fontSize: "1.5rem", fontFamily: "Pixelify Sans" }}>software developer <span style={{ color: "white" }}>[frontend]</span></h2>
                    <br />
                    <h3 className='desc'>I build apps/websites that are an intersection between code and design. 
                        I think good code deserves good visuals as well. Previously worked at <span><a style={{ textDecoration: "underline" }} href="https://www.microsoft.com/en-in/microsoft-viva/insights">Microsoft</a></span> + <span><a style={{ textDecoration: "underline" }} href="https://www.loopwork.co/">Loop</a></span>, for a total of 2+ years. 
                        Even before that, graduated from <span><a style={{ textDecoration: "underline" }} href="https://www.iitbhu.ac.in/">IIT BHU</a></span> in '22, majoring in Electrical engineering. Obsessed with learning, and obviously, building new stuff.</h3>
                </div>
            </div>
        </div>

    );
}

export default HomePage;