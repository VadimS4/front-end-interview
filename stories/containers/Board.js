import React from "react";
import Space from "../components/Space";
import Piece from "../components/Piece";

class Board extends React.Component {
  state = {
    board: [
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 0, 2, 0, 2, 0, 2, 0],
      [0, 2, 0, 2, 0, 2, 0, 2],
      [2, 0, 2, 0, 2, 0, 2, 0]
    ],
    boardCoordinates: {
      x: 0,
      y: 0
    }
  };

  changePiece(board) {
    return function() {
      board.state.boardCoordinates = {
        x: this.boardCoordinateX,
        y: this.boardCoordinateY
      };
    };
  }

  changeSpace(board) {
    return function() {
      if (!board.state.boardCoordinates) {
        return false;
      }

      let startingCoordinates = board.state.boardCoordinates;
      let endingCoordinates = {
        x: this.boardCoordinateX,
        y: this.boardCoordinateY
      };

      board.movePiece(startingCoordinates, endingCoordinates);

      board.state.boardCoordinates = null;
    };
  }

  movePiece(start, end) {
    const updatedBoard = this.state.board[start.y][start.x];

    this.state.board[start.y][start.x] = 0;
    this.state.board[end.y][end.x] = updatedBoard;

    this.setState(this.state);
  }

  render() {
    //400 / 8 = 50px of each space, and 8 spaces per row
    const spaceSize = this.props.size / 8;

    //50 / 2 = 25px radius of each piece
    const pieceRadius = spaceSize / 2;

    return (
      <svg
        height={this.props.size}
        width={this.props.size}
        viewBox={`0 0 ${this.props.size} ${this.props.size}`}
      >
        {this.state.board.map((row, y) => {
          const isEvenRow = y % 2;
          const spaceY = spaceSize * y;

          return row.map((space, x) => {
            const isEvenSpace = x % 2;
            const spaceX = spaceSize * x;

            return (
              <Space
                key={x}
                shade={
                  (isEvenSpace && !isEvenRow) || (isEvenRow && !isEvenSpace)
                }
                size={spaceSize}
                x={spaceX}
                y={spaceY}
                boardCoordinateX={x}
                boardCoordinateY={y}
                handleSpaceClick={this.changeSpace(this)}
              />
            );
          });
        })}
        {this.state.board.map((row, y) => {
          const spaceY = spaceSize * y;

          return row.map((space, x) => {
            const spaceX = spaceSize * x;

            if (space === 0) {
              return null;
            }

            return (
              <Piece
                key={x}
                centerX={spaceX + pieceRadius}
                centerY={spaceY + pieceRadius}
                player={space}
                radius={pieceRadius * 0.75}
                boardCoordinateX={x}
                boardCoordinateY={y}
                handlePieceClick={this.changePiece(this)}
              />
            );
          });
        })}
      </svg>
    );
  }
}

export default Board;
