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
      src="/portfolioimg.png"
      alt="Monika Maturi"
      className="w-64 h-64 rounded-full border-4 border-lime-400 object-cover shadow-lg"
    />
    <p className="text-lg text-gray-300 leading-relaxed text-justify">
     I’m Monika Maturi, a Full-Stack Developer with expertise in building scalable web applications and intelligent AI-powered systems. 
      I develop modern frontend interfaces using React.js and robust backend services with Java (Spring Boot), Node.js, and Flask. 
      I am proficient in integrating REST and SOAP APIs, optimizing database performance, and implementing secure, modular architectures. 
      My skills extend to applying NLP and deep learning techniques using LangChain, HuggingFace, and PyTorch to create real-time, context-aware applications. 
      I am passionate about solving real-world problems with clean code, modern tools, and data-driven development, constantly striving to deliver meaningful impact through technology.
    </p>
  </div>
</section>


      <section id="experience" className="p-10 md:p-20 bg-gray-800">
  <h2 className="text-4xl font-bold mb-10 text-lime-300 text-center">Experience</h2>
  <div className="max-w-5xl mx-auto space-y-10">

    {/* Texas Tech University */}
   
    {/* Agile Solutions */}
   <div>
  <h3 className="text-xl font-semibold text-white">Integration Developer – Hunt Consolidated</h3>
  <p className="text-gray-400 text-sm">Feb 2025 – Present</p>
  <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
    <li>Designed and deployed Java/Spring Boot integrations enabling secure data exchange across internal and external systems.</li>
    <li>Built ETL workflows and automated SQL-based data pipelines processing 50K+ daily records with improved accuracy and reliability.</li>
    <li>Implemented file-based integration workflows (CSV/XML/JSON) with validation and error-handling to reduce failures by 45%.</li>
    <li>Created internal JavaScript tools for data validation and operational monitoring, enhancing workflow visibility.</li>
    <li>Collaborated with cloud and architecture teams to align integrations with AWS-driven data transfer practices.</li>
    <li>Maintained integration documentation using Git, Jira, and Confluence, improving team onboarding and code traceability.</li>
  </ul>
</div>
<div>
  <h3 className="text-xl font-semibold text-white">Java Integration Engineer – Caterpillar</h3>
  <p className="text-gray-400 text-sm">Jul 2024 – Jan 2025</p>
  <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
    <li>Developed and supported REST API integrations connecting telematics, asset tracking, and enterprise systems.</li>
    <li>Engineered SQL-driven ETL pipelines for ingesting 100K+ operational records daily, improving processing latency.</li>
    <li>Optimized SQL queries and indexing strategies to significantly reduce batch-processing windows.</li>
    <li>Built backend modules and API endpoints powering internal React/JavaScript dashboards for operations teams.</li>
    <li>Implemented secure file-transfer and API workflows with encryption, validation, and retry logic.</li>
    <li>Documented integration mappings and deployment workflows through Git, Jira, and Confluence.</li>
  </ul>
</div>
  <div>
  <h3 className="text-xl font-semibold text-white">Integration Engineer – Agile Solutions / Barclays</h3>
  <p className="text-gray-400 text-sm">May 2021 – Apr 2023</p>
  <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
    <li>Developed Java and SQL-based integrations supporting regulatory, AML, and enterprise data workflows.</li>
    <li>Designed ETL pipelines for large-volume batch processing and data transformation across distributed systems.</li>
    <li>Automated file feed generation, validation, and scheduled transfers to downstream banking applications.</li>
    <li>Optimized stored procedures, complex SQL joins, and mapping logic to enhance processing speed.</li>
    <li>Troubleshot production integration issues using structured logging and API analysis, improving system stability.</li>
    <li>Collaborated with cross-functional teams using Git, Jira, and Confluence to streamline SDLC and release cycles.</li>
  </ul>
</div>
<div>
  <h3 className="text-xl font-semibold text-white">Software Engineer – Integrations – Meesho</h3>
  <p className="text-gray-400 text-sm">Mar 2020 – Apr 2021</p>
  <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
    <li>Implemented Java-based API integrations connecting order, inventory, and logistics systems with real-time accuracy.</li>
    <li>Developed ETL-style ingestion workflows to process high-volume seller and catalog data across platforms.</li>
    <li>Integrated logistics APIs using authentication, payload validation, and retry mechanisms for reliability.</li>
    <li>Built JavaScript-powered internal dashboards for monitoring data flows and resolving mismatches.</li>
    <li>Optimized SQL queries for reconciliation operations, improving data consistency and reducing verification time.</li>
    <li>Authored integration diagrams, API schemas, and mapping references for documentation across teams.</li>
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
