import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const contactData = [
  {
    icon: <Mail className="text-[#8245ec]" size={28} />,
    title: "Email",
    value: "dkg2153@gmail.com",
    link: "dkg2153@gmail.com",
  },
  {
    icon: <Phone className="text-[#8245ec]" size={28} />,
    title: "Phone",
    value: "+91 79958 54330",
    link: "tel:+917995854330",
  },
  {
    icon: <Linkedin className="text-[#8245ec]" size={28} />,
    title: "LinkedIn",
    value: "linkedin.com/in/deepghosh",
    link: "https://www.linkedin.com/in/deep-kumar-ghosh-3a002a265/",
  },
  {
    icon: <Github className="text-[#8245ec]" size={28} />,
    title: "GitHub",
    value: "github.com/Imdkg23",
    link: "https://github.com/Imdkg23",
  },
];

const Contact = () => {
  return (
    <section
      id="contacts"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Me</h2>
        <div className="w-42 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Get in touch for collaborations, opportunities, or just to say hello.
        </p>
      </div>

      {/* Contact catalog */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {contactData.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-[#1a1a40] rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(130,69,236,0.5)] transition-all"
          >
            {contact.icon}
            <div>
              <h3 className="text-lg font-semibold text-white">{contact.title}</h3>
              <p className="text-gray-400">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
