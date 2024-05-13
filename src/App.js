import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import AppFooter from './components/AppFooter';

function App() {
	return (
		<div className="bg-gradient-to-r from-neutral-100 to-white dark:bg-primary-dark transition duration-300">
			<Router>
				<AppHeader />
				<About />
				<Experience />
				<Education />
				<SkillSet />
				<Projects />
				<AppFooter />
			</Router>
		</div>
	);
}

export default App;
