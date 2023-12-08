import React from "react";

const Projects = () => {
	const projectData = [
		{
			name: "WithinReach",
			githubLink: "https://github.com/Gkimbo/within-reach",
			liveLink: "https://within-reach-10b07fcd97a3.herokuapp.com",
			description:
				'WithinReach is a location-based platform that instantly provides personalized recommendations for tailored places, events, and experiences, eliminating the need for extensive searching. Integrated the Google Maps API into a React web app with a PostgreSQL database, using the Foundation front end along with custom CSS. API requests are made from the React frontend to the Express backend using the "fetch" method, and third-party API requests are handled using the "got" library on the backend.',
		},
		{
			name: "Eco Score",
			githubLink: "https://github.com/Gkimbo/eco-score",
			description:
				"Eco Score is a React Native application that empowers users to calculate and reduce their personal carbon footprint. The app offers personalized recommendations to lower environmental impact, while fostering social engagement by enabling users to compete with friends and family for the highest eco score and rewards. This project showcases my expertise in React Native development and my dedication to leveraging technology for environmental awareness and positive user experiences.",
		},
	];

	return (
		<div className="projects-container">
			<h2 className="section-heading">Projects</h2>
			{projectData.map((project, index) => (
				<div key={index} className="project-item">
					<h3 className="project-title">{project.name}</h3>
					<div className="project-links">
						<a
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						{project.liveLink && (
							<a
								href={project.liveLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								Live Demo
							</a>
						)}
					</div>
					<p className="project-description">{project.description}</p>
				</div>
			))}
		</div>
	);
};

export default Projects;
