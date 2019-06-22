import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const { handlerSearchByName, searchByName } = this.props;
        return (
            < form className="filters-container" action="GET" >

                <label className="filters-label" htmlFor="searchFilter">Busca a tu Pokemon favorito</label>
                <input type="text" name="searchFilter" id="searchFilter" placeholder='Busca a tu Pokemon favorito' onChange={handlerSearchByName} value={searchByName} />
            </form >
        )
    }
}

export default Filter;
