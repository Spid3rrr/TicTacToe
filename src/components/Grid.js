import './Grid.css';
import React from 'react';
import {handleMove} from './GameController.js'

class Cell extends React.Component{
        // Check if move is legal
        checkLegalMove = () => {
            return this.props.text===' ';
        }

        // Send move to GameController
        sendMove = () => {
                let data = JSON.parse(handleMove(this.props.index));
                window.grid.updateBoard(data['board']);
                if(data['winner']) {
                    // end game
                    window.grid.endGame(data['board']);
                    // log winner
                    window.winner.updateWinner(data['winner'] + " wins !",true);
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
        playing:true,
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