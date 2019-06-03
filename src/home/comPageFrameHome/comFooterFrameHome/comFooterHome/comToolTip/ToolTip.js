import React from 'react';
import './css/ToolTip.css';

const ToolTip = (props) => {
	return (
		<div className="tooltip">
			{props.children}
			<span className="tooltiptext">{props.comment}</span>
		</div>
	)
}

export default ToolTip;