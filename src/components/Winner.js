import React from 'react';
import './Winner.css';

class Winner extends React.Component{
        state = {
            winner:'Come defeat this "stupid" bot at tic tac toe ! *evil laugh*',
            done:false
        }
        constructor(){
            super();
            window.winner = this;
        }
        updateWinner = (data,boo) => {
            this.setState({
                winner:data,
                done:boo
            });
        }
       
        render(){
            return (
            <div className="winnerText"> 
            {this.state.winner} 
            </div>
            )
        }
}

export default Winner;