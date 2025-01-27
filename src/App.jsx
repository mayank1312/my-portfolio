import React,{useState} from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './App.css'; // Custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from appending data to the URL

    // Send email via EmailJS
    emailjs
      .sendForm(
        'service_pa93bdj', // Replace with your EmailJS service ID
        'template_x1hvnz4', // Replace with your EmailJS template ID
        e.target, // Reference to the form
        'FKwykRRM3sKrNRs7V' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage('Message sent successfully!');
        },
        (error) => {
          console.error(error.text);
          setStatusMessage('Error sending message.');
        }
      );
    
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  return (
    <div className="container1">
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid" >
    <a class="navbar-brand" href="#">Mayank dhingra</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <main>
        <section id="about" className="section about-section py-4">
          <div className="aboutContent">
          <h1>Hi, I Am Mayank</h1>
          <h2>Web Developer</h2>
          <p>Welcome To My Web Corner.Skilled Full-Stack Developer with expertise in frontend technologies and proficiency in backend development using
modern frameworks and relational database management systems.Experienced in API integration and building responsive web applications, with a strong focus on performance, user
experience, and scalability.
</p><br/>
<a href="/MAYANK-DHINGRA-resume.pdf" download className="btn btn-primary">
    Download Resume
  </a>
          </div>
          <div className="about-img">
            <img className="myself" src="myself.jpg"></img>
          </div>
        </section>

        <section id="skills" className="skills-section mt-5">
  <h1 className="mb-4">Skills</h1>
  <div className="skills-grid">
    {[
      { name: "HTML", img: "html.png" },
      { name: "CSS", img: "css.png" },
      { name: "Bootstrap", img: "bootstrap.png" },
      { name: "JavaScript", img: "js.jpeg" },
      { name: "React", img: "react.png" },
      { name: "Node.js", img: "nodejs.jpeg" },
      { name: "Express.js", img: "expressjs.png" },
      { name: "MongoDB", img: "mongo.jpeg" },
      { name: "Git And Gitbash", img: "git.png" },
      { name: "SQL", img: "sql.png" },
    ].map((skill, index) => (
      <div key={index} className="skill-card">
        <img src={skill.img} alt={`${skill.name} logo`} className="skill-image" />
        <p>{skill.name}</p>
      </div>
    ))}
  </div>
</section>
<section id="projects" className="section projects-section mt-3 mb-3">
  
  <h1>Projects</h1>
  <div className="projects-grid section1">
  
    {/* Spotify Clone Project */}
    <div className="project-card samll-card">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Spotify Clone</h3>
        <p>
          A fully functional web application mimicking Spotify's core features. 
          Built using HTML, CSS, and JavaScript, it is fully responsive and 
          includes a music player with interactive playlists.
          <br/>
          Technologies Used:
          <br/>
         HTML: For the structure and layout of the web application.<br/>
         CSS: To create a modern, attractive, and fully responsive design.<br/>
         JavaScript: To enable interactivity and music player functionality.<br/>
        </p>
        <img className="projectImg" src="spotify.png"></img><br/><br/>
        <button className="btn btn-primary" onClick={() => window.open('https://github.com/mayank1312/spotify-clone2', '_blank')}>
          View Project
        </button>
      </motion.div>
    </div>

    {/* Add more projects below */}
    <div className="project-card small-card">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Recipe Fetching Web</h3>
        <p>A responsive web application built with HTML, CSS, and JavaScript.
           The app uses an external API to fetch and display recipes based on the user's search keyword. 
           Users can explore various recipes with detailed instructions and images.Users can enter ingredients or keywords into the search bar to find relevant recipes quickly.
           <br/>
           Technologies Used in Recipe App:
           <br/>

HTML & CSS : For structuring and styling the app layout and content. <br/>
JavaScript: For interactivity and API integration. <br/>
External Recipe API: To fetch recipe data dynamically based on user input. <br/>
           </p>
           <img className="projectImg" src="recipe.png"></img>
           <br/><br/>
        <button className="btn btn-primary"  onClick={() => window.open('https://github.com/mayank1312/recipe-WEbsite', '_blank')}>View Project</button>
      </motion.div>
    </div>
    <div className="project-card">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Clinic Website</h3>
        <p>Brief Description
          <br/>
The website aims to: <br/>

1.Showcase the clinic's expertise in holistic homeopathy. <br/>
2.Provide detailed information about treatments and services offered. <br/>
3.Allow visitors to get in touch with the clinic via a contact form. <br/>
4.Enhance the clinic’s credibility and visibility online. <br/>

Technologies Used<br/>
1.Frontend:<br/>

 HTML, CSS, JavaScript: For creating a responsive, user-friendly interface.<br/>
 Frontend Framework: A lightweight CSS framework or custom styling to ensure cross-browser compatibility and a clean layout.<br/>
2.Backend:<br/>

 Node.js with Express or Django/Flask: For managing server-side operations, routing, and handling contact form submissions.<br/>
3.Database:<br/>

 MongoDB or MySQL: To store information (like form submissions, testimonials, etc.).<br/>
4.Hosting:<br/>

 Render:For project Deployment
5.APIs:<br/>

 Optional integration of Google Maps API for embedding clinic location.<br/>
 </p>
<br/>
        <button className="btn btn-primary" onClick={() => window.open('https://github.com/Saksham1367/SSHH_Clinic', '_blank')}>View Project</button>
      </motion.div>
    </div>
  </div>
</section>

<section id="education" className="section education-section ">
<div class="left-panel">
      <img src="/cap.jpg" alt="Graduation Cap"></img>
      <h1>Education</h1>
    </div>
    <div class="right-panel">
      <h2>Currently Pursuing</h2>
      <p>B.Tech in Computer Science and Engineering (In CSE-DS)</p><br/>
      <h2>Completed</h2>
      <p>High School at Vidya Mndir Public School (Faridabad,Haryana,India)</p>
    </div>
</section>
        <section id="contact" className="section contacts-section">
        <div className="contact-section">
      {/* Contact Details */}
      <div className="contact-details">
        <h3>Contact Details</h3>
        <div className="detail">
          <img
            src="facebook.png"
            alt="Facebook"
          />
          <a
            href="https://www.facebook.com/profile.php?id=100074486330073"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="detail">
          <img
            src="linkedin.png"
            alt="LinkedIn"
          />
          <a
            href="https://www.linkedin.com/in/mayank-dhingra-9019b7234/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="detail">
          <img
            src="github.png"
            alt="GitHub"
          />
          <a
            href="https://github.com/mayank1312"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="detail">
          <img
            src="email.png"
            alt="Email"
          />
          <p>mayankdeepakdhingra@gmail.com</p>
        </div>
        <div className="detail">
          <img
            src="phone.png"
            alt="Phone Number"
          />
          <p>+91-9667918798</p>
        </div>
      
      </div>

      {/* Contact Form */}
      <div className="contact-form">
              <h3>Send me an Email</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Send Email</button>
              </form>
              {statusMessage && <p>{statusMessage}</p>}
            </div>
          </div>
        </section>
      </main>
      <a
    href="https://wa.me/919667918798"
    class="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
     aria-label="Chat on WhatsApp"
  >
    <img src="whatsapp.png" alt="WhatsApp"></img>
  </a>
    </div>
  );
};

export default Portfolio;
