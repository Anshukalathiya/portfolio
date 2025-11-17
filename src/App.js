import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AppFooter from './components/AppFooter';
import WebChat from './components/WebChat';

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 transition duration-300">
			<Router>
				<AppHeader />
				<main className="pt-14 md:pt-28 xl:pt-0 px-2 md:px-0">
					<section id="about"><About /></section>
					<section id="experience"><Experience /></section>
					<section id="education"><Education /></section>
					<section id="skillset"><SkillSet /></section>
					<section id="projects"><Projects /></section>
					<section id="contact"><Contact /></section>					
				</main>
				<AppFooter />
				
			</Router>
			<WebChat />
		</div>
	);
}

export default App;
