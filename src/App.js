import React from "react";

const skills = [
  "React.js", "Node.js", "Python", 
  "SQL", "MySQL", , "SAP HANA",
  "REST APIs", "SOAP APIs", "LangChain", "HuggingFace",
  "Pinecone", "Docker", "CI/CD"
];

export default function App() {
  return (
    <main className="scroll-smooth font-sans bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <header className="p-6 flex justify-between items-center bg-black bg-opacity-60 backdrop-blur sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-lime-400">Monika Maturi</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-lime-300">About</a>
          <a href="#experience" className="hover:text-lime-300">Experience</a>
          <a href="#skills" className="hover:text-lime-300">Skills</a>
          <a href="#projects" className="hover:text-lime-300">Projects</a>
          <a href="#contact" className="hover:text-lime-300">Contact</a>
        </nav>
      </header>

      {/* About Me Section with Image */}
    <section id="about" className="p-10 md:p-20 text-center md:text-left">
  <h2 className="text-4xl font-bold text-white mb-10 text-center">About Me</h2>
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    <img
      src="/1.jpg"
      alt="Monika Maturi"
      className="w-64 h-64 rounded-full border-4 border-lime-400 object-cover shadow-lg"
    />
    <p className="text-lg text-gray-300 leading-relaxed text-justify">
      I’m Monika Maturi, a Full-Stack Developer skilled in building scalable web applications and intelligent AI-powered systems.
      Experienced in developing modern frontend interfaces using React.js and robust backend services with Node.js, Flask, and SAP HANA.
      Proficient in integrating REST and SOAP APIs, optimizing database performance, and implementing secure, modular architectures.
      Adept in applying NLP and deep learning techniques using LangChain, HuggingFace, and PyTorch to create real-time, context-aware
      applications. Passionate about solving real-world problems with clean code, modern tools, and data-driven development.
    </p>
  </div>
</section>


      <section id="experience" className="p-10 md:p-20 bg-gray-800">
  <h2 className="text-4xl font-bold mb-10 text-lime-300 text-center">Experience</h2>
  <div className="max-w-5xl mx-auto space-y-10">

    {/* Texas Tech University */}
    <div>
      <h3 className="text-xl font-semibold text-white">Developer – IT Analytics Center, Texas Tech University</h3>
      <p className="text-gray-400 text-sm">Dec 2024 – May 2025</p>
      <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
        <li>Built and maintained React.js and Node.js-based web applications for analytics and data tracking tools.</li>
        <li>Wrote modular, maintainable code to improve performance and reduce technical debt.</li>
        <li>Supported testing and debugging efforts to ensure robust functionality across user-facing features.</li>
        <li>Contributed to Git-based workflows and deployment best practices.</li>
        <li>Collaborated with student developers and project leads to deliver feature enhancements on schedule.</li>
      </ul>
    </div>

    {/* Agile Solutions */}
    <div>
      <h3 className="text-xl font-semibold text-white">Software Developer – Agile Solutions</h3>
      <p className="text-gray-400 text-sm">May 2021 – May 2023</p>
      <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
        <li>Developed and optimized SAP HANA backend solutions integrating REST and SOAP web services for reliable enterprise data exchange.</li>
        <li>Spearheaded XS Classic to XS Advanced (XSA) migration, reducing deployment complexity by 30% and decreasing maintenance by 25%.</li>
        <li>Improved query execution speed by 40% through SQL optimization, Calculation Views, and stored procedures.</li>
        <li>Created responsive UIs using React.js, HTML5, and internal dashboard components with jQuery and AJAX.</li>
        <li>Built and tested secure SOAP-based web services and automated workflows using Postman.</li>
        <li>Resolved critical system bugs, enhancing application stability and performance under Agile development using JIRA.</li>
        <li>Managed GitHub version control, contributing to release planning and cross-functional collaboration.</li>
      </ul>
    </div>

  </div>
</section>


      {/* <section id="skills" className="p-10 md:p-20">
        <h2 className="text-4xl font-bold mb-6 text-lime-300">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm bg-lime-500 text-black rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-lime-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </section> */}
     <section id="skills" className="p-10 md:p-20 bg-gray-800 text-white">
  <h2 className="text-4xl font-bold mb-12 text-lime-300 text-center">Skills</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

    {/* Skill Cards */}
    {[
      {
        title: "Frontend",
        skills: ["React.js", "HTML", "CSS", "JavaScript"],
      },
      {
        title: "Backend & APIs",
        skills: ["Node.js", "Flask", "REST APIs", "SOAP APIs"],
      },
      {
        title: "AI / ML Tools",
        skills: ["LangChain", "HuggingFace", "Pinecone", "PyTorch", "TorchXLA", "Scikit-learn"],
      },
      {
        title: "Databases",
        skills: ["SQL", "MySQL", "SAP HANA"],
      },
      {
        title: "DevOps & Tools",
        skills: ["Git", "Postman", "Docker", "CI/CD", "JIRA"],
      },
    ].map((category, idx) => (
      <div
        key={idx}
        className="bg-gray-900 rounded-2xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-lime-400 hover:ring-1 hover:ring-lime-400"
      >
        <h3 className="text-2xl font-semibold text-lime-300 mb-3">{category.title}</h3>
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-lime-500 text-black px-4 py-1.5 rounded-full text-sm font-medium shadow transition transform hover:scale-105 hover:bg-lime-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}

  </div>
</section>




   

<section id="projects" className="p-10 md:p-20 bg-gray-800">
  <h2 className="text-4xl font-bold mb-10 text-lime-300 text-center">Projects</h2>
  <div className="space-y-12 max-w-6xl mx-auto">

    {[{
      title: "SkillMatch AI – Resume Analyzer",
      description: "Full-stack web app to match resume content with job descriptions using NLP techniques.",
      bullets: [
        "Flask microservice to extract and tokenize PDF resume content",
        "React frontend for score visualization",
        "Node.js backend for API orchestration"
      ],
      image: "/p1.jpg",
      github: "https://github.com/maturimonika/Resume_Analyzer.git"
    },
    {
      title: "On-Demand Professor Q&A Bot",
      description: "Local LLM chatbot built using LangChain and FAISS to answer questions from custom academic content.",
      bullets: [
        "RAG pipeline with LangChain + HuggingFace Transformers",
        "FAISS-powered semantic search on local documents",
        "Privacy-first design with offline inference"
      ],
      image: "/p2.jpeg",
      github: "https://github.com/maturimonika/-OnDemand-Professor-Q-A-Bot-.git"
    },
    {
      title: "Friendly-Noise Defense Against Data Poisoning",
      description: "Deep learning robustness project to defend against poisoned data inputs using PyTorch.",
      bullets: [
        "Trained CNNs using TorchXLA on Google TPUs",
        "Designed friendly-noise injection technique",
        "Compared clean vs poisoned performance graphs"
      ],
      image: "/p3.jpg",
      github: "https://github.com/yourusername/robust-ml-defense"
    }].map((project, idx) => (

      <div
        key={idx}
        className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-6 bg-gray-900 p-6 rounded-2xl shadow-lg"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:w-80 h-52 object-cover rounded-xl shadow-md"
        />

        <div
          className="flex flex-col justify-center space-y-3 text-left"
          style={(idx === 0 || idx === 2) ? { paddingRight: "100px" } : {}}
        >
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
          <ul className="list-disc pl-5 text-gray-400 space-y-1">
            {project.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <a
            href={project.github}
            className="text-lime-400 underline hover:text-lime-300"
          >
            View on GitHub
          </a>
        </div>
      </div>

    ))}
  </div>
</section>






      <section id="contact" className="p-10 md:p-20 text-center">
        <h2 className="text-4xl font-bold mb-4 text-lime-300">Contact Me</h2>
        <p className="text-gray-300">I'm actively seeking Full-Stack Developer roles in the U.S. — let’s connect!</p>
        <p className="mt-2">📧 <a className="underline text-lime-400" href="mailto:maturimonika93@gmail.com">maturimonika93@gmail.com</a></p>
        <p>🔗 <a href="https://www.linkedin.com/in/maturi-monika" className="underline text-lime-400">LinkedIn</a></p>
      </section>
    </main>
  );
}
