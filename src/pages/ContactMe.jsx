import { MapPinHouse, Linkedin, Github, Mail } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const ContactMe = () => {
    return (
        <div className="px-4 container w-[60%] mx-auto flex flex-col gap-8 mt-24">
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

export default ContactMe;