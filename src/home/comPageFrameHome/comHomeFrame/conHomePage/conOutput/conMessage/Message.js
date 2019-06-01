import React, {Component} from 'react';

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {message,sender} = this.props;
		
		return (
			<div className='message'>
				<div>Sender: {sender}</div>
				{message}
			</div>
		)
	}
}

export default Message;