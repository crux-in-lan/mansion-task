/*libraries and APIs*/
import React, { Component } from 'react';
import {w3cwebsocket as W3CWebSocket} from 'websocket';

/*common for the whole application*/
import logo from './logo.svg';
// import './css/util.css';
import './css/App.scss';

/*homepage*/
import PageFrameHome from './home/comPageFrameHome/PageFrameHome';
import HomeFrame from './home/comPageFrameHome/comHomeFrame/HomeFrame';
import HomePage from './home/comPageFrameHome/comHomeFrame/conHomePage/HomePage';
import FooterFrameHome from './home/comPageFrameHome/comFooterFrameHome/FooterFrameHome';
import FooterHome from './home/comPageFrameHome/comFooterFrameHome/comFooterHome/FooterHome';

class App extends Component {
  constructor() {
    super();
    this.state ={
     
    }

    this.client = undefined;
  }

  makeWebScoketConnection = () => {
    //websocket client
    this.client = new W3CWebSocket('ws://192.168.0.108:8080/', 'echo-protocol');
    this.client.onerror = this.onWebsocketError;    
    this.client.onclose = this.onWebsocketClose;
    this.client.onmessage = this.onWebscoketMessage;

    return this.client;
  }

  //websocket client
  onWebsocketError = () => {
    console.log('Connection Error');
  }; 
  
 
  onWebsocketClose = () => {
    console.log('echo-protocol Client Closed');
  };
 
  onWebscoketMessage = (e) => {
    if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'");
    }
  };
  render() {
        return (
          <PageFrameHome>
            
            <HomeFrame>              
              <HomePage             
              makeWebScoketConnection={this.makeWebScoketConnection}
              />
            </HomeFrame>
            
            <FooterFrameHome>
              <FooterHome/>
            </FooterFrameHome>
            
          </PageFrameHome>
        );        
  }
}

export default App;