import React, { Component } from 'react';
import './styles.scss';

class Filter extends Component {
    render() {
        const { handlerSearchByName, searchByName } = this.props;
        return (
            < form className="filters-container" action="GET" >
                <input className='form__input' type="text" name="searchFilter" id="searchFilter" placeholder='Busca a tu Pokemon favorito' onChange={handlerSearchByName} value={searchByName} />
            </form >
        )
    }
}

export default Filter;
