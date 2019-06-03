import React, {Component} from 'react';
import './css/Output.scss';

import MessageSend from './conMessageSend/MessageSend';
import MessageReceived from './conMessageReceived/MessageReceived';

class Output extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {listMessages, seenInlineStyle} = this.props;	
		return (
			<div className='output'>
				{
					listMessages.map(message => {
						if(message.sender === 'Me') {
							return <MessageSend key={message.id} sender={message.sender} message={message.content}/>
						} else {
							return <MessageReceived key={message.id} sender={message.sender} message={message.content}/>
						}
					})
				}
				<div style={seenInlineStyle} className='seen'>Seen</div>
			</div>
		)
	}
}

export default Output;