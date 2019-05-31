import React, {Component} from 'react';
import './css/SendButton.scss';

class SendButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {onSendSubmit} = this.props;

		return (
			<div className='sendbutton'>
				<input type='button' onClick={onSendSubmit} value='Send'/>
			</div>
		)
	}
}

export default SendButton;