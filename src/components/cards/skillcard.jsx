const SkillCard = props => {
    return (
        <div class="transition hover:scale-105 duration-200 mx-7 my-7 break-words bg-white dark:bg-black rounded-xl shadow-md hover:shadow-lg p-6 group">
            <div class="flex justify-center">
                <div class="w-28 group-hover:w-32 h-28 group-hover:h-32 transition-all duration-500 delay-300 transform">
                    {props.image}
                </div>     
            </div>
            <p className="text-center text-black dark:text-white font-semibold mt-2 group-hover:opacity-100 opacity-0 transform transition-all delay-500 duration-500">
                {props.skill}
            </p>
        </div>
    )
};

export default SkillCard;