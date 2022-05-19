import './Grid.css';
import React from 'react';

class Cell extends React.Component{
        state = {
            waiting : false
        }
        // Check if move is legal
        checkLegalMove = () => {
            if(this.props.text===' ') {
                return true && !this.state.waiting;
            }
            return false;
        }

        // Send move to server
        sendMove = () => {
            if(window.grid.props.game_id){
                this.setState({
                    waiting:true
                })
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*"},
                    body: JSON.stringify({move:this.props.index, id:window.grid.props.game_id  })
                };
                console.log(window.grid);
                fetch('https://tic-tac-toe-api-spid3rrr.vercel.app/tictactoe', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        window.grid.updateBoard(data['board']);
                        if(data['winner']) {
                            // end game
                            window.grid.endGame(data['board']);
                            // log winner
                            console.log(data['winner']);
                            window.winner.updateWinner(data['winner'] + " wins !",true);
                        }
                        this.setState({
                            waiting:false
                        })
                    } );
                    //this.props.ref.current.updateBoard(data));
            }
        }

        render(){
            return (
            <button
                className={"cell cell-"+ this.props.index}
                onClick={() => {
                        if(this.checkLegalMove() && window.grid.state.playing) {
                            this.sendMove();
                        };
                }}
            >
            {this.props.text}
            </button>
            )
        }
}


class Grid extends React.Component{
    state = {
        board: '         ',
        playing:true
    }
    constructor(){
        super();
        window.grid = this;
    }
    updateBoard = (data) => {
        this.setState({
            board:data,
            playing:true
        });
    }
    endGame = (data) => {
        this.setState({
            board:data,
            playing:false
        });
    }

    render(){
        return (
            <div className="grid">
                <div className="row">
                    <Cell index={0} text={this.state.board[0]} />
                    <Cell index={1} text={this.state.board[1]} />
                    <Cell index={2} text={this.state.board[2]} />
                </div>
                <div className="row">
                    <Cell index={3} text={this.state.board[3]} />
                    <Cell index={4} text={this.state.board[4]} />
                    <Cell index={5} text={this.state.board[5]} />
                </div>
                <div className="row">
                    <Cell index={6} text={this.state.board[6]} />
                    <Cell index={7} text={this.state.board[7]} />
                    <Cell index={8} text={this.state.board[8]} />
                </div>
            </div>
        )
    }
}

export default Grid;