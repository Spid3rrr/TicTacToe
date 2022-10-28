import './App.css';
import Game from './components/Game.js'
import React from 'react';
import Winner from './components/Winner.js'
import titleimg from './assets/title.png';
import {reset} from './components/GameController.js';


class App extends React.Component{
  state = {
    playing: false,
    button_text:"New Game"
  }
  render(){
    return (
    <div className="App">
    <img src={titleimg} alt="Unbeatable Tic Tac Toe!" className="title"/>
    <Winner/>
    <button className="gameButton" 
        onClick={() => {
          if(!this.state.playing){
            this.setState({playing:true,
              button_text:"Give Up"});
          }
          else {
            this.setState({playing:false,
              button_text:"New Game"});
            reset();
            window.winner.updateWinner('Come defeat this "stupid" bot at tic tac toe ! *evil laugh*',false);
          }
        }}
    > {this.state.button_text} 
    </button>
    <div>
    {this.state.playing===true && <Game/>}
    </div>
    </div>
    );
  }
}


export default App;
