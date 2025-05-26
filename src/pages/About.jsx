import React from 'react';
import SkillSet from '../components/SkillProgress';
import { MapPinHouse, Linkedin, Github, Mail } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const About = () => {
    return (
        <div className="px-4 container mx-auto flex flex-col gap-8 mt-24 w-full md:w-[80%] lg:w-[60%]">
            <h1 className="text-4xl font-semibold">About Me</h1>
            <p className="text-lg sm:text-base md:text-lg">I'm a dedicated software engineer skilled in Full-Stack development, Blockchain development, and UI/UX Design, focused on building impactful and scalable solutions. I thrive in dynamic environments where I can apply my skills in coding, problem-solving, and design to build impactful projects.</p>

            <p className="text-lg sm:text-base md:text-lg">I take a user-centric approach to design and development, ensuring that all my projects are intuitive, performant, and scalable. Whether I’m building a full-stack web application or working on integrating blockchain into a product, my goal is always to create solutions that are not only functional but also enhance user experience. In addition to development, I have experience in UI/UX design, having worked on user flows, wireframes, and designing engaging interfaces. This enables me to deliver end-to-end solutions that meet both technical and aesthetic requirements.</p>

            <p className="text-2xl font-semibold">My Philosophy</p>
            <p className="text-lg sm:text-base md:text-lg">I believe in the power of continuous learning and am always exploring new technologies, tools, and frameworks to stay ahead of the curve. My problem-solving approach is data-driven, and I focus on using the right tool for the job to ensure efficiency, scalability, and sustainability in the solutions I create.</p>

            <p className="text-lg sm:text-base md:text-lg">As I continue to grow professionally, I’m eager to collaborate on projects that challenge me and push the boundaries of what technology can achieve. I’m also actively looking for opportunities to expand my knowledge in AI, blockchain, and other emerging fields. When I’m not coding, I enjoy reading about tech innovations, participating in hackathons, and mentoring aspiring developers.</p>

            <p className="text-lg sm:text-base md:text-lg">Feel free to reach out to me for collaborations, freelance work, or just to chat about tech! I’d love to connect.</p>

            <SkillSet />

            <h1 className="text-2xl font-semibold mt-8">Contact Details</h1>
            <div className="flex gap-4 flex-wrap">
                <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
                    <Mail
                        className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
                        onClick={() => {
                            window.open("mailto:bindrakartik64@gmail.com");
                        }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
                    <Linkedin
                        className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/kartik-bindra/");
                        }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
                    <Github
                        className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
                        onClick={() => {
                            window.open("https://www.github.com/kartikbindra");
                        }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
                    <RiTwitterXLine
                        className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
                        onClick={() => {
                            window.open("https://x.com/KartikB68116");
                        }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
                    <AiOutlineDiscord
                        className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
                        onClick={() => {
                            window.open("https://discordapp.com/users/758925535807143946");
                        }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
                    <FaTelegram
                        className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
                        onClick={() => {
                            window.open("https://t.me/bindrakartik");
                        }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
                </div>
            </div>
        </div>
    );
}

export default About;
