import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import './FlowingMenu.css';
import './Modal.css';
import useDeviceSize from '../../useDeviceSize.jsx';

const projects = [
  {
    id: "Loop subscriptions",
    link: "https://www.loopwork.co/",
    projectDesc: [
      "Loop subscriptions is a subscription management app built for Shopify. It is based in Gurgaon.",
      "Here, I:",
      "Built interactive analytics dashboards for Loop using Highcharts to visualize subscription management/acquisition/retention and usage frequency data, featuring dynamic charts like Sankey, filters, and toggles for real-time, category-wise comparisons, leading to a 10 percent increase in user engagement.",
      "Integrated Stripe’s payment SDK to implement secure, seamless payment processing within the application!",
      "Diagnosed and fixed UI/UX bugs, improving application responsiveness and cross-browser compatibility.",
      "Authored detailed documentation covering component usage, state management, and API integration."
    ]
  },
  {
    id: "Microsoft",
    link: "https://www.microsoft.com/en-in/microsoft-viva/insights",
    projectDesc: [
      "Contributed to the successful launch of 5 MAJOR features, independently leading the development of 2, for the advanced Viva Insights App, which provides tools for analyzing how an organization gets work done and reporting custom analysis to the company’s leaders.",
      "Spearheaded the pivotal homepage re-design and revamp of L1/L2 pages project, leading to a 25 percent increase in website visits, within a month after the launch! Integrated Role-based access control (RBAC) to assign and restrict permission based on individual user’s role.",
      "Implemented RESTful API integration and leveraged lazy loading techniques to deliver a dynamic and performant UX.",
      "Built 20+ reusable components from scratch, as well as optimized existing. Managed 50+ webpages, using React and TypeScript, ensuring a consistent and high-quality user experience. Utilized Git for code collaboration and version management.",
      "Collaborated with cross-functional teams of 4 designers, 3 product managers, backend teams, and other frontend developers to deliver features on time as well as within budget."
    ]
  },
  {
    id: "collaborative editor", 
    link: "",
    projectDesc: [
      "Architected a collaborative editing platform enabling real-time multi-user document editing with CRDT-based conflict resolution, supporting 50+ concurrent users with sub-100ms sync latency.",
      "Features include rich text formatting, real-time presence indicators, comment threading, version history, granular permissions, and offline editing with automatic sync.",
      "Tech stack: React, TypeScript, Node.js, Yjs, PostgreSQL, WebSocket",
      "Link: [still ongoing]"
    ]
  },
  {
    id: "social media app", 
    link: "",
    projectDesc: [
      "Engineered a fully responsive social media app with the MERN stack, for users to connect and share posts.",
      "Key features include user management, content creation and sharing, newsfeed, likes and comments.",
      "Architected the frontend interface with React, combined backend services using Node.js and Express.js, and optimized data management through MongoDB.",
      "Tech stack: HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, MongoDB",
      "Link: [still ongoing]"
    ]
  }
]


function FlowingMenu({
  items = [],
  speed = 15,
  textColor = 'rgb(0, 0, 0)',
  bgColor = transparent,
  marqueeBgColor = 'rgb(255, 255, 255)',
  marqueeTextColor = '#060010',
  borderColor = 'rgb(0, 0, 0)'
}) {
  return (
    <div className="menu-wrap" style={{ backgroundColor: "transparent" }}>
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, descript, descriptn, timePeriod, image, speed, textColor, marqueeBgColor, marqueeTextColor, borderColor }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [deviceWidth, deviceHeight] = useDeviceSize();

  const openProjectModal = (id, action) => {
    if (action === "open") {
      setModal(true);
      setModalContent(projects.filter(project => project.id == text));
    }
    else {
      setModal(false);
      setModalContent(null);
    }
  }

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;

      // Get the first marquee part to measure content width
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part');
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;

      // Calculate how many copies we need to fill viewport + extra for seamless loop
      // We need at least 2, but calculate based on content vs viewport
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [text, descriptn]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part');
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Animate exactly one content width for seamless loop
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1
      });
    };

    // Small delay to ensure DOM is ready after repetitions update
    const timer = setTimeout(setupMarquee, 50);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, repetitions, speed]);

  const handleMouseEnter = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  return (

    <div className="menu__item" ref={itemRef} style={{ borderColor }}>
      <a
        className="menu__item-link"
        href={link}
        onMouseEnter={deviceWidth >= "1500" ? handleMouseEnter : () => {}}
        onMouseLeave={deviceWidth >= "1500" ? handleMouseLeave : () => {}}
        style={{ color: textColor, fontFamily: "Pixelify Sans" }}
        onClick={() => openProjectModal(text, 'open')}
      >
        <div>{text}</div>
        <div>{descript}</div>
        <div>{timePeriod}</div>
        <div>learn more!</div>
      </a>
      <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor }}>
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" ref={marqueeInnerRef} aria-hidden="true">
            {descriptn} {`[click to learn more.]`}
          </div>
        </div>
      </div>
      {modal ? <div className='modal-overlay'>
        <div className="modal-content">
          <div className='modal-text'>
            {modalContent.map((item) => {
              return (
                <>
                  <h2 className='modal-text' style={{ color: "black", justifySelf: "start" }}>
                    {item.link !== "" ?
                      <span><a target="_blank" style={{ textDecoration: "underline" }} href={item.link}>{item.id}</a></span> :
                      <span>{item.id}</span>
                    }
                  </h2>
                  <p className='modal-text' style={{ color: "black" }}>
                    {item.projectDesc.map((descrpt) => {
                      return <li className='modal-text' style={{ textAlign: "start" }}>{descrpt}</li>
                    })}</p>
                </>
              );
            })}
          </div>
          <button className='modal-close-button' onClick={() => openProjectModal(text, 'close')}>close</button>
        </div>
      </div> : null}

    </div>
  );
}

export default FlowingMenu;
