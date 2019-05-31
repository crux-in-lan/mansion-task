/*libraries and APIs*/
import React, { Component } from 'react';

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
  }

  render() {
        return (
          <PageFrameHome>
            
            <HomeFrame>              
              <HomePage/>
            </HomeFrame>
            
            <FooterFrameHome>
              <FooterHome/>
            </FooterFrameHome>
            
          </PageFrameHome>
        );        
  }
}

export default App;