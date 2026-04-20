import './projects.css';
import FlowingMenu from './menu/FlowingMenu';

const demoItems = [
    {
        link: 'https://www.loopwork.co/',
        text: 'Loop subscriptions',
        descript: 'frontend engineer',
        timePeriod: 'nov 2024 – mar 2025',
        image: 'https://picsum.photos/600/400?random=2',
        descriptn: 'Led homepage redesign → 25% user engagement ↑. Built 20+ reusable React components, managed 50+ pages with RBAC, optimised performance via lazy loading. Resolved 100+ production issues.'
    },
    {
        link: 'https://www.microsoft.com/en-in/microsoft-viva/insights',
        text: 'Microsoft Viva Insights',
        descript: 'frontend engineer',
        timePeriod: 'jun 2022 – jul 2024',
        image: 'https://picsum.photos/600/400?random=1',
        descriptn: 'Shipped 5 major features, led 2 independently. Homepage redesign → 25% traffic ↑ in one month. Interactive analytics dashboards (Sankey charts), Core Web Vitals poor → good, Stripe payments integration.'
    },
    {
        link: '#',
        text: 'collaborative editor',
        descript: 'full stack · in progress',
        timePeriod: 'jan 2026 – present',
        image: 'https://picsum.photos/600/400?random=3',
        descriptn: 'Real-time multi-user doc editor with CRDT conflict resolution, sub-100ms sync, 50+ concurrent users. Rich text, version history, offline sync. Stack: React · TypeScript · Node.js · Yjs · WebSocket · PostgreSQL'
    },
    {
        link: '#',
        text: 'social media app',
        descript: 'full stack · MERN',
        timePeriod: 'aug 2024 – nov 2024',
        image: 'https://picsum.photos/600/400?random=4',
        descriptn: 'Full-stack MERN social platform with auth, content sharing, newsfeed, likes & comments. Fully responsive. Stack: React · Redux · Node.js · Express · MongoDB'
    },
];

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-overlay" />

            <div className="projects-body">
                <h1 className="projects-heading">
                    selected <span className="projects-heading-accent">work.</span>
                </h1>

                <div className="projects-menu">
                    <FlowingMenu
                        items={demoItems}
                        speed={15}
                        textColor="#000000"
                        bgColor="rgba(255,255,255,0.15)"
                        marqueeBgColor="#ffffff"
                        marqueeTextColor="#060010"
                        borderColor="rgba(26,19,31,0.12)"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
