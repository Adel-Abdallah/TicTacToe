import { useState } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import ResetButton from './ResetButton';
import { checkWinner } from './helpers';
import GameStatus from './GameStatus';

const Board = () => {
    const PLAYER_X = 'X';
    const PLAYER_O = 'O';
    const BOARD_SIZE = 9;

    const [cells, setCells] = useState(Array(BOARD_SIZE).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (cells[index] || winner) {
            return;
        }

        const updatedCells = [...cells];
        updatedCells[index] = currentPlayer;
        setCells(updatedCells);

        if (checkWinner(updatedCells, currentPlayer)) {
            setWinner(currentPlayer);
        } else {
            setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X);
        }
    };

    const resetGame = () => {
        setCells(Array(BOARD_SIZE).fill(null));
        setCurrentPlayer(PLAYER_X);
        setWinner(null);
    };

    return (
        <>
            <GameStatus winner={winner} currentPlayer={currentPlayer} cells={cells} />
            <div className="board">
                {cells.map((value, index) => (
                    <Cell key={index} value={value} onClick={() => handleClick(index)} />
                ))}
                <ResetButton onClick={resetGame} />
            </div>
        </>
    );
};

Board.propTypes = {
    winner: PropTypes.string,
    currentPlayer: PropTypes.string,
    cells: PropTypes.arrayOf(PropTypes.string),
};

export default Board;
