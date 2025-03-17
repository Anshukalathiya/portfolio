const EducationCard = props => {
    return (
        <div class="relative flex flex-col transition hover:-translate-y-1 duration-200 m-7 lg:w-1/2 break-words bg-white dark:bg-black rounded-xl xl:mb-0 shadow-lg">
            <div class="lg:flex-auto p-6">
                <div class="lg:flex flex-wrap">
                    <div class="relative w-full max-w-full flex-grow flex-1">
                        <h5 class="text-black dark:text-white uppercase font-bold lg:text-xl">
                            {props.university}
                        </h5>
                        <span class="font-semibold lg:text-xl text-gray-900 dark:text-gray-200">
                            {props.course}
                        </span>
                        <div class="text-sm text-black dark:text-white mt-2">
                            <p class="font-semibold">
                                {props.timeline}
                            </p>
                            <p>
                                {props.score}
                            </p>
                        </div>
                    </div>
                    
                    <div class="w-auto flex-initial m-1">
                        <div class="text-center inline-flex items-center justify-center w-24 h-24 shadow-lg rounded-full">
                            {props.image}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EducationCard;