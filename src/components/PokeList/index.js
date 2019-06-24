import React, { Component } from 'react';
import './styles.scss';

import Pokemon from '../Pokemon';
import PropTypes from 'prop-types';

class PokeList extends Component {
    render() {
        const { nameFilter } = this.props;
        const pokOrder = nameFilter.sort(function (a, b) { return a.id - b.id });
        const pokList = pokOrder.map((element) => {
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