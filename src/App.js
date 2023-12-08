import { BackGroundImage1 } from "./components/BackGroundImage1";
import Content from "./components/Content";
import WorkExperience from "./components/WorkExpirience";
import Projects from "./components/Projects";
import VolunteerExperience from "./components/Volunteer";
import TechnicalSkills from "./components/TechnicalSkills";
import ContactInfo from "./components/ContactInfo";
import Interests from "./components/Interests";

function App() {
	return (
		<div className="app">
			<BackGroundImage1 />
			<Content />
			<WorkExperience />
			<Projects />
			<VolunteerExperience />
			<TechnicalSkills />
			<Interests />
			<ContactInfo />
		</div>
	);
}

export default App;
