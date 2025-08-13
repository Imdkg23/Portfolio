import React from 'react';
import bgChanger from '../../assets/projects/bgChanger.png';
import pass from '../../assets/projects/pass.png';


const Work = () => {
  const projects = [
    {
      title: "Simple Background Color Changer",
      description: "A basic Reactjs project where background color is chaned.",
      image: bgChanger, 
      liveLink: "https://bg-changer-mocha.vercel.app/",
      github: "https://github.com/Imdkg23/BgChanger",
    },
    {
      title: "Random Password Generator",
      description: "Random password is generated as per the needs of the user.",
      image: pass,
      liveLink: "https://react-password-generator-olive-theta.vercel.app/",
      github: "https://github.com/Imdkg23/React-Password-Generator",
    },
  ];

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        <div className="w-30 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my work — highlighting my skills, creativity, and dedication.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a40] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-[0_5px_10px_rgba(130,69,236,0.5)] "

            // className="bg-[#1a1a40] rounded-2xl overflow-hidden shadow-lg transition duration-300 hover:shadow-[0_0_20px_4px_rgba(130,69,236,0.6),0_0_40px_8px_rgba(255,0,150,0.4)]"

          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#8245ec] text-white rounded-lg hover:bg-[#6d2fe0] transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#8245ec] text-[#8245ec] rounded-lg hover:bg-[#8245ec] hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
