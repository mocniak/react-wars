import React from 'react';
import PropTypes from 'prop-types'

const content = ({items, columns}) => (
    <div className="table__content">
        {
            items.map((item, index) => (
                <div className="table__tr" key={index}>
                    {
                        columns.map(
                            column => (
                                <div className="table__td" key={column.id}>
                                    {item[column.field]}
                                </div>
                            )
                        )
                    }
                </div>
            ))
        }
    </div>
);

content.propTypes = {
    items: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
};

content.defaultProps = {
    items: [],
    columns: [],
};

export default content;