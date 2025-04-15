import React, { useRef, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
    {
        title: 'API for an E-commerce web app',
        description: 'Developed a robust and scalable RESTful API using Expressjs and mongoDB.',
        techStack: ['Node.js', 'Express', 'PostgreSQL'],
        link: '#', // Add your project link
    },
    {
        title: 'Authentication Service',
        description: 'Built a secure authentication and authorization service with JWT.',
        techStack: ['Python', 'Flask', 'JWT'],
        link: '#',
    },
    // Add more projects here
];

function Projects() {
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
        <section id="projects" className="py-16 bg-gray-800 pl-2 reveal" ref={componentRef}>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div key={index} className="bg-gray-700 hover:bg-gray-900 rounded-lg p-6 shadow-md cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="bg-gray-800 text-gray-200 py-1 px-2 rounded-full text-sm">{tech}</span>
                                ))}
                            </div>
                            <a href={project.link} className="text-indigo-400 hover:text-indigo-500">Learn More</a>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <a href="https://github.com/TobeChukwu278" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-900 text-gray-300 rounded-full p-3 inline-flex items-center">
                        <FaGithub size={24} className="mr-2" />
                        View All My Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;