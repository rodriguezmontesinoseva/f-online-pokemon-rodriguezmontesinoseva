import React, { Component } from 'react';
import './../stylesheets/index.scss';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends Component {
    render() {
        const { arrPokemon } = this.props;
        const arrayOfPokemon = arrPokemon.map((element) => {
            return <li key={element.id}>
                <Pokemon
                    name={element.name}
                    image={element.url}
                    types={element.types}
                />
            </li>
        });

        return (
            <div>
                <ul className="item-list">
                    {arrayOfPokemon}
                </ul>
            </div>
        );
    }
}

PokeList.propTypes = {
    arrPokemon: PropTypes.array,
};

export default PokeList;