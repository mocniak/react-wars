import React from 'react';
import PropTypes from 'prop-types'
import './style.scss';

const table = () => (
    <div className="table">
        <div className="table__header"></div>
        <div className="table__content"></div>
    </div>
);

footer.propTypes = {
    paragraph: PropTypes.string,
};

footer.defaultProps = {
    paragraph: "Default footer",
};
export default table;