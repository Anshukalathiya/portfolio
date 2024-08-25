const EducationCard = props => {
    return (
        <div class="relative flex flex-col transition hover:-translate-y-1 duration-200 m-7 lg:w-1/2 break-words bg-white dark:bg-black rounded-xl xl:mb-0 shadow-lg">
            <div class="lg:flex-auto p-6">
                <div class="lg:flex flex-wrap">
                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-black dark:text-white uppercase font-bold lg:text-xl">
                            {props.university}
                        </h5>
                        <span class="font-semibold lg:text-xl text-gray-900 dark:text-gray-200">
                            {props.course}
                        </span>
                    </div>
                    <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-center inline-flex items-center justify-center w-20 h-20 shadow-lg rounded-full">
                            {props.image}
                        </div>
                    </div>
                </div>

                <div class="lg:flex items-center justify-center">
                    <div class="text-sm text-black dark:text-white">
                        <p class="font-semibold">
                            {props.timeline}
                        </p>
                        <p>
                            {props.score}
                        </p>
                    </div>
                    <div class="flex-1">
                        <a href={props.transcript} target='_blank' rel="noreferrer">
                            <button
                                class="flex ml-auto p-2 items-center gap-2 font-sans text-xs font-bold text-center bg-blue-600 text-white uppercase align-middle transition-all rounded-lg select-none"
                                type="button">
                                Check Transcript
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EducationCard;