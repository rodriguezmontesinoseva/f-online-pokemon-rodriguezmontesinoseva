
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
		//console.log('entra en el fetch');
		fetch('https://pokeapi.co/api/v2/pokemon?limit=25/')
			//fetch(ENDPOINT)
			.then(response => response.json())
			.then(data => {
				const resultsPk = data.results;
				resultsPk.map(element => {
					fetch(element.url)
						.then(response => response.json())
						.then(detailPk => {
							const urlEvolution = detailPk.species.url;
							let evolutionPk = '';

							function fetchEvolution(urlEvolution) {
								//console.log(urlEvolution);
								fetch(urlEvolution)
									.then(response => response.json())
									.then(detailSecondaryPk => {
										// detailSecondaryPk.evolves_from_species.name;
										//console.log(`esta es la evolucion ${detailSecondaryPk.evolves_from_species.name}`);
										//si tiene evolución retorna name, sino evolution = ''
										// if (detailSecondaryPk.evolves_from_species.name !== null) {
										// 	console.log(detailSecondaryPk.evolves_from_species.name);
										// 	return detailSecondaryPk.evolves_from_species.name;
										// } else {
										// 	console.log('no tiene name')
										// 	return '';
										// }
										//console.log(detailSecondaryPk);
										if (detailSecondaryPk.evolves_from_species) {
											evolutionPk = detailSecondaryPk.evolves_from_species.name;
											//console.log(evolutionPk);


										} else {
											evolutionPk = '';
										}
										console.log(evolutionPk);
										return evolutionPk;
										// return detailSecondaryPk.evolves_from_species.name;

									})
							}


							this.setState(prevState => {
								return {
									pokData: [
										...prevState.pokData,
										{
											name: detailPk.name,
											types: detailPk.types,
											image: detailPk.sprites.front_default,
											id: detailPk.id,
											evolution: fetchEvolution(urlEvolution),
											//evolution: detailPk.species.url

										}
									],
									isFetching: false,
								}
							})
							// this.setState(prevState => {
							// 	return {
							// 		pokData: [
							// 			...prevState.pokData,
							// 			{
							// 				name: detailPk.name,
							// 				types: detailPk.types,
							// 				image: detailPk.sprites.front_default,
							// 				id: detailPk.id
							// 			}
							// 		],
							// 		isFetching: false,

							// 	}
							// })

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

