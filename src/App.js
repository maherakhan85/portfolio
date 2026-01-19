import React, { useState } from "react";
import "./styles.css";
import './Untitled.png';  
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';

const Portfolio = () => {
  // Work Experience Data
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "PROJXON",
      duration: "October 2025 – Present",
      shortDescription: "Designed, developed, and maintained dynamic web applications using React.js, Next.js, SQL, WordPress, and REST APIs while optimizing performance and reliability through debugging and collaboration.",
      fullDescription: <ul>
        <li>Designed, coded, tested, and maintained web applications using React.js, Next.js, and SQL databases. </li>
        <li> Assist in building and maintaining WordPress-based websites and web applications, ensuring smooth back-end functionality and performance.</li>
        <li> Work with REST APIs to integrate external data and manage databases to support dynamic, data driven web experiences.</li>
        <li> Support debugging, server management, and code documentation to enhance the overall functionality and reliability of web applications.</li>
        <li> Analyzed existing program logic to identify bugs and performance issues, modifying code to improve efficiency and reliability.</li>
        <li> Collaborated closely with team members to assess usability requirements and technical specifications.</li>
        <li> Performed diagnostic testing to detect syntax and logic errors and implemented fixes.</li>
        <li> Maintained and enhanced existing applications while contributing to new feature development.</li>
        <li> Work independently on assigned tasks while reporting progress during regular team meetings.</li>
      </ul>,
    },
    {
      title: "Computer Lab Assistant",
      company: "Fairleigh Dickinson University, Teaneck, NJ",
      duration: "August 2024 – May 2025",
      shortDescription: "Provided tech support & maintained lab systems for students & faculty.",
      fullDescription: <ul>
        <li>Provided technical support to 100+ students and faculty, troubleshooting hardware/software issues to minimize downtime.</li>
        <li>Installed, configured, and maintained lab systems and specialized software, ensuring 99.9% system uptime.</li>
        <li>Guided students in using specialized software, including programming tools, data analysis platforms, and design applications, offering hands-on support and troubleshooting.</li>
      </ul>,
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Fairleigh Dickinson University, Teaneck, NJ",
      duration: "January 2024 – May 2025",
      shortDescription: "Mentored students in AI, ML, Java, Python, & DSA.",
      fullDescription: <ul>
        <li>Assisted in AI, Machine Learning, Data Structures & Algorithms, Java, and Python courses, mentoring 50+ students per semester.</li>
        <li>Provided one-on-one tutoring, improving student problem-solving skills by 20%.</li>
        <li>Graded and reviewed assignments while helping students debug and optimize Java/Python projects.</li>
      </ul>,
    },
    {
      title: "AWS Cloud Intern",
      company: "AICTE",
      duration: "October 2021 – December 2021",
      shortDescription: "Gained hands-on experience with AWS services & cloud deployment.",
      fullDescription: 
      <ul>
        <li>Completed advanced cloud computing training, gaining hands-on experience with AWS services including EC2, S3, Lambda, and CloudFormation.</li>
        <li>Designed scalable, secure cloud solutions to optimize performance and reliability within the AWS ecosystem.</li>
        <li>Developed a platform for building, testing, deploying, and operating Docker applications using AWS services like EC2 and CloudFormation.</li>
      </ul>
    ,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <h3>MK</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#volunteer">Volunteer</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#feedback">Feedback</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/project/:projectId" element={<ProjectDetails />} />
          <Route path="/" element={
            <>
              {/* Intro Section */}
              <section id="intro" className="intro-section">
                <div className="intro-container">
                  <div className="intro-left">
                    <img 
                      src={require('./Untitled.png')} 
                      alt="Mahera Khatoon" 
                      className="profile-photo" 
                    />
                  </div>
                  <div className="intro-right">
                    <h2>Mahera Khatoon</h2>
                    <p>Software Engineer | Full-Stack Developer | Cloud Enthusiast</p>
                    <p>🌐 Turning dreams into URLs and code into beautiful user experiences.</p>
                    <a href="/maheraresum.pdf" target="_blank" className="btn" rel="noopener noreferrer">View CV</a>
                    <div className="contact-info">
                      <p>📧 Email: <a href="mailto:maherakhatoon12@gmail.com">maherakhatoon12@gmail.com</a></p>
                      <p>🔗 <a href="https://linkedin.com/in/maherakhatoon" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                  </div>
                </div>
              </section>

              {/* About Me Section */}
              <section id="about">
                <div className="about-card">
                  <h2>About Me</h2>
                  <p>I'm <strong>Mahera Khatoon</strong>, a <strong>Software Engineer</strong> specializing in full-stack development and cloud solutions. I have hands-on experience with technologies like React.js, Node.js, ASP.NET Core, C#, MySQL, Docker, and AWS (EC2, Lambda, CloudFormation).</p>
                  <p>My background includes roles as a Graduate Teaching Assistant and AWS Cloud Intern, where I focused on building scalable architectures, writing clean and maintainable code, and working in agile development environments.</p>
                  <p>I'm passionate about solving real-world problems through efficient, user-focused software solutions and continuous learning in modern tech ecosystems.</p>
                  <p><strong>Education:</strong> Fairleigh Dickinson University, Teaneck, NJ – M.S. Computer Science, GPA: 3.7</p>
                  <p><strong>Tech Stack:</strong> Java, Python, C#, JavaScript, TypeScript, React, Php, Next.js, ASP.NET, Node.js, SQL, MongoDB, AWS, Docker, Kubernetes.</p>

                  <p><strong>Experience:</strong> Graduate Teaching Assistant, Computer Lab Assistant, AWS Cloud Intern, Java Tutor.</p>

                  <p><strong>Volunteering:</strong> CSEOP Program, Community Pantry, UBA Coordinator, Care of the Park (Branch Brook Park).</p>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects">
                <h2>Projects</h2>
                <p>Here are some of my projects...</p>
                
                <div className="projects-container">
                  {/* Project 1: Vocab */}
                  <div className="project-card">
                    <h3>Vocab</h3>
                    <p>Interactive app that delivers 10 new words daily through flashcards with meanings and pronunciations, making vocabulary building simple and engaging.</p>
                    <ul>
                      <li><strong>Features:</strong> Daily word updates, interactive flashcards, audio pronunciation, progress tracking, and learning history.</li>
                      <li><strong>Tech Stack:</strong> React.js, Supabase, Web Speech API, Local Storage, HTML5, CSS3.</li>
                    </ul>
                    <div className="project-links">
                      <a href="https://github.com/maherakhan85/daily-vocabulary" target="_blank" rel="noopener noreferrer" className="btn github-btn">
                        <i className="fab fa-github"></i> GitHub
                      </a>
                      <Link to="/project/vocab" className="btn details-btn">
                        More Details
                      </Link>
                    </div>
                  </div>

                  {/* Project 2: Task Scheduler */}
                  <div className="project-card">
                    <h3>Task Scheduler</h3>
                    <p>A comprehensive task management application that helps users organize their daily activities with smart scheduling and progress tracking features.</p>
                    <ul>
                      <li>Features: Task management, CRUD operations, scheduling system.</li>
                      <li>Tech Stack: React.js, Node.js, MongoDB, Express.</li>
                    </ul>
                    {/*
                    <div className="project-links">
                      <a href="https://github.com/your-username/task-scheduler" target="_blank" rel="noopener noreferrer" className="btn github-btn">
                        <i className="fab fa-github"></i> GitHub
                      </a>
                      <Link to="/project/taskScheduler" className="btn details-btn">
                        More Details
                      </Link>
                    </div>
                    */}
                  </div>

                  {/* Project 3: Employer Manager */}
                  <div className="project-card">
                    <h3>Employer Manager</h3>
                    <p>Manage employees with CRUD operations (Create, Read, Update, Delete) in a MERN stack application.</p>
                    <ul>
                      <li>Features: Employee management, CRUD operations, admin panel.</li>
                      <li>Tech Stack: MongoDB, Express, React, Node.js (MERN Stack).</li>
                    </ul>
                    <div className="project-links">
                      <a href="https://github.com/maherakhan85/FinalProject" target="_blank" rel="noopener noreferrer" className="btn github-btn">
                        <i className="fab fa-github"></i> GitHub
                      </a>
                      <Link to="/project/employerManager" className="btn details-btn">
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Work Experience Section */}
              <section id="experience">
                <h2>Work Experience</h2>
                <div className="experience-container">
                  {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                      <p>{exp.duration}</p>
                      <p>{exp.shortDescription}</p>
                      {expandedIndex === index && <p className="full-description">{exp.fullDescription}</p>}
                      <button className="more-btn" onClick={() => toggleExpand(index)}>
                        {expandedIndex === index ? "Show Less" : "More"}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Volunteering Section */}
              <section id="volunteer">
                <h2>Volunteering</h2>
                <div className="volunteer-container">

                  {/* CSEOP Program Coordinator - Fairleigh Dickinson University, Teaneck, NJ */}
                  <div className="volunteer-card">
                    <h3>CSEOP Program Coordinator</h3>
                    <h4>Fairleigh Dickinson University, Teaneck, NJ</h4>
                    <ul>
                      <li>Organized program activities and designed innovative teaching methods integrating computer science and engineering concepts.</li>
                      <li>Led interactive workshops on App development, increasing participant knowledge and engagement by 30%.</li>
                      <li>Mentored students in applying coding principles to real-world projects, fostering hands-on learning experiences.</li>
                    </ul>
                  </div>

                  {/* Java Tutor - Fairleigh Dickinson University, Teaneck, NJ */}
                  <div className="volunteer-card">
                    <h3>Java Tutor</h3>
                    <h4>Fairleigh Dickinson University, Teaneck, NJ</h4>
                    <ul>
                      <li>Conducted weekly tutoring sessions to strengthen students' Java proficiency.</li>
                      <li>Focused on Object-Oriented Programming (OOP) concepts and algorithm optimization.</li>
                      <li>Designed real-world coding challenges to enhance problem-solving skills.</li>
                    </ul>
                  </div>

                  {/* Food Pantry Coordinator - Triangle Park Community, Jersey City, NJ */}
                  <div className="volunteer-card">
                    <h3>Food Pantry Coordinator</h3>
                    <h4>Triangle Park Community, Jersey City, NJ</h4>

                    <ul>
                      <li>Managed food distribution for underprivileged families, ensuring fair and efficient allocation.</li>
                      <li>Tracked inventory to maintain stock levels and prevent shortages.</li>
                      <li>Coordinated with volunteers to optimize food packaging and delivery processes.</li>
                    </ul>
                  </div>

                  {/* UBA (Unnat Bharat Abhiyan) Coordinator - Hyderabad, India */}
                  <div className="volunteer-card">
                    <h3>UBA (Unnat Bharat Abhiyan) Coordinator</h3>
                    <h4>Unnat Bharat Abhiyan, Hyderabad, India</h4>
                    <ul>
                      <li>Worked on rural development initiatives by leveraging knowledge institutions to drive transformation.</li>
                      <li>Conducted surveys, analyzed data, and proposed actionable improvements for community betterment.</li>
                      <li>Led a team as a student head coordinator, collaborated with senior members, and ensured program objectives were met successfully.</li>
                    </ul>
                  </div>
                  {/* Care of the Park Volunteer - Branch Brook Park, NJ */}
    <div className="volunteer-card">
      <h3>Care of the Park Volunteer 🌳</h3>
      <h4>Branch Brook Park, Newark, NJ</h4>
      <ul>
        <li>Performed pruning, grooming, raking, cultivating, watering, and weeding tasks across park landscapes.</li>
        <li>Removed invasive plant species to preserve native biodiversity.</li>
        <li>Supported restoration and conservation initiatives to enhance park sustainability.</li>
        <li>Maintained sections of the historic Lenape Trail, improving safety and accessibility.</li>
        <li>Cleared general debris to beautify and maintain cleanliness throughout the park.</li>
      </ul>
    </div>
                </div>
              </section>
            </>
          } />
        </Routes>

        <footer>
          <p>Connect: <a href="https://www.linkedin.com/in/maherakhatoon/">LinkedIn</a></p>
        </footer>
      </div>
    </Router>
  );
};

export default Portfolio;
