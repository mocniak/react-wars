import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const content = ({items, columns}) => (
    <div className="table__content">
        {
            items.map((item, index) => (
                <div className="table__tr" key={index}>
                    {
                        columns.map(
                            column => (
                                <div className="table__td" key={column.id}>
                                    {column.type === 'text'
                                        ? item[column.field]
                                        : (<Link
                                            to={column.link + "/" + item.id}
                                        >
                                            {column.buttonText}
                                        </Link>)}
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