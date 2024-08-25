import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

const AppHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dark, setDark] = React.useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
    };

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <nav class="bg-white relative dark:bg-black border-gray-400 w-full top-0 z-[1001]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                <button onClick={toggleButton}
                    type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div class={`w-full lg:w-auto lg:block ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul class="sticky top-1 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-12 lg:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                        <li>
                            <a href="#about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">ABOUT</a>
                        </li>
                        <li>
                            <a href="#experience" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">EXPERIENCE</a>
                        </li>
                        <li>
                            <a href="#education" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">EDUCATION</a>
                        </li>
                        <li>
                            <a href="#skillset" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SKILL SET</a>
                        </li>
                        <li>
                            <a href="#projects" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PROJECTS</a>
                        </li>
                        <li>
                            <a href="#contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-black dark:text-white absolute right-4 top-4 lg:top-2">
                <DarkModeToggle
                    onChange={darkModeHandler}
                    checked={dark}
                    size={80}
                />
            </div>
        </nav>
    )
};

export default AppHeader;
