import React from 'react';
import PropTypes from 'prop-types'
import Header from './header';
import Content from './content';
import './style.scss';

const table = ({
                   items,
                   columns,
               }) => (
    <div className="table">
        <Header columns={columns}/>
        <Content columns={columns} items={items}/>
    </div>
);

table.propTypes = {
    items: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
};

table.defaultProps = {
    items: [],
    columns: [],
};
export default table;