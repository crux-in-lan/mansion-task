import React, {Component} from 'react';

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {message} = this.props;
		
		return (
			<div className='message'>
				{message}
			</div>
		)
	}
}

export default Message;