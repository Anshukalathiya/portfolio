import { HiMiniArrowUpRight } from "react-icons/hi2";

const ProjectsCard = props => {
    return (
        <div class="m-7 break-words bg-white dark:bg-black text-black dark:text-white rounded-xl xl:mb-0 shadow-lg text-center items-center">
            <a href={props.link} target="_blank" rel="noreferrer">
                <div class="flex justify-center p-6 rounded-xl">
                    {props.image}
                </div>
                <div class="inline-flex font-bold text-lg">
                    {props.name}
                    <HiMiniArrowUpRight />
                </div>
                <div class="pb-6">
                    {props.tech.map((technology, index) => (
                        <div key={index} className="inline-flex bg-blue-100 dark:bg-gray-700 px-2 rounded-lg m-1 text-blue-800 dark:text-gray-400">
                            {technology}
                        </div>
                    ))}
                </div>
            </a>
        </div>
    )
};

export default ProjectsCard;