import React, {Component} from 'react';

class Recipient extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		const {onRecipientChange} = this.props;
	
		return (
			<div className='recipient'>
				<input type="text" onChange={onRecipientChange}/>
			</div>
		)
	}
}

export default Recipient;