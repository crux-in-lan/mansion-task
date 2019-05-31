import React from 'react';
import ToolTip from './comToolTip/ToolTip';
import './css/FooterHome.scss';

const Footer = (props) => {
	return (
		<div className='footerhome'>
			<div className='column'>
				<h4>Contact:</h4> 
				<ToolTip comment={'nicksona.in.lan@gmail.com'}>
					<a href='mailto:nicksona.in.lan@gmail.com'>Email</a>
				</ToolTip>			
				<a href='https://www.linkedin.com/in/nikola-vasilev-ab1161b9/'>LinkedIn</a>				
			</div>
			<div className='column'>
				<h4>gitHub Repo:</h4>
				<a href='https://github.com/crux-in-lan/face-detect-app'>Front End</a>
				<a href='https://github.com/crux-in-lan/face-detect-app-api'>Back End</a>				
			</div>
		</div>
	)
}

export default Footer;