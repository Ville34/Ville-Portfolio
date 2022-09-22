import React, { Component } from 'react';
import { DiReact, DiJsBadge, DiCss3, DiHtml5, DiBootstrap, DiNodejs, DiPostgresql } from "react-icons/di";
class About extends Component {
	render() {
		return(
			<div className='about'>
				<h2 className='about-title'>About Me</h2>
				<div className='about-text'>
					<p className='about-p'>I am a front-end developer, who can occasionally do some back-end work also. I enjoy Front-end more because of the visual part.
						My stack consists mainly from Reactjs, Javascript, CSS and HTML. In back-end I use Nodejs with Express, and PostgreSQL as a database. </p>
					<div className='languages'><p>Front-end stack:</p>      
						<DiReact className="react-icon icons"/> 
						<DiJsBadge className="js-icon icons"/> 
						<DiCss3 className="css-icon icons"/> 
						<DiHtml5 className="html-icon icons"/> 
						<DiBootstrap className="bootstrap-icon icons" />
						<p>Back-end:</p>
						<div className='back-icons'>
							<DiNodejs className='icons node-icon' />
							<DiPostgresql className='icons psql-icon' />
						</div>
						
					</div>
				</div>
			</div>
			);
	}
} 

export default About;