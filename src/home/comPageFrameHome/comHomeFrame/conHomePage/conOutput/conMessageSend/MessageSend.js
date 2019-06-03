import React, {Component} from 'react';
import './css/MessageSend.scss';

class MessageSend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {message,sender} = this.props;
		
		return (
			<div className='messagesend'>
				<div className='sender'>Sender: {sender}</div>
				<div className='message'>{message}</div>
			</div>
		)
	}
}

export default MessageSend;