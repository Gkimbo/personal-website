// Contact.js
import React from "react";

const Contact = () => {
	return (
		<div className="container-contact">
			<h2 className="section-heading">Contact</h2>
			<div className="contact-info">
				<p>
					Email:{" "}
					<a href="mailto:gavin.a.kimball@gmail.com">
						gavin.a.kimball@gmail.com
					</a>{" "}
					📧
				</p>
				<p>
					LinkedIn:{" "}
					<a
						href="https://linkedin.com/in/gavinkimball"
						target="_blank"
						rel="noopener noreferrer"
					>
						linkedin.com/in/gavinkimball
					</a>{" "}
					🔗
				</p>
				<p>
					GitHub:{" "}
					<a
						href="https://github.com/Gkimbo"
						target="_blank"
						rel="noopener noreferrer"
					>
						github.com/Gkimbo
					</a>{" "}
					🚀
				</p>
				<p>
					Phone: <a href="tel:+17749913064">774-991-3064</a> 📞
				</p>
			</div>
		</div>
	);
};

export default Contact;
