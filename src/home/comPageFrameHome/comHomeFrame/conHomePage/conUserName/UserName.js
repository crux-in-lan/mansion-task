import React, {Component} from 'react';

class UserName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		const {username} = this.props;
		return (
			<div className="username">
				{username}
			</div>
		)
	}
}

export default UserName;