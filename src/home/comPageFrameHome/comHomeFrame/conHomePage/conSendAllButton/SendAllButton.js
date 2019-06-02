import React, {Component} from 'react';
import './css/SendAllButton.scss';

class SendButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {onSendAllSubmit} = this.props;

		return (
			<div className='sendallbutton'>
				<input type='button' onClick={onSendAllSubmit} value='Send All'/>
			</div>
		)
	}
}

export default SendButton;