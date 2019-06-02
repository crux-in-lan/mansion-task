import React, {Component} from 'react';
import './css/Output.scss';

import Message from './conMessage/Message';

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
						return <Message key={message.id} sender={message.sender} message={message.content}/>
					})
				}
				<div style={seenInlineStyle} className='seen'>Seen</div>
			</div>
		)
	}
}

export default Output;