import ExperienceCard from './cards/experiencecard';
import { FaChalkboardTeacher, FaLaptopCode, FaCode } from "react-icons/fa";

const Experience = () => {
    return (
        <div id="experience" className='my-20'>
            <div class="group transition-all duration-300 ease-in-out">
                <h4 class="text-3xl pb-2 uppercase font-medium text-center bg-left-bottom bg-gradient-to-r hover:text-blue-800 from-blue-800 via-blue-400 to-blue-800 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                    Technical Experience
                </h4>
            </div>

            <div class="lg:flex justify-center m-7">
                <ExperienceCard
                    jobicon={<FaLaptopCode class="text-5xl m-auto" />}
                    jobrole="Full Stack Developer"
                    jobtitle="eveIT"
                    jobdesc="Led 5+ pivotal projects and guided decision-making as part of a collaborative team to strategize and ensure the time commitment of deliverables." />

                <ExperienceCard
                    jobicon={<FaCode class="text-5xl m-auto" />}
                    jobrole="Software Developer"
                    jobtitle="PSK Technology"
                    jobdesc="Performed productively within a developer team to conceptualize and develop scalable software solutions using Java, Python, Dart and SQL." />

                <ExperienceCard
                    jobicon={<FaChalkboardTeacher class="text-5xl m-auto" />}
                    jobrole="Teaching Assistant"
                    jobtitle="University of Guelph"
                    jobdesc="Facilitated engaging and comprehensive learning experiences as a Teaching Assistant at the University of Guelph for Computer Science course." />
            </div>
        </div>
    )
};

export default Experience;