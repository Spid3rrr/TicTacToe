import React from 'react';
import Grid from './Grid.js';

class Game extends React.Component{
        state = {
            id : "-1"
        }
        constructor(){
            super();
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  
            };
            fetch('https://tic-tac-toe-api-spid3rrr.vercel.app/tictactoe',requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    id:data['id']
                })
            });
        }

       
        render(){
            if(this.state.id!=="-1")
                return (
                    <Grid game_id={this.state.id} />
                )
            else return <h1> Loading ... </h1>;
        }
}

export default Game;