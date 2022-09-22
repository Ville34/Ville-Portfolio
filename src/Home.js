import React, { Component } from 'react';
import "./home.css"
import About from './About.js';
import Projects from "./Projects";
import Contact from "./Contact";

class Home extends Component {
	render() {
		return(
			<div href="#top"className='main'>
				<div id="top"className='header'>
					<h1 className="title">
						<span>H</span>
						<span>e</span>
						<span>l</span>
						<span>l</span>
						<span>o</span> 
						<span>,</span>
						<span>&nbsp;</span>
						<span>m</span>
						<span>y</span>
						<span>&nbsp;</span>
						<span>n</span>
						<span>a</span>
						<span>m</span> 
						<span>e </span>
						<span>&nbsp;</span>
						<span>i</span> 
						<span>s </span>
						<span>&nbsp;</span>
						<span className='ville'>V</span>
						<span className='ville'>i</span>
						<span className='ville'>l</span>
						<span className='ville'>l</span>
						<span className='ville'>e</span>
					</h1>
					
				</div>
				<div id="about" className="section">
					<About />
					</div>
				<div id="projects"className="section">
					<Projects />
					</div>
				<div id="contact" className="section-contact">
					<Contact />
					</div>
			</div>
			);
	}
} 

export default Home;