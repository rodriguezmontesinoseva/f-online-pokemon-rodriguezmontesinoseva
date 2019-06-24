
import React, { Component } from 'react';
import './styles.scss';
import PokeList from '../PokeList';
import Filter from '../Filter';
//import { ENDPOINT } from '../services/arrPokemon'


//const ENDPOINT = '../../objPokemon.json'
//const ENDPOINT = 'http://localhost:4000/results';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokData: [],
			isFetching: true,
			searchByName: ''

		}
		this.handlerSearchByName = this.handlerSearchByName.bind(this);

	}

	fetchPokemon() {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=25/')
			.then(response => response.json())
			.then(data => {
				const resultsPk = data.results;
				resultsPk.map(element => {
					// fetch2 accede a url donde están nombre, tipo, imagen,id
					fetch(element.url)
						.then(response => response.json())
						.then(detailPk => {
							const urlEvolution = detailPk.species.url;
							let evolutionPk = '';
							// fetch3  accede a url donde están nombre de evolucion
							fetch(urlEvolution)
								.then(response => response.json())
								.then(detailSecondaryPk => {
									//comprueba que tiene evolucion
									if (detailSecondaryPk.evolves_from_species) {
										evolutionPk = detailSecondaryPk.evolves_from_species.name;

									} else {
										evolutionPk = '';
									}
									console.log(detailPk.name);

									//setea detalles del 2fetch y evolucion del 3fetch
									this.setState(prevState => {
										return {
											pokData: [
												...prevState.pokData,
												{
													name: detailPk.name,
													types: detailPk.types,
													image: detailPk.sprites.front_default,
													id: detailPk.id,
													evolution: evolutionPk

												}
											],
											isFetching: false,

										}
									})

								})


						})
				})

			})


	};





	handlerSearchByName(event) {
		const valueSearch = event.currentTarget.value;
		this.setState({
			searchByName: valueSearch
		})
	}



	componentDidMount() {
		this.fetchPokemon();
		//	console.log(`esto es pokdata ${this.state.pokData}`);
	}

	render() {
		const nameFilter = this.state.pokData
			.filter(element => {
				return element.name.includes(this.state.searchByName)
			})

		return (
			<div className='page-container'>
				<header >
					<h1 className="title">Pokemon</h1>
				</header>

				<main className='main__container'>
					<Filter
						searchByName={this.state.searchByName}
						handlerSearchByName={this.handlerSearchByName}
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

export default App;

