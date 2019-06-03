import React, {Component} from 'react';
import './css/MessageReceived.scss';

class MessageReceived extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {message,sender} = this.props;
		
		return (
			<div className='messagereceived'>
				<div className='sender'>Sender: {sender}</div>
				<div className='message'>{message}</div>
			</div>
		)
	}
}

export default MessageReceived;