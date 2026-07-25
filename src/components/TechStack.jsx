import { techStackIcons } from "../assets/techStackIcons/techStackIcons";

const TechStack = () => {
    return (
        <section className="mt-4 w-[90%] md:w-[60%] bg-bg rounded-2xl content-fit mx-auto">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold">What I work with</h1>
                <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-10 gap-5 mt-8">
                    {techStackIcons.map((tech, index) => (
                        <div
                            key={index}
                            className="relative group flex flex-col items-center justify-center grayscale hover:grayscale-0"
                        >
                            <img
                                src={tech.img}
                                alt={tech.alt}
                                className={`w-12 h-12 ${tech.invertOnDark ? "dark:invert" : ""}`}
                                loading="lazy"
                                decoding="async"
                            />
                            <p className="text-sm text-secondary opacity-0 top-0 left-1/2 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-200 text-center">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
