import "./App.css";

const projects = [
  {
    title: "SafeVision",
    category: "Real-Time AI · Systems",
    description:
      "Built a real-time violence detection pipeline that ingests live RTSP streams, processes video data, and generates automated alerts. Worked on network stream configuration, CCTV/NVR connectivity, troubleshooting, and system monitoring.",
    tech: ["Python", "RTSP", "Computer Vision", "Networking"],
  },
  {
    title: "Interview Integrity Guard",
    category: "AI · Computer Vision",
    description:
      "Developed an AI-assisted interview monitoring application for behavioural pattern detection. Built the end-to-end pipeline for data processing, model inference, and automated flagging, with a focus on reliable real-time analysis.",
    tech: ["Python", "Computer Vision", "ML", "React Native"],
  },
];

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "SQL", "R"],
  },
  {
    title: "AI & Automation",
    skills: ["AI / ML", "Python Automation", "Computer Vision", "ML Pipelines"],
  },
  {
    title: "Systems & Networking",
    skills: ["Linux", "TCP/IP", "Network Configuration", "Windows"],
  },
  {
    title: "Tools & Development",
    skills: ["Git", "Postman", "REST APIs", "Technical Documentation"],
  },
];

function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <a href="#" className="logo">
          AA.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <p className="eyebrow">IT GRADUATE · AI · AUTOMATION · SYSTEMS</p>

            <h1>
                I build
                  <span> technology that works.</span>
            </h1>

          <p className="hero-text">
             I'm Anakha, an Information Technology graduate working across
             AI, automation, systems, and software. I enjoy turning
            technical problems into practical, reliable solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View my work
            </a>

            <a href="#contact" className="button secondary">
              Let's connect
            </a>
          </div>

          <div className="scroll-note">SCROLL TO EXPLORE ↓</div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-label">01 — ABOUT</div>

          <div className="about-content">
            <h2>
              Curious by nature.
              <br />
              <span>Technical by choice.</span>
            </h2>

            <div className="about-text">
              <p>
                I'm an Information Technology graduate from Government
                Engineering College Idukki with hands-on experience across AI,
                automation, networking, and software development.
              </p>

              <p>
                I enjoy understanding how systems work, figuring out why they
                don't, and building practical solutions that make things
                better.
              </p>

              <p>
                Outside of coding, I've spent a lot of time leading technical
                communities, organizing initiatives, documenting projects, and
                working with people through IEEE Computer Society.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-label">02 — SELECTED WORK</div>

          <div className="section-heading">
            <h2>Things I've built.</h2>
            <p>
              A few projects where technology met an actual problem to solve.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  0{index + 1}
                </div>

                <div>
                  <p className="project-category">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tech-list">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="project-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

      
       {/* EXPERIENCE & LEADERSHIP */}

<section id="experience" className="section">
  <div className="section-label">03 — EXPERIENCE & LEADERSHIP</div>

  <div className="section-heading">
    <h2>More than just code.</h2>
    <p>
      Building communities, leading initiatives, and making technical
      ideas happen.
    </p>
  </div>

  <div className="experience-item">
    <div className="experience-date">2025</div>

    <div>
      <p className="experience-company">IEEE Computer Society · GECI</p>

      <h3>Chairperson</h3>

      <p>
        Contributed to the leadership and execution of technical
        initiatives, events, and community activities within the
        Student Branch Chapter.
      </p>
    </div>
  </div>

  <div className="experience-item">
    <div className="experience-date">2024</div>

    <div>
      <p className="experience-company">IEEE Computer Society Kerala Chapter</p>

      <h3>Documentation Lead</h3>

      <p>
        Led documentation activities across the Kerala Chapter,
        supporting communication, reporting, and knowledge sharing
        across Student Branch Chapters.
      </p>
    </div>
  </div>

  <div className="experience-item">
    <div className="experience-date">2024</div>

    <div>
      <p className="experience-company">IEEE Day</p>

      <h3>IEEE Day Ambassador</h3>

      <p>
        Supported IEEE Day activities and contributed to planning and
        coordination of celebrations across the community.
      </p>
    </div>
  </div>

  <div className="experience-item">
    <div className="experience-date">2024</div>

    <div>
      <p className="experience-company">LEAP 2024 · IIT Madras Incubation Cell</p>

      <h3>Team Lead — Smart Shoe Cleaner</h3>

      <p>
        Led a team developing a waterless automated shoe-cleaning
        prototype featuring liquid spraying, a rotating platform,
        and stationary brushes.
      </p>
    </div>
  </div>
