import React, { useEffect, useRef } from 'react';

function About() {
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
        <div ref={componentRef} className="reveal">
            <div className='w-full pt-54 scroll-mt-16 bg-gray-700'>
                <div className='flex flex-col items-center justify-center py-16'>
                    <h2 className='text-3xl font-bold mb-8'>About Me</h2>
                    <p className='text-gray-300 max-w-2xl text-center'>
                        I'm a passionate software engineer with a strong foundation in web development and a keen interest in building scalable applications. I enjoy solving complex problems and continuously learning new technologies to enhance my skills.
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center py-16'>
                    <h2 className='text-3xl font-bold mb-8'>Education</h2>
                    <p className='text-gray-300 max-w-2xl text-center'>
                        I recently graduated from secondary school with an O-Level certificate, where I gained a minor understanding of software engineering principles and practices. I am eager to further my education and continue learning in the field of software engineering.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;