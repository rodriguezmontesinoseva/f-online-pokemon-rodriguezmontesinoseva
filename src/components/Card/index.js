import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import './styles.scss';

class Card extends Component {
    render() {
        // const { charactersArr, loading } = this.props;
        // const { id } = this.props.match.params;
        // const selCharacter = charactersArr[id - 1];
        const { loading, pokCard } = this.props;

        return (
            <div className='card-container'>
                < header  >
                    <Link to='/' className="go-back">Volver</Link>
                </header>
                <main className='card-main-container'>
                    <p>esta es la card</p>
                    {pokCard !== undefined ?
                        <div className='card-data-container'>

                            <p>{pokCard.name}</p>
                            <p className="item-powers">{pokCard.height.toFixed(1)} m</p>
                            <p className="item-powers">{pokCard.weight.toFixed(1)} kg</p>
                            {/* <p>{pokCard.abilities}</p> */}
                            <div className="powers">{pokCard.abilities.map(element => <p className="item-powers">{(element.ability.name).toUpperCase()}</p>)}</div>
                            {/* <p>{pokCard.images.sprites.front_default}</p> */}
                            <div>
                                <img src={pokCard.images.front_shiny} alt="" />
                                <img src={pokCard.images.back_shiny} alt="" />

                                <img src={pokCard.images.front_default} alt="" />
                                <img src={pokCard.images.back_default} alt="" />
                            </div>


                        </div>
                        :
                        <h3 className='no-data'> {loading ? 'Loading...' : 'No hay datos de este personaje'}</h3>
                    }


                    {/* {selCharacter !== undefined ?
                        <div className='card-data-container'>
                            <div className='card-image' style={{ backgroundImage: `url(${selCharacter.image})` }} ></div>
                            <div className='card-text'>
                                <h2 className='card-title'>{selCharacter.name}</h2>
                                {selCharacter.house ? <p>Casa: {selCharacter.house}</p> : ''}
                                {selCharacter.yearOfBirth ? <p>Nacimiento: {selCharacter.yearOfBirth}</p> : ''}
                                {selCharacter.patronus ? <p>Patronus: {selCharacter.patronus}</p> : ''}
                                <p>Estado: {selCharacter.alive === true ? ' 🌈Vivo' : '☠️ Muerto'}</p>
                            </div>
                        </div>
                        :
                        <h3 className='no-data'> {loading ? 'Loading...' : 'No hay datos de este personaje'}</h3>
                    } */}
                </main>
            </div>
        );
    }
}

export default Card;