import React from 'react';
import aotImg from "../../assets/institute_logo/aot.jpg";
import chaitanyaImg from "../../assets/institute_logo/chaitanya.jpg";
import mnrImg from "../../assets/institute_logo/mnr.png";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Business Systems",
    institution: "Academy Of Technology",
    year: "2022 - Present",
    description: "Specializing in software development, algorithms, and Business Strategies.",
    image: aotImg
  },
  {
    degree: "Higher Secondary Education",
    institution: "Sri Chaitanya Junior college",
    year: "2019 - 2021",
    description: "Specialized in Physics, Chemistry, and Mathematics and a logical, analytical mindset through challenging coursework and practical applications.",
    image: chaitanyaImg
  },
  {
    degree: "Secondary Education",
    institution: "The Indo English High School",
    year: "2015 - 2019",
    description: "Developed a strong grounding in fundamental subjects, along with essential study habits,  and teamwork skills.",
    image: mnrImg
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
        <div className="w-35 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 mb-8 text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo, tempora vel repudiandae delectus ipsam sed officia hic rem!
        </p>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex items-center bg-[#1a1a40] p-6 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-[0_5px_10px_rgba(130,69,236,0.5)] transition-transform hover:bg-gradient-to-r hover:from-[#2a2a5a] hover:to-[#1a1a40]"
            >
              <img
                src={edu.image}
                alt={edu.degree}
                className="w-20 h-20 object-cover rounded-lg mr-6 drop-shadow-[0_0px_0px_rgba(130,69,236,0.4)]"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-gray-100 font-semibold">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.year}</p>
                <p className="text-gray-300 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
