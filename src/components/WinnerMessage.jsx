import PropTypes from 'prop-types';

const WinnerMessage = ({ winner }) => {
    return <div className='winner'><h2>Winner: {winner}</h2></div>;
};

WinnerMessage.propTypes = {
    winner: PropTypes.string.isRequired,
};

export default WinnerMessage;
