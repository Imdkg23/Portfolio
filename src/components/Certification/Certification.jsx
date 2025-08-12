import React from "react";
import salesforce from '../../assets/certificates/salesforce.jpg'
import ibm from '../../assets/certificates/ibm.jpeg'
import python from '../../assets/certificates/python.jpg'



const Certification = () => {
  
  const certificates = [
    {
      title: "Salesforce Developer with Agentblazer Champion Program",
      issuer: "Salesforce",
      date: "Aug 2025",
      image: salesforce, 
      link: "https://drive.google.com/file/d/16YV6VGw2iWctRAM-GF0CS-fXkRtWQnoc/view?usp=sharing", 
    },
    {
      title: "Frontend Web Development Internship",
      issuer: "IBM Skillsbuild (CSRBOX)",
      date: "Aug 2024",
      image: ibm,
      link: "https://drive.google.com/file/d/1S2tYpELaN7yNxjShWvkh48lLNaX1jQFn/view?usp=sharing",
    },
    {
      title: "Python Fundamentals",
      issuer: "University of Michigan",
      date: "Jul 2023",
      image: python,
      link: "https://drive.google.com/file/d/1Osmgs1VMFLaEqA9aY2OVzEs09jWx8gxh/view?usp=sharing",
    },
  ];

  return (
    <section
      id="certification"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          My Certifications
        </h2>
        <div className="w-70 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my achievements, skills, and knowledge validated by
          industry-recognized certifications.
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#1a1a40] bg-opacity-50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r hover:from-[#2a2a5a] hover:to-[#1a1a40] hover:shadow-[0_5px_10px_rgba(130,69,236,0.5)] "
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              <p className="text-[#8245ec] mt-1">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-[#8245ec] text-white rounded-lg hover:bg-[#6f36c9] transition-colors"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
