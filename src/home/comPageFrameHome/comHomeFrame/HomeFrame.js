import React from 'react';
import './css/HomeFrame.scss';

const HomeFrame = (props) => {
	return (
			<div className="homeframe">
			{
				props.children
			}
			</div>
	)
}

export default HomeFrame;