"use client"

import Button from "@/components/ui/button"
import { Linkedin, Twitter, Mail, Github } from 'lucide-react'
import Link from "next/link"
import { useState } from "react";
import Image from 'next/image';

export default function Component() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const handleCertificateClick = (certificate: string) => {
    setSelectedCertificate(certificate);
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText('segniassaye2@gmail.com');
    setNotification('Email Copied!');
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="w-full bg-black/50 backdrop-blur-lg border-b border-white/5">
        <div className="flex justify-between items-center w-full p-4">
          <Link href="/" className="text-xl font-cursive">My Resume</Link>
          <div className="flex space-x-8 flex-grow justify-center">
            <Link href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</Link>
            <Link href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</Link>
            <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="ml-auto">
            <Button className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transform transition-transform duration-300 ease-in-out hover:scale-105" onClick={handleEmailClick}>
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-30 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-1 leading-tight font-pacifico leading-relaxed">
            I’m Segni Assaye, and I’m here to make an impact.
            With a solid foundation in software engineering and a passion for problem solving, I bring a blend of creativity and technical expertise to every project.
          </h1>
          <p className="text-gray-400 mb-4 text-lg max-w-2xl font-pacifico leading-relaxed">
            I am dedicated to independently developing impactful projects that demonstrate my skills and commitment. Explore my journey to see how I can contribute to your team and help achieve your vision
          </p>
          <Button className="rounded-lg bg-white text-teal-500 font-semibold px-6 py-3 shadow-md hover:bg-gray-200 transform transition-transform duration-300 ease-in-out hover:scale-105" onClick={() => {
            const skillsElement = document.getElementById('skills');
            if (skillsElement) {
              skillsElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            GET STARTED
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#4ECCA3]" />
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["HTML", "CSS", "JavaScript", "React", "Responsive Web Design", "C++", "React Native", "Git Version Control", "Python", "Java"].map((skill) => (
                <div key={skill} className="bg-zinc-900/50 rounded-lg px-4 py-4 text-xl hover:bg-zinc-800 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#4ECCA3]" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            {[
              { role: "ALX", period: "2023 - 2024", image: "/ALX_Certificate.png" },
              { role: "FreeCodeCamp", period: "2023", image: "/Responsive_Web_Design.png" },
              { role: "FreeCodeCamp", period: "2023", image: "/Legacy_JavaScript_DSA.png" },
            ].map((item, index) => (
              <div key={`${item.role}-${index}`} className="flex flex-col justify-between border-b border-zinc-800 pb-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl">{item.role}</h3>
                  <span className="text-gray-400">{item.period}</span>
                </div>
                <button className="mt-2 bg-teal-500 text-white px-2 py-1 rounded whitespace-nowrap w-32" onClick={() => handleCertificateClick(item.image)}>Show Certificate</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Display */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <Image src={selectedCertificate} alt="Certificate" className="max-w-full h-auto" />
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => setSelectedCertificate(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Recent Projects */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 rounded-full bg-[#4ECCA3]" />
            <h2 className="text-3xl font-bold">Recent projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-sm text-gray-400">2024</div>
              <h3 className="text-2xl font-bold">Fitness Club</h3>
              <p className="text-gray-400">
                Fitness club is a web app that provides a platform for users to track their fitness progress.
              </p>
              <div className="bg-zinc-900/50 rounded-lg p-2">
                <Image
                  src="/Fitness_App.png"
                  alt="Fitness Club"
                  width={500}
                  height={300}
                  className="rounded-lg w-full"
                />
                <button className="mt-2 bg-teal-500 text-white px-4 py-2 rounded" onClick={() => window.open('https://fitness-app-puce.vercel.app/', '_blank')}>Check Website</button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-sm text-gray-400">2024</div>
              <h3 className="text-2xl font-bold">Community Forum</h3>
              <p className="text-gray-400">
                A community forum where users can post questions and answers.
              </p>
              <div className="bg-zinc-900/50 rounded-lg p-6">
                <Image
                  src="/Community_forum.png"
                  alt="Community Forum"
                  width={500}
                  height={300}
                  className="rounded-lg w-full"
                />
                <button className="mt-2 bg-teal-500 text-white px-4 py-2 rounded" onClick={() => window.open('https://community-forum-sand.vercel.app/', '_blank')}>Check Website</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 rounded-full bg-[#4ECCA3]" />
            <h2 className="text-3xl font-bold">About</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold">
                  I&apos;m Segni - a full stack software engineer crafting Digital experiences from Ethiopia
                </h3>
              </div>
            </div>
            <div className="space-y-6 text-gray-400">
              <p>
               Hey there! I&apos;m Segni Assaye, a full stack software engineer based in Addis Ababa, Ethiopia. With over 2 years of experience, I specialize in building dynamic websites that make a lasting impression. My expertise covers HTML, CSS, JavaScript, C++, and more, allowing me to bring your digital vision to life with precision and creativity.
              </p>
              <p>
               From sleek landing pages to powerful e-commerce platforms, I&apos;ve got you covered. I focus on exceeding your expectations and take the time to understand your goals to ensure the final product meets your needs. Let&apos;s work together and turn your ideas into captivating online experiences!              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 id="contact" className="text-4xl md:text-5xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I&apos;d love to hear from you! Let&apos;s collaborate and bring your ideas to life.
          </p>
          <Button className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transform transition-transform duration-300 ease-in-out hover:scale-105" onClick={handleEmailClick}>
              Let&apos;s Talk
            </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl italic mb-4 md:mb-0">Segni Assaye</div>
          <div className="flex space-x-6">
            <Link href="#" onClick={handleEmailClick} className="text-gray-400 hover:text-white">
              <Mail className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/segni-assaye-38055a283/" target="_blank" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com/Segni_koo?t=u3_hnfmWuYpViG91QaiFfA&s=09" target="_blank" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/Segniko" target="_blank" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>
        {notification && <div className="absolute top-4 right-4">{notification}</div>}
      </footer>
    </div>
  )
}
