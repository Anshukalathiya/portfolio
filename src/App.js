import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Zoom, AttentionSeeker } from "react-awesome-reveal";
import AppHeader from './components/AppHeader';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AppFooter from './components/AppFooter';

function App() {
	return (
		<div className="bg-gradient-to-r from-neutral-100 to-white dark:from-slate-900 dark:to-slate-800 transition duration-300">
			<Router>
				<AppHeader />
				<Zoom>
					<About />
				</Zoom>
				<Experience />
				<Education />
				<SkillSet />
				<Projects />
				<AttentionSeeker effect='tada' duration={1000}>
					<Contact />
				</AttentionSeeker>
				<AppFooter />
			</Router>
		</div>
	);
}

export default App;
