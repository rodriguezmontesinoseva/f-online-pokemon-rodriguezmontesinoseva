import React, { Component } from 'react';
import './../stylesheets/index.scss';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends Component {
    render() {
        const { pokData } = this.props;
        const pokList = pokData.map((element) => {
            return <li key={element.id}>
                <Pokemon
                    name={element.name}
                    image={element.image}
                    types={element.types}
                    id={element.id}
                />
            </li>
        });

        return (
            <div>
                <ul className="item-list">
                    {pokList}
                </ul>
            </div>
        );
    }
}

PokeList.propTypes = {
    pokData: PropTypes.array,
};

export default PokeList;