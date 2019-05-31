import React, {Component} from 'react';
import './css/Input.scss';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {onMessageChange} = this.props;		
		return (
			<div className='input'>
				<input type='text' onChange={onMessageChange}/>
			</div>
		)
	}
}

export default Input;