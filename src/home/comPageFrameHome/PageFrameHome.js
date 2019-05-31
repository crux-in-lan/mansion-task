import React from 'react';
import './css/PageFrameHome.scss';

const PageFrameHome = (props) => {
	return (
		<div className="pageframehome">
			{
				props.children
			}
		</div>
	)
}

export default PageFrameHome;