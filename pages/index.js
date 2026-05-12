import Head from 'next/head';
import { useEffect } from 'react';

const projects = [
  {
    slug: 'manulife',
    img: '/assets/images/insmaamarket.svg',
    alt: 'Individual Insurance Case Study',
    category: 'Digital Strategy & Roadmap',
    title: 'Individual Insurance and Wealth',
    desc: 'Identify IIC’s future state service mapping that will enable a scalable Mass Market growth strategy.',
  },
  {
    slug: 'onboarding',
    img: '/assets/images/onboarding.svg',
    alt: 'Advisor onboarding Journey',
    category: 'Insurance Advisor Onboarding Journey',
    title: 'Advisor Onboarding',
    desc: 'Mapped the advisor onboarding journey and service ecosystem to uncover systemic friction and define opportunities for a more seamless digital experience.',
  },
  {
    slug: 'inshub',
    img: '/assets/images/serviceblueprint.svg',
    alt: 'Insurance Service Blueprint',
    category: 'Service Blueprint',
    title: 'Integrated Insurance Hub',
    desc: 'Designed an end-to-end service blueprint to streamline the advisor journey and define an integrated insurance hub to streamline the digital experience across systems and teams.',
  },
  {
    slug: 'leaseplan',
    img: '/assets/images/Leaseplan.png',
    alt: 'Car rental after sales and Service',
    category: 'Digital Strategy',
    title: 'Manage Vehicle Service Delivery Process',
    desc: 'To provide the best customer experience or journey on digital platforms for vehicle leasing to businesses and salaried users.',
  },
  {
    slug: 'servicenow',
    img: '/assets/images/ITSM.svg',
    alt: 'ITSM',
    category: 'IT Service Management',
    title: 'ServiceNow',
    desc: 'Improved IT service management processes by mapping service workflows, identifying friction points, and designing more efficient support and operational experiences.',
  },
  {
    slug: 'designstudio',
    img: '/assets/images/Designstudio.svg',
    alt: 'UI/UX Design Studio',
    category: 'UX Asset Management',
    title: 'Design Studio',
    desc: 'Design Studio is a portal for managing and distributing reusable assets like templates, design stencils, icons, components, themes.',
  },
];

