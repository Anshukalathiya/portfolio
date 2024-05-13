import EducationCard from './cards/educationcard';
import UoG from '../pics/UoG.png';
import GTU from '../pics/GTU.png';
import ME from '../pics/Transcript-ME.pdf';
import BE from '../pics/Transcript-BE.pdf';

const Education = () => {
    return (
        <div id="education" class="m-5 md:m-7 lg:m-20">
            <div class="group transition-all duration-300 ease-in-out">
                <h4 class="text-3xl pb-2 uppercase font-medium text-center bg-left-bottom bg-gradient-to-r hover:text-blue-800 from-blue-800 via-blue-400 to-blue-800 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                    Education
                </h4>
            </div>
            
            <div class="lg:flex justify-center">
                <EducationCard
                    university="University of Guelph"
                    course="Master of Computer Engineering"
                    image={<img src={UoG} class="m-auto rounded-full" alt="University of Guelph" />}
                    timeline="September 2022 - January 2024"
                    score="GPA - 3.6/4.0"
                    transcript={ME} />

                <EducationCard
                    university="Gujarat Technological University"
                    course="Bachelor of Computer Engineering"
                    image={<img src={GTU} class="m-auto rounded-full" alt="GTU" />}
                    timeline="August 2017 - July 2021"
                    score="CGPA - 8.9/10.0"
                    transcript={BE} />
            </div></div>
    )
};

export default Education;