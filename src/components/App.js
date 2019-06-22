import React, { Component } from 'react';
import './../stylesheets/index.scss';
import PokeList from './PokeList';
import Filter from './Filter';
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
				//	console.log(data);
				const resultsPk = data.results;
				//this.state.isFetching ? console.log('cargando') :
				resultsPk.map(element => {
					fetch(element.url)
						.then(response => response.json())
						.then(detailPk => {
							this.setState(prevState => {
								return {
									pokData: [
										...prevState.pokData,
										{
											name: detailPk.name,
											types: detailPk.types,
											image: detailPk.sprites.front_default,
											id: detailPk.id
										}
									],
									isFetching: false,

								}
							})

						})
				})
				//	;
				// this.setState({
				// 	pokData: data.results,
				// 	isFetching: false
				// })


			})


	}

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
			<div>
				<header >
					<h1 className="title">Pokemon</h1>
				</header>

				<main>
					{this.state.isFetching
						? <p>loading...</p>
						: <PokeList
							nameFilter={nameFilter}
						/>
					}
					<Filter
						searchByName={this.state.searchByName}
						handlerSearchByName={this.handlerSearchByName}
					/>

				</main>

			</div>
		);
	}
}

export default App;

