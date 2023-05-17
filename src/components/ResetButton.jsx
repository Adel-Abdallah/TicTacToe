
import PropTypes from 'prop-types';

const ResetButton = ({ onClick }) => {
    return <button onClick={onClick}>Reset</button>;
};

ResetButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ResetButton;

