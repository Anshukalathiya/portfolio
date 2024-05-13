import Developer from '../pics/Developer.png';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <div id="about" class="flex flex-row mb-20">
            <div class="lg:basis-1/2 lg:flex md:items-center m-8 md:m-auto">
                <div class="uppercase text-lg md:text-xl lg:text-3xl mx-1 md:mx-10 lg:mx-20 font-bold">
                    <p class="pb-8">
                        Hello<span className="animate-wave md:text-5xl">  👋,</span> <br />  
                    </p>
                    <h2 class="">I am Anshuman</h2><br />
                    <p class="text-orange-500">
                        <TypeAnimation
                            sequence={[
                                'a full stack developer !',
                                2000,
                                'a software developer !',
                                2000,
                                'a web developer !',
                                2000,
                                'an application supporter !',
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