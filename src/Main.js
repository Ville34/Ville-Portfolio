import React, { Component } from 'react';

import Home from "./Home";



class Main extends Component {

	
	render() {
		return(
			<div>
				<nav>
					
					<ul className="navigation">
						<p className='logo'>VS</p>
						<div className='link'>
							<li><a href="#home">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#projects">Projects</a></li>
							<li><a href="#contact">Contact</a></li>
						</div>
					</ul>
				</nav>
					<Home />
					
				</div>	
			
		);
	}
}
 

export default Main;