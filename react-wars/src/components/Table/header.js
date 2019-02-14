import React from 'react';
import PropTypes from 'prop-types'

const header = () => (
    <div className="table__header">
        <div className="table__th">
            Name
        </div>
        <div className="table__th">
            Height
        </div>
        <div className="table__th">
            Mass
        </div>
        <div className="table__th">
            Birth year
        </div>
    </div>

);

export default header;