import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLightbulb, FaPuzzlePiece, FaTools, FaImage } from 'react-icons/fa';
import './ProjectDetails.css';  // Make sure to create this CSS file

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  // Project data
  const projectsData = {
    vocab: {
      title: "Vocab",
      description: `Vocab is a web-based daily vocabulary builder designed to help users expand their English vocabulary in an engaging and manageable way. Each day, the app delivers 10 carefully curated words using interactive flashcards that include pronunciation, definitions, and tracking features to monitor learning progress. The platform emphasizes consistency over overload, using smart word scheduling to ensure learners receive fresh content daily while revisiting past words at spaced intervals. Its clean and responsive interface is powered by React.js and styled with modern CSS, ensuring a smooth experience across devices. Supabase is used as a secure and scalable backend for managing word data and user interaction logs. With pronunciation powered by the Web Speech API, learners can hear the correct way to say each word, reinforcing both auditory and visual memory.`,
      features: [
        "📅 Daily Word Feed – Automatically fetches 10 new words every 24 hours and ensures no repetition using Supabase and local cache logic.",
        "🃏 Interactive Flashcards – Flip cards with smooth CSS animations to reveal meanings, part of speech, and usage in context.",
        "🔊 Audio Pronunciations – Integrated Web Speech API to let users hear correct word pronunciations with a single click.",
        "📈 Progress Tracker – Visual tracker and percentage bar show how many words the user has learned each day.",
        "📖 Learning History – See a scrollable archive of all previously learned words and review them anytime.",
        "📱 Responsive Design – Optimized UI for all screen sizes with smooth mobile-first transitions.",
      ],
      techStack: [
        "React.js – for building the interactive UI and state-driven components",
        "Supabase – to store, manage, and fetch vocabulary data with secure queries",
        "Web Speech API – for pronunciation playback",
        "Modern CSS3 – for animations and responsive layouts",
        "HTML5 – for semantic structure and accessibility support"
      ],
      challenges: "One of the biggest challenges was ensuring that users received exactly 10 new words daily without repetition and handling state across sessions. Another hurdle was designing an architecture that supports offline usage with consistent behavior, even if the user skips a few days.",
      solutions: "To prevent word repetition, a client-side cache system using Local Storage was implemented, backed by a Supabase query that filters previously seen words. For offline functionality, local persistence of word data and user progress was added, ensuring that users could continue learning seamlessly. Animations and keyboard navigation were integrated to improve user engagement.",
      screenshots: [
        {
          url: "/images/vocab/vs1.png",
          caption: "Main Dashboard - Daily Word Feed"
        },
        {
          url: "/images/vocab/vs2.png",
          caption: "Interactive Flashcard View"
        },
        {
          url: "/images/vocab/vs3.png",
          caption: "Progress Tracking Interface"
        }
      ],
      githubLink: "https://github.com/maherakhan85/daily-vocabulary",
      liveDemo: "https://mahvocab.netlify.app/"
    },
    taskScheduler: {
      title: "Task Scheduler",
      description: "A comprehensive task management application that helps users organize their daily activities with smart scheduling and progress tracking features.",
      features: [
        "Task creation with priority levels",
        "Customizable notification system",
        "Weekly progress visualization",
        "Task categorization and filtering",
        "Deadline tracking and reminders"
      ],
      techStack: ["React.js", "Node.js", "MongoDB", "Express", "Chart.js"],
      challenges: "Implementing real-time updates and ensuring accurate task scheduling across different time zones.",
      solutions: "Utilized WebSocket for real-time updates and implemented moment.js for consistent time handling.",
      screenshots: [], // Add screenshot URLs later
      githubLink: "https://github.com/your-username/task-scheduler",
      
    },
    employerManager: {
      title: "Employer Manager",
      description: `The Employee Manager is a full-stack C# web application built using ASP.NET Core 8.0 and the MVC architecture, designed for secure user authentication and employee record management. It integrates ASP.NET Core Identity for handling user registration, login, password reset, and email verification, along with role-based access control for admin and user roles. The system includes full CRUD operations for employees, supports file uploads, and ensures strong security measures like CSRF protection, secure password hashing, and input validation. Built with Entity Framework Core 9.0 and SQL Server, it provides a scalable and maintainable backend, while Bootstrap 5 ensures a responsive and clean UI.`,
      features: [
        "User registration with email verification and confirmation workflow",
        "Secure login/logout functionality with account lockout on repeated failures",
        "Password reset via email, password change, and profile update",
        "Full CRUD operations for employee records with validation",
        "Employee file upload (documents, images) with storage and retrieval logic",
        "Role-based access control (admin/user separation) using ASP.NET Core Identity",
        "Responsive UI built with Bootstrap 5, including form validation and modal components"
      ],
      techStack: [
        "C# – as the primary programming language for backend logic and data processing",
        "ASP.NET Core 8.0 – for building scalable, high-performance APIs and MVC web interfaces",
        "Entity Framework Core 9.0 – to handle database operations with LINQ and migrations",
        "SQL Server – for storing user, role, and employee data securely and efficiently",
        "ASP.NET Core Identity – to manage authentication, authorization, and role-based access",
        "Bootstrap 5.3.3 – to design a modern, responsive, and mobile-friendly UI",
        "Visual Studio 2022 – as the integrated development environment for coding, debugging, and project management"
      ],
      challenges: "Ensuring secure and scalable user authentication while extending Identity features for custom role-based access and integrating dynamic employee operations within the same environment.",
      solutions: "Used ASP.NET Core Identity with customized user models and claims to handle registration, login, and authorization. Implemented Entity Framework Core migrations for database versioning and used view models for clean separation of concerns. Integrated secure file upload handling and added anti-forgery token validation for form submissions.",
      screenshots: [
        {
          url: "/images/emp/login.png",
          caption: "Login Page"
        },
        {
          url: "/images/emp/main.png",
          caption: "Main Page"
        },
        {
          url: "/images/emp/addEmployee.png",
          caption: "Add Employee Page"
        },
        {
          url: "/images/emp/empManager.png",
          caption: "Edit Employees Page"
        },
        {
          url: "/images/emp/empDetails.png",
          caption: "Employee Details Page"
        },
        {
          url: "/images/emp/empList.png",
          caption: "Employee List Page"
        }
      ], // Add actual URLs to screenshots here
      githubLink: "https://github.com/maherakhan85/FinalProject", // Replace with your actual GitHub repo
      
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-details">
        <div className="error-message">
          <h2>Project Not Found</h2>
          <p>Sorry, the project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleImageClick = (screenshot) => {
    setSelectedImage(screenshot);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      
      <section className="project-overview">
        <h2><FaLightbulb /> Overview</h2>
        <p>{project.description}</p>
      </section>

      <section className="project-features">
        <h2><FaPuzzlePiece /> Key Features</h2>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="technical-details">
        <h2><FaCode /> Technical Stack</h2>
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </section>

      <section className="implementation">
        <h2><FaTools /> Implementation Details</h2>
        <div className="implementation-grid">
          <div className="challenges">
            <h3>Challenges</h3>
            <p>{project.challenges}</p>
          </div>
          <div className="solutions">
            <h3>Solutions</h3>
            <p>{project.solutions}</p>
          </div>
        </div>
      </section>

      {project.screenshots.length > 0 && (
        <section className="project-screenshots">
          <h2><FaImage /> Screenshots</h2>
          <div className="screenshots-grid">
            {project.screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="screenshot-item"
                onClick={() => handleImageClick(screenshot)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleImageClick(screenshot)}
              >
                <img src={screenshot.url} alt={screenshot.caption} loading="lazy" />
                <p className="screenshot-caption">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {selectedImage && (
        <div 
          className="screenshot-modal active"
          onClick={handleCloseModal}
          role="dialog"
          aria-label="Image preview"
        >
          <img 
            src={selectedImage.url} 
            alt={selectedImage.caption} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="project-links">
        {project.githubLink && (
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn github-btn"
          >
            <FaGithub /> View on GitHub
          </a>
        )}
        {project.liveDemo && (
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn demo-btn"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails; 