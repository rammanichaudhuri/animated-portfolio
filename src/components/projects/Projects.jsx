import './projects.css';
import FlowingMenu from './menu/FlowingMenu';

const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];


const Projects = () => {
    return (
        <div className='container'>
            <div className='subContainer' style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div className='heading'>
                <h1>projects:</h1>
            </div>
            <div style={{ height: '400px', position: 'relative' }}>
                <FlowingMenu items={demoItems}
                    speed={15}
                    textColor="#ffffff"
                    bgColor="#060010"
                    marqueeBgColor="#ffffff"
                    marqueeTextColor="#060010"
                    borderColor="#ffffff"
                />
            </div>
            </div>
        </div>
    );
}

export default Projects;