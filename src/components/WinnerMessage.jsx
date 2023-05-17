import PropTypes from 'prop-types';

const WinnerMessage = ({ winner }) => {
    return <div className='winner'>Winner: {winner}</div>;
};

WinnerMessage.propTypes = {
    winner: PropTypes.string.isRequired,
};

export default WinnerMessage;
