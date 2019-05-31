import React, {Component} from 'react';
import './font/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/HomePage.scss';

import Output from './conOutput/Output';
import UserName from './conUserName/UserName';
import Recipient from './conRecipient/Recipient';
import Input from './conInput/Input';
import SendButton from './conSendButton/SendButton';

class HomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listMessages: [],
			inputMessage: '',
			username: '',
			recepient: ''			
		}
	}

	onMessageChange = (event) => {
		this.setState({inputMessage: event.target.value});
	}

	onRecipientChange = (event) => {
		this.setState({recipient: event.target.value});
	}

	onSendSumit = (event) => {
		const {inputMessage} = this.state;
		fetch('https://192.168.0.108:3000/send/message',{
			method: 'post',
			headers: {'Content-type':'application/json'},
			body: {
				inputMessage
			}
		})
		.then(response =>  response.json())
		.then(result => {
			if(result.data) {
				this.setState((prevState) => ({
					listMessages:[
						...prevState.listMessages,
						prevState.inputMessage
					]
				}));
			} else {
				alert('Problem getting data from server');
			}
		})
	}

	componentDidMount = () => {
		const username = prompt('Enter your username: ');

		if (username != null) {
			this.setState({username: username});    
		}
	}

	render() {
		// console.log(this.state.boundingBoxes);
		const {
			listMessages,
			username,
			onRecipientChange,
			onMessageChange,			
			onSendSubmit
		} = this.state;

		return (		
	  	<div className='homepage'>
			<Output listMessages={listMessages}/>
			<UserName username={username}/>
			<Recipient onRecipientChange={onRecipientChange}/>
			<Input onMessageChange={onMessageChange}/>
			<SendButton onSendSumit={onSendSubmit}/>
		</div>
	    );
	}
}

export default HomePage;