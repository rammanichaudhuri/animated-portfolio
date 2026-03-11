import './main.css';

const achievements = [
    { number: '2+', label: 'years at FAANG+\n& startups' },
    { number: '5', label: 'major features\nshipped at Microsoft' },
    { number: '25%↑', label: 'user engagement\nincrease' },
    { number: '100+', label: 'production issues\nresolved' },
    { number: 'IIT BHU', label: "class of '22\nElec. Engineering" },
];

const HomePage = () => {
    return (
        <div className="container">
            <div className='subContainer' style={{ width: '100vw' }}>
                <div className='textbox'>
                    <h1>hi!</h1>
                    <h1 style={{ display: 'flex', flexDirection: 'row' }}>i'm rammani.</h1>
                </div>
                <div className='descp'>
                    <h2 style={{ color: "#000000", fontSize: "1.5rem", fontFamily: "Pixelify Sans" }}>software developer <span>[frontend]</span></h2>
                    <br />
                    <h3 className='desc'>I build apps/websites that are an intersection between code and design.
                        I think good code deserves good visuals as well. Previously worked at <span><a style={{ textDecoration: "underline" }} href="https://www.microsoft.com/en-in/microsoft-viva/insights" target="_blank">Microsoft</a></span> + <span><a style={{ textDecoration: "underline" }} href="https://www.loopwork.co/" target="_blank">Loop</a></span>, for a total of 2+ years.
                        Even before that, graduated from <span><a style={{ textDecoration: "underline" }} target="_blank" href="https://www.iitbhu.ac.in/">IIT BHU</a></span> in '22, majoring in Electrical engineering. Obsessed with learning, and obviously, building new stuff.</h3>
                </div>
                <div className='achievements'>
                    {achievements.map((item, idx) => (
                        <div key={idx} className='achievement-item'>
                            <span className='achievement-number'>{item.number}</span>
                            <span className='achievement-label'>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;