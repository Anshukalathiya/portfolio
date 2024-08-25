import Developer from '../pics/Developer.png';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <div id="about" class="flex flex-row pb-10">
            <div class="lg:basis-1/2 lg:flex md:items-center m-8 md:m-auto">
                <div class="uppercase text-lg md:text-xl lg:text-3xl mx-1 md:mx-10 lg:mx-20 font-bold">
                    <p class="pb-8 text-black dark:text-white">
                        Hello<span className="animate-wave md:text-5xl">  👋,</span> <br />  
                    </p>
                    <h2 class="text-black dark:text-white">I am Anshuman</h2><br />
                    <p class="text-orange-500">
                        <TypeAnimation
                            sequence={[
                                'a Full Stack Developer !',
                                2000,
                                'a Software Developer !',
                                2000,
                                'a Web Developer !',
                                2000,
                                'a Data Analyst !',
                                2000,
                                'a Business Analyst !',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </p>
                </div>
            </div>

            <div class="hidden lg:block lg:basis-1/2">
                <img src={Developer} class="hidden lg:block max-h-screen m-auto rounded-l-3xl" alt="Developer" />
            </div>

        </div>
    )
};

export default About;