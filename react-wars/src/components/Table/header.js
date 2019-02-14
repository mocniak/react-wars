import React from 'react';
import PropTypes from 'prop-types'

const header = ({columns}) => (
    <div className="table__header">
        {
            columns.map(head => (
                <div
                    key={head.id}
                    className="table__th"
                >
                    {head.text}
                </div>
            ))
        }
    </div>

);

header.propTypes = {
    columns: PropTypes.array.isRequired,
};

header.defaultProps = {
    columns: [],
};

export default header;