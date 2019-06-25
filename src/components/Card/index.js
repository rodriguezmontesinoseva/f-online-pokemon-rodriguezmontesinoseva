import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Card extends Component {
    render() {

        const { loading, pokCard } = this.props;

        return (
            <div className='card-container'>
                < header  >
                    <Link to='/' className="go-back">Volver</Link>
                </header>
                <main className='card-main-container'>
                    {pokCard !== undefined ?
                        <div className='card-data-container'>
                            <div className='card-image' style={{ backgroundImage: `url(${pokCard.image})` }} ></div>


                            <div className='card-text'>
                                <h2 className='card-title'>{pokCard.name}</h2>
                            </div>

                            <p>Altura: {pokCard.height.toFixed(1)} m</p>
                            <p>Peso: {pokCard.weight.toFixed(1)} kg</p>

                            <p>Habilidades:</p>
                            <div className="card-abilities">{pokCard.abilities.map(element => <p className="card-item-abilities" key={element.slot}>{(element.ability.name).toUpperCase()}</p>)}</div>

                            <p>Imágenes: </p>
                            <div>
                                <img src={pokCard.images.front_shiny} alt="" />
                                <img src={pokCard.images.back_shiny} alt="" />

                                <img src={pokCard.images.front_default} alt="" />
                                <img src={pokCard.images.back_default} alt="" />
                            </div>


                        </div>
                        :
                        <h3 className='no-data'> {loading ? 'Loading...' : 'No hay datos de este Pokemon'}</h3>
                    }
                </main>
            </div>
        );
    }
}

export default Card;