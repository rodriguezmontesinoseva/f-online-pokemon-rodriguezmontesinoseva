import React, { Component } from 'react';
import './../stylesheets/index.scss';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const { image, name, types } = this.props;
        return (
            <div className="item">
                <div className="item-image">
                    <img src={image} alt={name} />
                </div>
                <h2 className="item-name">{name}</h2>
                <div className="powers">{types.map(element => <p className="item-powers">{(element).toUpperCase()}</p>)}</div>
            </div>
        );
    }
}

Pokemon.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
};

export default Pokemon;