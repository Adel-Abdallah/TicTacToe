import PropTypes from 'prop-types';
import WinnerMessage from './WinnerMessage';
import TieMessage from './TieMessage';

const GameStatus = ({ winner, currentPlayer, cells }) => {
    if (winner) {
        return <WinnerMessage winner={winner} />;
    } else if (!winner && cells.every((cell) => cell !== null)) {
        return <TieMessage />;
    }

    return <h2>Current Player: {currentPlayer}</h2>;
};

GameStatus.propTypes = {
    winner: PropTypes.string,
    currentPlayer: PropTypes.string,
    cells: PropTypes.arrayOf(PropTypes.string),
};

export default GameStatus;