</section>

{/* ACHIEVEMENTS */}

<section className="section">
  <div className="section-label">04 — ACHIEVEMENTS</div>

  <div className="achievements-grid">
    <div className="achievement">
      <span>2023</span>
      <h3>Outstanding Student Volunteer</h3>
    </div>

    <div className="achievement">
      <span>2024</span>
      <h3>Outstanding Office Bearer</h3>
    </div>
  </div>
</section>
{/* PROFESSIONAL EXPERIENCE */}

<section className="section">
  <div className="section-label">05 — PROFESSIONAL EXPERIENCE</div>

  <div className="experience-item">
    <div className="experience-date">08/2025 — 11/2025</div>

    <div>
      <p className="experience-company">Infosys Springboard</p>

      <h3>AI & Automation Intern</h3>

      <p>
        Built Python-based automation and data-processing workflows,
        troubleshot system issues, and maintained structured technical
        documentation while working independently in a remote environment.
      </p>
    </div>
  </div>
</section>

{/* CERTIFICATIONS */}

<section className="section">
  <div className="section-label">06 — CERTIFICATIONS</div>

  <div className="certifications">
    <div className="certification">
      <span>COMPLETED</span>
      <h3>Artificial Intelligence Certification</h3>
      <p>Infosys Springboard</p>
    </div>

    <div className="certification">
      <span>COMPLETED</span>
      <h3>OpenAI GPT-3 for Developers</h3>
      <p>Infosys Springboard</p>
    </div>

    <div className="certification">
      <span>IN PROGRESS</span>
      <h3>Microsoft Azure AI Fundamentals</h3>
    </div>

    <div className="certification">
      <span>IN PROGRESS</span>
      <h3>API Fundamentals Student Expert</h3>
      <p>Postman</p>
    </div>
  </div>
</section>
        {/* SKILLS */}

<section className="section skills-section">
  <div className="section-label">07 — TOOLKIT</div>

  <h2>What I work with.</h2>

  <div className="skill-groups">
    {skillGroups.map((group) => (
      <div className="skill-group" key={group.title}>
        <h3>{group.title}</h3>

        <div className="skills">
          {group.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

        {/* EDUCATION */}
        <section className="section education">
          <div className="section-label">08 — EDUCATION</div>

          <div className="education-card">
            <div>
              <p className="education-degree">
                B.Tech in Information Technology
              </p>

              <h3>Government Engineering College Idukki</h3>

              <p>Kerala, India · 2022 — 2026</p>
            </div>

            <div className="cgpa">
              <span>CGPA</span>
              <strong>7.2</strong>
              <small>/ 10</small>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2>
            Have something
            <br />
            <span>interesting in mind?</span>
          </h2>

          <a
            className="email-link"
            href="mailto:anilkumaranakha2@gmail.com"
          >
            anilkumaranakha2@gmail.com ↗
          </a>

         <div className="social-links">
  <a
    href="https://linkedin.com/in/anakha-anilkumar-a16207281"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a href="https://github.com/Anakhaanilkumar" target="_blank" rel="noreferrer">
    GitHub
  </a>
</div>
        </section>
      </main>

      <footer>
        <span>© 2026 Anakha Anilkumar</span>
        <span>Built with React & curiosity.</span>
      </footer>
    </div>
  );
}

export default App;