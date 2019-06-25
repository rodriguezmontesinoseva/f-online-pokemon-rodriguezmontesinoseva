import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const { image, name, types, id, evolution } = this.props;
        return (
            <Link to={`/${id}`}>

                <div className="item">
                    <div className="item-image">
                        <img src={image} alt={name} />
                    </div>
                    <p>ID/{id}</p>
                    <h2 className="item-name">{name}</h2>
                    <div className="powers">{types.map(element => <p className="item-powers">{(element.type.name).toUpperCase()}</p>)}</div>
                    {evolution ? <p>Evoluciona de {evolution}</p> : ''}

                </div>
            </Link>

        );
    }
}

Pokemon.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
    evolution: PropTypes.string
};

export default Pokemon;