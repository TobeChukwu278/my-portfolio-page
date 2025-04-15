import React, { useRef, useEffect } from 'react';

const skillsData = {
    languages: ['JavaScript', 'Python'],
    frameworks: ['Node.js', 'Express', 'React'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
    tools: ['Docker', 'AWS', 'Git'],
};

function Skills() {
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const currentRef = componentRef.current;
                        if (currentRef) {
                            currentRef.classList.add('active');
                            observer.unobserve(currentRef);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentRef = componentRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section id="skills" className="py-16 bg-gray-700 reveal" ref={componentRef}>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Languages</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {skillsData.languages.map((skill, index) => (
                                <span key={index} className="bg-indigo-500 text-white py-2 px-4 rounded-full">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {skillsData.frameworks.map((skill, index) => (
                                <span key={index} className="bg-green-500 text-white py-2 px-4 rounded-full">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Databases</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {skillsData.databases.map((skill, index) => (
                                <span key={index} className="bg-blue-500 text-white py-2 px-4 rounded-full">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {skillsData.tools.map((skill, index) => (
                                <span key={index} className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-full">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;