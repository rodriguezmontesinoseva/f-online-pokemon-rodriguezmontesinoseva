import React, { Component } from 'react';
import './../stylesheets/index.scss';
import PokeList from './PokeList';
//import { ENDPOINT } from '../services/arrPokemon'


//const ENDPOINT = '../../objPokemon.json'
const ENDPOINT = 'http://localhost:4000/results';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokData: [],
			isFetching: true,

		}

	}

	fetchPokemon() {
		//console.log('entra en el fetch');
		//fetch('https://pokeapi.co/api/v2/pokemon?limit=25/')
		fetch(ENDPOINT)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				const resultsPk = data.results;
				this.state.isFetching ? console.log('cargando') :
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
												img: detailPk.sprites.front_default,
												id: detailPk.id
											}
										],
										isFetching: false
									}
								})
							})
					})
					;
				// this.setState({
				// 	pokData: data.results,
				// 	isFetching: false
				// })


			})
	}




	componentDidMount() {
		this.fetchPokemon();
	}

	render() {
		return (
			<div>
				<h1 className="title">Mi lista de Pokemon</h1>
				{this.state.isFetching ? <p>loading...</p> : <p>array cargado</p>}

				{/* <PokeList arrPokemon={ENDPOINT} /> */}
			</div>
		);
	}
}

export default App;

