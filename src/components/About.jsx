import About3D from './About3D';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <div id="about" className="relative">
            <div className="flex flex-col xl:flex-row items-center justify-between">
                {/* Left side - Text content */}
                <div className="w-full xl:w-1/2 flex items-center m-8 md:m-auto">
                    <div className="mx-1 md:mx-10 lg:mx-20 text-center lg:text-left w-full">
                        <h2 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Anshuman Kalathiya
                        </h2>
                        <p className="text-blue-600 dark:text-blue-400 text-xl lg:text-2xl font-bold mb-6">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'Software Developer',
                                    2000,
                                    'Web Developer',
                                    2000,
                                    'Data Analyst',
                                    2000,
                                    'Business Analyst',
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 max-w-2xl">
                            Welcome to my portfolio! I build robust web applications, craft elegant solutions, and love turning ideas into reality. Explore my work and let's connect!
                        </p>
                        <button 
                          onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              window.scrollTo({ top: contactSection.offsetTop - 80, behavior: 'smooth' });
                            }
                          }}
                          className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Right side - 3D Effect (responsive) */}
                <div className="w-full xl:w-1/2 flex items-center justify-center">
                    <About3D />
                </div>
            </div>
        </div>
    )
};

export default About;