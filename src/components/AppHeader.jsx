import React, { useState, useEffect } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skillset', label: 'Skill Set' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.id);
        return el ? el.offsetTop - 100 : 0;
      });
      const scrollY = window.scrollY;
      let current = 'about';
      for (let i = 0; i < offsets.length; i++) {
        if (scrollY >= offsets[i]) current = navLinks[i].id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 shadow-md transition-all">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Mobile menu button - left side */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900">
            <svg className="w-7 h-7 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* Desktop navigation - center */}
        <ul className={`hidden md:flex gap-8 font-medium text-lg justify-center flex-1`}> 
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`transition px-2 py-1 rounded-lg focus:outline-none ${active === link.id ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold' : 'hover:bg-blue-50 dark:hover:bg-blue-800 text-gray-700 dark:text-gray-200'}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Dark mode toggle - right side */}
        <div className="flex items-center">
          <DarkModeToggle onChange={darkModeHandler} checked={dark} size={70} />
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-black/90 px-4 pb-4 pt-2 shadow-lg">
          <ul className="flex flex-col gap-2">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  className={`w-full text-left px-2 py-2 rounded-lg ${active === link.id ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold' : 'hover:bg-blue-50 dark:hover:bg-blue-800 text-gray-700 dark:text-gray-200'}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
