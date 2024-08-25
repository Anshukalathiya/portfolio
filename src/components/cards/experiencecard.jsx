import { BsArrowRight } from "react-icons/bs";

const ExperienceCard = props => {
    return (
        <div class="relative flex flex-col transition hover:-translate-y-1 lg:mx-5 bg-white dark:bg-black shadow-md bg-clip-border rounded-xl lg:w-1/3 my-3 md:my-5 lg:my-0">
            <div class="p-6 text-black dark:text-white">
                <div>
                    {props.jobicon}
                </div>
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-600 dark:text-blue-500 text-center">
                    {props.jobrole}
                </h5>
                <h4 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-700 dark:text-gray-200 text-center">
                    {props.jobtitle}
                </h4>
                <p class="font-sans text-black dark:text-white line-clamp-3 antialiased font-light leading-relaxed">
                    {props.jobdesc}
                </p>
            </div>
            <div class="p-6 pt-0">
                <a href="https://www.linkedin.com/in/anshumankalathiya/" class="inline-block">
                    <button
                        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 dark:text-gray-200 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                            Learn More
                        <BsArrowRight class="text-base" />
                    </button>
                </a>
            </div>
        </div>
    )
};

export default ExperienceCard;