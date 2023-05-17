import { useState } from 'react'
import Cell from './Cell'
const Board = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
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
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const checkWinner = (cells, currentPlayer) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (cells[a] === currentPlayer && cells[b] === currentPlayer && cells[c] === currentPlayer) {
                return true;
            }
        }

        return false;
    };

    const resetGame = () => {
        setCells(Array(9).fill(null));
        setCurrentPlayer('X');
        setWinner(null);
    };

    return (
        <>
            {winner && <div className='winner'>Winner: {winner}</div>}
            {!winner && cells.every(cell => cell !== null) && <div>Its a tie!</div>}
            <div className="board">
                {cells.map((value, index) => (
                    <Cell key={index} value={value} onClick={() => handleClick(index)} />
                ))}
                <button onClick={resetGame}>Reset</button>
            </div>
        </>
    );
};

export default Board;