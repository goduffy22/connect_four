import React, { Component } from 'react';
import {winnerCheck} from './winnerCheck.js';


function Square(props) {
    const value = String(props.value);
    function circle(value) {
        if (value === "X") {
            return (
                <svg height="100%" width="100%">
                    <circle cx="25" cy="25" r="23" stroke="black" stroke-width="1" fill="red"/>
                </svg>
            );
        } else if (value === "O") {
            return (
                <svg height="100%" width="100%">
                    <circle cx="25" cy="25" r="23" stroke="black" stroke-width="1" fill="yellow"/>
                </svg>
            );
        }
    }

    const redOrYellow = circle(value);

    return (
        <div
            className="square"
        >
            {redOrYellow}
        </div>
    );
}

class Column extends Component {
    renderSquare(i) {
        return (
            <Square value={this.props.column[i]}
            />
        );
    }

    render(){
        return ( //TODO Neaten up later with a map
            <button
                className="columns"
                onClick = {() => this.props.onClick()}
            >
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(7).fill(Array(6).fill(null)), //Note: To look at this it's like
            //looking at the board reflected in a diagonal mirror but makes indexing columns easier
            //Will maybe change later if gets confusing
            xIsNext: true,
            winner: false,
        };
    }

    handleClick(j){
        const squares = this.state.squares.slice();
        const column = squares[j].slice();//Soooo important to use slice here!!! Always remember

        if (this.state.winner){
            return ;
        }

        if(column[0] !== null){
            return ;
        }

        function nullCheck(e){
            return (e !== null);
        }
        let i = column.findIndex(nullCheck);
        if (i !== -1){
            i = i - 1;
            column[i] = this.state.xIsNext ? "X" : "O";
        } else {
            i = column.length - 1;
            column[i] = this.state.xIsNext ? "X" : "O"; //Could replace with fixed col length
        }

        squares[j] = column;
        const winner = winnerCheck(j, i, column[i], squares);
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
            winner: winner,
        });

//Note: Winner check may be easier when you raise up a level to use the history

    }


    renderColumn(j) {
        const squares = this.state.squares;
        const column = squares[j];
        return (<Column
            column = {column}
            onClick = {() => this.handleClick(j)}
        />);
    }

    render() {
        let status;
        const xIsNext = this.state.xIsNext;
        const winner = this.state.winner;

        if (winner){
            status = (xIsNext ? "Yellow" : "Red") + " wins";
        } else if (xIsNext){
            status = "Red player's turn";
        } else {
            status = "Yellow player's turn";
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="table">
                    {this.renderColumn(0)}
                    {this.renderColumn(1)}
                    {this.renderColumn(2)}
                    {this.renderColumn(3)}
                    {this.renderColumn(4)}
                    {this.renderColumn(5)}
                    {this.renderColumn(6)}
                </div>
            </div>
        );
    }
}

class Game1 extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

//Old functiont to check winner
// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return [a, b, c];
//         }
//     }
//     return null;
// }


export {Column, Game1, Square, Board};
//export default C