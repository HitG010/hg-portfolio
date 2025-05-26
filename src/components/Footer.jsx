import { Mail, ArrowUpRight } from "lucide-react";
import kbLogo from "../assets/kbLogo.png";

const Footer = () => {
    return (
        <footer className="mt-12 flex flex-col items-center px-4 md:px-8">
            {/* get in touch section */}
            <div className="relative group bg-bgDark text-white mt-4 w-full md:w-[70%] p-4 md:p-8">
                <div className="flex flex-col gap-4">
                    <p className="text-textSecondary">I'm currently looking for new opportunities, my inbox is always open. Got something to say?</p>
                </div>
                <div className="mt-4 flex flex-row justify-between items-center">
                    <h2 className="text-xl md:text-4xl font-bold">Let's Get in Touch</h2>
                    <div className="relative group flex gap-2 text-lg text-textPrimary items-center cursor-pointer" onClick={()=>{
                        window.location.href="/contact";
                    }}>Say Hi 👋 <ArrowUpRight/>
                        <span
                            className="absolute inline-block h-[2px] left-0 bottom-0 w-0 bg-textPrimary transition-all duration-300 group-hover:w-full"
                        ></span>
                    </div>
                </div>
                <span
                    className="absolute inline-block h-[2px] left-0 bottom-0 w-full bg-textSecondary/20 transition-all duration-300"
                ></span>
            </div>
            <div className="flex justify-center items-center mt-6">
                <img src={kbLogo} alt="logo" className="h-16 w-16 md:h-20 md:w-20 object-contain"></img>
            </div>
            {/* check the device and plan the footer accordingly */ }
            {(window.innerWidth > 768) ? (
                <div className="flex flex-row justify-center text-4xl md:text-9xl font-bold w-full translate-y-2 h-20 overflow-hidden overflow-x-hidden gap-12 md:gap-4 -tracking-[0.02em]">
                    <div>KARTIK</div>
                    <div className="flex flex-col justify-center items-center text-textSecondary text-xs  mt-8 mb-4 tracking-[0em] font-light w-full">
                        <p className="text-nowrap">Built with ♡ | © {new Date().getFullYear()} Kartik Bindra </p>
                        <p className="text-nowrap">Find more of my projects on <a href="https://www.github.com/kartikbindra" className="text-textPrimary">Github</a></p>
                    </div>
                    <div>BINDRA</div>
                </div>
            ) : (
                <div>
                    <div className="flex flex-col justify-center items-center text-textSecondary text-xs  mt-2 mb-4 tracking-[0em] font-light w-full">
                        <p className="text-nowrap">Built with ♡ | © {new Date().getFullYear()} Kartik Bindra </p>
                        <p className="text-nowrap">Find more of my projects on <a href="https://www.github.com/kartikbindra" className="text-textPrimary">Github</a></p>
                    </div>
                <div className="flex justify-center text-6xl md:text-9xl font-bold w-full translate-y-1 h-10 overflow-hidden gap-6 -tracking-[0.02em]">
                    <div>KARTIK</div>
                    <div>BINDRA</div>
                </div>
                </div>
            )}
        </footer>
    );
}

export default Footer;
