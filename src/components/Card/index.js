import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

class Card extends Component {
    render() {
        const { charactersArr, loading } = this.props;
        const { id } = this.props.match.params;
        const selCharacter = charactersArr[id - 1];

        return (
            <div className='card-container'>
                < header  >
                    <Link to='/' className="go-back">Volver</Link>
                </header>
                <main className='card-main-container'>
                    <p>esta es la card</p>
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