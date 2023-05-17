import PropTypes from 'prop-types';

const Cell = ({ value, onClick }) => {
    return (
        <div className="cell" onClick={onClick}>
            {value}
        </div>
    );
};


Cell.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};


export default Cell