const skillGroups = [
  {
    title: 'Design',
    items: [
      { name: 'Service Blueprinting', value: 95 },
      { name: 'UX design and Strategy', value: 90 },
      { name: 'User Research & Insight Synthesis', value: 80 },
      { name: 'Journey Mapping', value: 88 },
      { name: 'Pain-Point Analysis & Opportunity Mapping', value: 90 },
      { name: 'UX Roadmapping & North Star Vision', value: 90 },
      { name: 'Digital Platform Strategy', value: 70 },
      { name: 'Cross-Functional Collaboration', value: 90 },
      { name: 'Stakeholder Workshops & Facilitation', value: 80 },
      { name: 'Experience Transformation for Complex Organizations', value: 88 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Figma / Axure', value: 90 },
      { name: 'Mural', value: 94 },
      { name: 'User testing', value: 70 },
      { name: 'Miro', value: 75 },
      { name: 'FigJam', value: 75 },
      { name: 'Lucidcharts', value: 75 },
      { name: 'Dovetail', value: 60 },
      { name: 'SurveyMonkey', value: 65 },
      { name: 'Confluence', value: 85 },
      { name: 'Jira', value: 65 },
      { name: 'ServiceNow', value: 70 },
      { name: 'HTML / CSS', value: 60 },
      { name: 'Adobe Analytics', value: 50 },
    ],
  },
];

const contactItems = [
  {
    label: 'Email',
    value: 'vijayant.verma@gmail.com',
    href: 'mailto:vijayant.verma@gmail.com',
  },
  {
    label: 'Phone',
    value: '+1 613 799 1972',
    href: 'tel:+16137991972',
  },
  {
    label: 'LinkedIn',
    value: 'vijayverma005',
    href: 'https://www.linkedin.com/in/vijayverma005/',
  },
];

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.querySelectorAll('.skill-fill').forEach((bar, index) => {
              setTimeout(() => bar.classList.add('animate'), index * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Vijayant Verma — Service & UX Design Portfolio</title>
        <meta
          name="description"
          content="Vijayant Verma is a service designer and UX strategy leader focused on transforming complex service ecosystems into seamless digital experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav>
        <a className="nav-logo" href="#hero">
          <strong>Vijayant</strong> Verma
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="hero">
        <div className="hero-left">
          <h1>VIJAYANT VERMA</h1>
          <h2>
            Service Design<em>, UX Design and Strategy</em>, Digital Transformation
          </h2>
          <p className="hero-desc">
            I am a Service Designer and UX Strategy leader focused on transforming complex service ecosystems into seamless digital experiences.
            <br />
            <strong>
              My work focuses on:
              <br />• User Experience & Service Design
              <br />• User research and insight synthesis
              <br />• Persona development and behavioral understanding
              <br />• End-to-end journey mapping
              <br />• Service blueprinting across frontstage and backstage systems
              <br />• Pain-point identification and opportunity mapping
              <br />• Defining experience strategy, UX roadmaps, and North Star vision
              <br />• Digital platform and ecosystem strategy
              <br />• Driving experience transformation for complex, large-scale organizations
            </strong>
          </p>
          <a className="btn" href="#projects">
            View selected work <span className="btn-arrow">→</span>
          </a>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-stat">
              <div className="hero-stat-num">15+</div>
              <div className="hero-stat-label">Years exp.</div>
            </div>
            <div className="hero-visual-inner">
              <img src="/assets/images/portfoliopic.svg" alt="Vijayant Verma" />
            </div>
            <div className="hero-visual-label">Portfolio</div>
          </div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-line"></div>
          Scroll
        </div>
      </section>

      <section id="about">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2>About</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid reveal">
          <div className="about-text">
            <p>
              I design human-centered services and digital ecosystems that simplify complex systems and improve experiences for customers, users, and internal teams.
            </p>
            <p>
              My work focuses on transforming fragmented platforms and processes into cohesive service experiences through service design, journey mapping, and experience strategy.
            </p>
            <p>
              With experience working across complex enterprise environments, I specialize in finding systemic friction and designing solutions that improve both user experience and operations.
            </p>
          </div>
          <div className="about-details">
            {[
              { key: 'Location', value: 'Ontario , Canada' },
              { key: 'Specialization', value: 'Service and UX Design' },
              { key: 'Experience', value: '15+ years' },
              { key: 'Education', value: 'Bachelor of Engineering (Electronics & Communications)' },
              { key: 'Certifications', value: 'Human Centric Design, ITIL4 Foundation' },
              { key: 'Clients', value: 'Symantec, Brocade, US Foods, UCSF, Merck, TD Securities, CN Rail, Manulife' },
            ].map((detail) => (
              <div key={detail.key} className="detail-row">
                <span className="detail-key">{detail.key}</span>
                <span className="detail-val">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2>Selected Case Studies</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid reveal">
          {projects.map((project, index) => (
            <div key={project.slug} className={`project-card p${index + 1}`}>
              <div className="project-img">
                <div className="project-img-inner">
                  <img src={project.img} alt={project.alt} />
                </div>
                <div className="project-overlay">
                  <div className="project-link-icon">
                    <a
                      className="cta-button"
                      href={`/casestudies/${project.slug}.html`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-cat">{project.category}</div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2>Skills</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-layout reveal">
          <div className="skills-intro">
            <p>
              A decade of designing human-centered services and digital ecosystems, using service design and experience strategy to simplify complexity and uncover insights others often miss.
            </p>
          </div>
          <div className="skills-cols">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="skill-group-title">{group.title}</p>
                {group.items.map((item) => (
                  <div key={item.name} className="skill-item">
                    <div className="skill-name-row">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-pct">{item.value}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="section-header">
          <span className="section-num">04</span>
          <h2>Contact</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-layout reveal">
          <div className="contact-left">
            <h3>
              Let’s create
              <br />better experiences
              <em>,</em>
              <br />together.
            </h3>
            <p>
              Open to conversations around service design, experience strategy, and digital transformation initiatives. I work with teams to make sure each project gets thoughtful attention and meaningful impact.
            </p>
            <div className="contact-links">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  className="contact-link-row"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <div className="contact-link-label">{item.label}</div>
                    <div className="contact-link-val">{item.value}</div>
                  </div>
                  <span className="contact-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span className="footer-copy">© 2026 Vijayant Verma — All rights reserved</span>
        <a className="footer-back" href="#hero">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
