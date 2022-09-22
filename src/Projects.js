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
							<a className="project-link" href='https://github.com/Ville34/smartbrain'>Github repo</a>
							<a className="project-link" href='https://smartbrain-vs.herokuapp.com/'>Live site(WAIT FOR 30sec FOR IT TO BUILD ON HEROKU)</a>
							
						</div>
					</div>
					<div className='project-card image'>
						
					</div>
					
				</div>
			</div>
			);
	}
} 

export default Projects;