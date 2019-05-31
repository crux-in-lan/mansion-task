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
		const {listMessages} = this.props;	
		return (
			<div className='output'>
				{
					listMessages.map(message => {
						return <Message key={message.id} message={message.content}/>
					})
				}
			</div>
		)
	}
}

export default Output;