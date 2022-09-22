import React, { Component } from 'react';

class Projects extends Component {
	render() {
		return(
			<div>
				<h2>Here are some of my projects</h2>
				<div className='projects'>
					<div className='project-card smartbrain'>
						<div className='card-title'>
							<h4>Smartbrain</h4>
						</div>
						<div className='card-text'>
							<p>A web app using the clarifai API to detect faces from pictures. Has a fully working registration/login system using PSQL as a database to store information.</p>
						</div>
					</div>
					<div className='project-card mutkis'>
						<div className='card-title'>
							<h4>Kennel Mutkis</h4>
						</div>
						<div className='card-text'>
							<p>A homesite</p>
						</div>
					</div>
				</div>
			</div>
			);
	}
} 

export default Projects;