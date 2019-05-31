import React from 'react';
import './css/FooterFrameHome.scss';
const FooterFrame = (props) => {
	return (
		<div className="footerframehome">			
			{
				props.children
			}			
		</div>
	)
}

export default FooterFrame;