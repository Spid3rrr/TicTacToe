import './Grid.css';
import React from 'react';

class Cell extends React.Component{

        // Check if move is legal
        checkLegalMove = () => {
            if(this.props.text==='') {
                return true;
            }
            return false;
        }

        // Send move to server
        sendMove = () => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({cell:this.props.index, deez:"nuts"  })
            };
            fetch('http://127.0.0.1:5000/tictactoe', requestOptions)
                .then(response => response.json())
                .then(data => {
                    window.grid.updateBoard(data);
                } );
                //this.props.ref.current.updateBoard(data));
        }

        render(){
            return (
            <button
                className={"cell cell-"+ this.props.index}
                onClick={() => {
                        if(this.checkLegalMove()) {
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
        board: ''
    }
    constructor(){
        super();
        window.grid = this;
    }
    updateBoard = (data) => {
        this.setState({
            board:data["board"]
        });
        this.render();
    }

    render(){
        return (
            <div className="grid">
                <div className="row">
                    <Cell index={0} text={this.state.board[0]||''} />
                    <Cell index={1} text={this.state.board[1]||''} />
                    <Cell index={2} text={this.state.board[2]||''} />
                </div>
                <div className="row">
                    <Cell index={3} text={this.state.board[3]||''} />
                    <Cell index={4} text={this.state.board[4]||''} />
                    <Cell index={5} text={this.state.board[5]||''} />
                </div>
                <div className="row">
                    <Cell index={6} text={this.state.board[6]||''} />
                    <Cell index={7} text={this.state.board[7]||''} />
                    <Cell index={8} text={this.state.board[8]||''} />
                </div>
            </div>
        )
    }
}

// function Grid() {
//   return <div className="grid">
//     <div className="row">
//         <Cell index={0}/>
//         <Cell index={1}/>
//         <Cell index={2}/>
//     </div>
//     <div className="row">
//         <Cell index={3}/>
//         <Cell index={4}/>
//         <Cell index={5}/>
//     </div>
//     <div className="row">
//         <Cell index={6}/>
//         <Cell index={7}/>
//         <Cell index={8}/>
//     </div>
//   </div>
// }

export default Grid;