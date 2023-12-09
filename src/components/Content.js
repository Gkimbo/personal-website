import React from "react";
import { FadeInSection } from "./services/FadeInSection";

const Content = () => {
	return (
		<div className="about-me">
			<h1> My Professional Journey </h1>
			<FadeInSection>
				<section>
					<h2>Introduction</h2>
					<p>
						I am not your typical developer. My professional journey started in
						the merchant marine industry, where I developed a unique perspective
						and a strong foundation for problem-solving.
					</p>
				</section>
				<section>
					<h2>Transition to Tech</h2>
					<p>
						During my tenure at Military Sealift Command, I delved into
						JavaScript to ensure the seamless operation of the Information
						System onboard the ship. This system was responsible for managing
						orders and distribution logistics, sparking my profound interest in
						programming.
					</p>
				</section>
				<section>
					<h2>Immersive Learning Experience</h2>
					<p>
						Eager to deepen my knowledge, I enrolled in Launch Academy's 18-week
						immersive program. This decision marked a significant shift in my
						career, as I transitioned from maritime operations to building
						websites and applications.
					</p>
				</section>
				<section>
					<h2>Adapting and Thriving</h2>
					<p>
						Today, I continue to expand my skill set, exploring new programming
						languages and thriving in the dynamic tech landscape. My strength
						lies in effective problem-solving, cultivated through diverse
						experiences. I am passionate about leveraging technology to create
						innovative solutions and navigate the challenges of the digital
						world.
					</p>
				</section>
			</FadeInSection>
		</div>
	);
};

export default Content;
