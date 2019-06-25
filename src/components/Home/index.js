import React, { Component } from 'react';
import './styles.scss';
import PokeList from '../PokeList';
import Filter from '../Filter';

class Home extends Component {
    render() {
        const {
            handlerSearchByName,
            searchByName,
            nameFilter,
        } = this.props;

        return (
            <div className='page-container'>
                <header >
                    <h1 className="title">Pokemon</h1>
                </header>

                <main className='main__container'>
                    <Filter
                        searchByName={searchByName}
                        handlerSearchByName={handlerSearchByName}
                    />
                    {this.state.isFetching
                        ? <p>loading...</p>
                        : <PokeList
                            nameFilter={nameFilter}
                        />
                    }

                </main>
            </div>
        );
    }
}
export default Home;