import { techStackIcons } from "../assets/techStackIcons/techStackIcons";

const TechStack = () => {
    return (
        <section className="mt-4 w-[90%] md:w-[60%] bg-bg rounded-2xl mx-auto">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold">What I work with</h1>
                <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-10 gap-5 mt-8">
                    {techStackIcons.map((tech, index) => (
                        <div
                            key={index}
                            className="relative group flex flex-col items-center justify-center grayscale hover:grayscale-0"
                        >
                            {/* Deliberately eager: this grid sits in the
                                first viewport, where lazy loading delays
                                paint and leaves blank slots whenever the
                                heuristic does not fire. */}
                            <img
                                src={tech.img}
                                alt={tech.alt}
                                width="48"
                                height="48"
                                decoding="async"
                                className={`w-12 h-12 ${tech.invertOnDark ? "dark:invert" : ""}`}
                            />
                            {/* Was positioned with top/left but no `absolute`,
                                so it sat in flow and shoved the icon on hover
                                instead of floating below it. */}
                            <p className="pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 text-xs text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none">
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
