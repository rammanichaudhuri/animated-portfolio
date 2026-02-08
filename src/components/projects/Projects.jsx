import './projects.css';
import FlowingMenu from './menu/FlowingMenu';
import Silk from '../Silk';

const demoItems = [
    {
        link: '#', text: 'Loop subscriptions', descript: 'frontend developer', timePeriod: 'nov 2024 - mar 2025', image: 'https://picsum.photos/600/400?random=2', descriptn: 'Led homepage redesign that increased user engagement by 25%. Built 20+ reusable React components and managed 50+ pages with role - based access control.Optimized performance through lazy loading and systematic debugging—resolved 100+ production issues.' },
    { link: '#', text: 'Microsoft', descript: 'frontend developer', timePeriod: 'jun 2022 - jul 2024', image: 'https://picsum.photos/600/400?random=1', descriptn: 'Designed and built interactive analytics dashboards with complex data visualizations (Sankey charts, real-time filters). Optimized Core Web Vitals from poor to good, increasing performance scores across all metrics. Integrated Stripe payments with seamless UX.' },
    { link: '#', text: 'collaborative editor', descript: 'current project', timePeriod: 'jan 2026 - present', image: 'https://picsum.photos/600/400?random=3', descriptn: 'Collaborative document editor with real-time multi-user editing, CRDT-based conflict resolution, and sub-100ms sync latency. Built with React, TypeScript, Node.js, Yjs, WebSocket, and PostgreSQL. Supports 50+ concurrent users.' },
    { link: '#', text: 'social media app', descript: 'full stack project (MERN)', timePeriod: 'aug 2024 - nov 2024', image: 'https://picsum.photos/600/400?random=4', descriptn: 'Full-stack social media app with user authentication, content sharing, newsfeed, and commenting. Built with React, Node.js, Express, and MongoDB. Fully responsive design.' }
];


const Projects = () => {
    return (
        <div className='containerProject'>
            {/* <div className='silkProject'>
                <Silk
                    speed={5}
                    scale={1}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div> */}
            <div className='subContainerProject' style={{ width: '100vw' }}>
                <div className='headingProject'>
                    <h1>projects / work / education:</h1>
                </div>
                <div className='menu' style={{ height: '400px', position: 'relative' }}>
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