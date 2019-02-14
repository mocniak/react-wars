import React from 'react';
import PropTypes from 'prop-types'
import Header from './header';
import Content from './content';
import './style.scss';

const table = ({
    items,
               }) => (
    <div className="table">
        <Header/>
        <Content/>
    </div>
);

table.propTypes = {
    items: PropTypes.array,
};

table.defaultProps = {
    items: [],
};
export default table;