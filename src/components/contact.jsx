import React, { useRef, useEffect } from 'react';
import { FaGithub, FaGoogle, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Contact() {
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
        <section id="contact" className="py-16 bg-gray-800 reveal" ref={componentRef}>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
                <p className="text-lg text-gray-300 mb-6">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <a href="mailto:astrolix278@gmail" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full">
                    Email Me
                </a>
                <div className="mt-6 flex justify-center">
                    <a href="https://wa.me/message/BDINHWPQFLAGO1" className="text-gray-400 hover:text-gray-300 mr-4">
                        <FaWhatsapp size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/tobechukwu-ejiofor-493925316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-gray-300 mr-4">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://g.dev/astrolix278" className="text-gray-400 hover:text-gray-300 mr-4">
                        <FaGoogle size={32} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;