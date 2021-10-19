import './Grid.css';
import React from 'react';

class Cell extends React.Component{
        state = {
            text: '-'
        }
        fetchData = () => {
            return fetch("https://randomuser.me/api/")
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
        render(){
            return (
            <button
                className={"cell cell-"+ this.props.index}
                onClick={() => {
                        this.setState({
                        text:"O"
                        });
                        this.fetchData();
                    }
                }
            >
                {this.state.text}
            </button>
            )
        }
}

function Grid() {
  return <div className="grid">
    <div className="row">
        <Cell index={0}/>
        <Cell index={1}/>
        <Cell index={2}/>
    </div>
    <div className="row">
        <Cell index={3}/>
        <Cell index={4}/>
        <Cell index={5}/>
    </div>
    <div className="row">
        <Cell index={6}/>
        <Cell index={7}/>
        <Cell index={8}/>
    </div>
  </div>
}

export default Grid;