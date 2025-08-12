import React from 'react';
import cLogo from '../../assets/tech_logo/c.png';
import cppLogo from '../../assets/tech_logo/cpp.png';
import cssLogo from '../../assets/tech_logo/css.jpg';
import figmaLogo from '../../assets/tech_logo/figma.png';
import gitLogo from '../../assets/tech_logo/git.png';
import githubLogo from '../../assets/tech_logo/github.jpg';
import htmlLogo from '../../assets/tech_logo/html.jpg';
import javaLogo from '../../assets/tech_logo/java.png';
import jsLogo from '../../assets/tech_logo/javascript.png';
import mysqlLogo from '../../assets/tech_logo/mysql.png';
import pythonLogo from '../../assets/tech_logo/python.png';
import reactLogo from '../../assets/tech_logo/reactjs.png';
import tailwindLogo from '../../assets/tech_logo/tailwindcss.png';
import vercelLogo from '../../assets/tech_logo/versel.png';
import vscodeLogo from '../../assets/tech_logo/vscode.jpg';



const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: [
        { name: "C", logo: cLogo },         
        { name: "C++", logo: cppLogo },   
        { name: "Java", logo: javaLogo }, 
        { name: "Python", logo: pythonLogo }, 
        { name: "JavaScript", logo: jsLogo }, 
      ],
    },
    {
      category: "Development",
      skills: [
        { name: "HTML", logo: htmlLogo  },       
        { name: "CSS", logo: cssLogo },         
        { name: "JavaScript", logo: jsLogo }, 
        { name: "React", logo: reactLogo },     
      ],
    },
    // {
    //   category: "Backend",
    //   skills: [
    //     { name: "Node.js", logo: "/assets/node.png" },     
    //     { name: "Express", logo: "/assets/express.png" }, 
    //     { name: "MongoDB", logo: "/assets/mongo.png" },   
    //   ],
    // },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", logo: gitLogo },         
        { name: "GitHub", logo: githubLogo },   
        { name: "VS Code", logo: vscodeLogo }, 
        { name: "Vercel", logo: vercelLogo }, 
      ],
    },
    
  ];

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various projects and experiences.
        </p>
      </div>

      {/* Skills grid */}

      
      <div className="flex flex-wrap gap-5 justify-center w-full h-full rounded-full object-cover  ">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="bg-[#1a1a40] px-6 py-6 rounded-2xl border border-white/10 shadow-lg w-full sm:w-[45%] lg:w-[30%] hover:shadow-[0_5px_10px_rgba(130,69,236,0.5)] hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold text-gray-300 mb-4 text-center">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3  ">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-3 border border-gray-700 rounded-xl hover:scale-120 transition-transform "
                >
                  <img
                    src={skill.logo} 
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 mb-2 rounded-xl"
                  />
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
