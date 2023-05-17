import PropTypes from 'prop-types';

const WinnerMessage = ({ winner }) => {
    return <div className='winner'><h1>Winner: {winner}</h1></div>;
};

WinnerMessage.propTypes = {
    winner: PropTypes.string.isRequired,
};

export default WinnerMessage;
