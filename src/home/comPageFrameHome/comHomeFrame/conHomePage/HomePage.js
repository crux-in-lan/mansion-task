import React, {Component} from 'react';
import clone from 'clone';
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
			recipient: ''			
		}
		this.usernameSeted = false;	
		this.webSocketConnected = false;		
	}

	set usernameSeted(val1) {
		this._usernameSeted = val1;
		this.commonListener(val1)(this.webSocketConnected);
	}

	get usernameSeted() {
		return this._usernameSeted;
	}

	set webSocketConnected(val2) {
		this._webSocketConnected = val2;
		this.commonListener(this.usernameSeted)(val2);
	}

	get webSocketConnected() {
		return this._webSocketConnected;
	}

	commonListener = (val1) => (val2) => {}

	registerCommonListener = (listener) => {
		this.commonListener = listener;
	}

	handleFirstSend = (usernameSeted) => (webSocketConnected) => {
		
		if(usernameSeted && webSocketConnected) {
			//send via websocket the first payload
			const payload = {
				first: true, 
				username: this.state.username			
			};

	        this.websocketClient.send(JSON.stringify(payload)); 
		}
	}

	onMessageChange = (event) => {
		this.setState({inputMessage: event.target.value});
	}

	onRecipientChange = (event) => {
		this.setState({recipient: event.target.value});
	}

	onSendSubmit = (event) => {
		console.log("sendBtn Pressed");
		const {inputMessage, username, recipient} = this.state;
		
		const payload = {
			inputMessage, 
			username, 
			recipient
		};

		//Send the message to the BE
        if (this.websocketClient.readyState === 
        	this.websocketClient.OPEN) {      
            this.websocketClient.send(JSON.stringify(payload)); 
        }   		
	}

	onWebscoketMessage = (e) => {
	    if (typeof e.data === 'string') {
	        console.log("Received: '" + e.data + "'");
	        const payload = JSON.parse(e.data);
	        console.log('PayLoad Message: ', payload.message);
	        
	        this.setState((prevState) => (
	        	{
	        		listMessages: [...prevState.listMessages, payload.message]
	        	}
	        ),() => {
	        	console.log('List Messages: ',this.state.listMessages);
	        });
	    }
	  };

	onWebsocketOpen = () => {
		this.webSocketConnected = true;
	    console.log('WebSocket Client Connected1');	    
	};

	componentDidMount = () => {
		this.registerCommonListener(this.handleFirstSend);
		this.websocketClient = this.props.makeWebScoketConnection();
		this.websocketClient.onopen = this.onWebsocketOpen;		
		this.websocketClient.onmessage = this.onWebscoketMessage;

		// console.log('componentDidMount this.props',this.props);
		
		const username = prompt('Enter your username: ');
	
		// console.log('componentDidMount payload',payload);
		if (username != null) {
			this.setState({username: username},()=>{
				this.usernameSeted = true;
			});						
		}
	}

	render() {
		// console.log(this.state.boundingBoxes);
		const {listMessages,username} = this.state;
		const {
			onRecipientChange,
			onMessageChange,
			onSendSubmit
		} = this;

		return (		
	  	<div className='homepage'>
			<Output listMessages={listMessages}/>
			<UserName username={username}/>
			<Recipient onRecipientChange={onRecipientChange}/>
			<Input onMessageChange={onMessageChange}/>
			<SendButton onSendSubmit={onSendSubmit}/>
		</div>
	    );
	}
}

export default HomePage;