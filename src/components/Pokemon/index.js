import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
//import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const { image, name, types, id, evolution } = this.props;
        return (
            <Link className="link__Pokemon" to={`/${id}`}>

                <div className="item">
                    <div className="item-image-container">
                        <img className="item-image" src={image} alt={name} />
                    </div>
                    <h2 className="item-name">{name}</h2>

                    {evolution ? <p className="item-evolution">Evoluciona de {evolution}</p> : ''}


                    <div className="powers">{types.map(element => <p className="item-powers" >{(element.type.name).toUpperCase()}</p>)}</div>


                    <div className="powers"> <p className="item-id" >ID/{id}</p> </div>


                </div>
            </Link>

        );
    }
}

// Pokemon.propTypes = {
//     name: PropTypes.string,
//     image: PropTypes.string,
//     types: PropTypes.arrayOf(PropTypes.string),
//     id: PropTypes.number,
//     evolution: PropTypes.string
// };

export default Pokemon;