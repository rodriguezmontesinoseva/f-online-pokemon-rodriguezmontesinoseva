
import React, { Component } from 'react';
import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Card from '../Card';

// import PokeList from '../PokeList';
// import Filter from '../Filter';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokData: [],
			loading: true,
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
													evolution: evolutionPk,
													height: detailPk.height,
													weight: detailPk.weight,
													abilities: detailPk.abilities,
													images: detailPk.sprites

												}
											],
											loading: false,

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

	getCard(id) {
		const pokDataCard = this.state.pokData;
		return pokDataCard.find(element => element.id === parseInt(id));
	}

	componentDidMount() {
		this.fetchPokemon();
	}

	render() {
		const handlerSearchByName = this.handlerSearchByName;
		const searchByName = this.state.searchByName;
		const loading = this.state.loading;
		const nameFilter = this.state.pokData
			.filter(element => {
				return element.name.includes(this.state.searchByName)
			})

		return (
			<Switch>
				<Route exact path='/' render={() =>
					<Home
						handlerSearchByName={handlerSearchByName}
						searchByName={searchByName}
						nameFilter={nameFilter}
						loading={loading}
					/>
				} />
				<Route path='/:id' render={routerProps =>
					<Card
						match={routerProps.match}
						pokCard={this.getCard(routerProps.match.params.id)}
						//charactersArr={charactersArr} - hacer el find de video nasiba
						loading={loading}
					/>
				} />
			</Switch>

			// <div className='page-container'>
			// 	<header >
			// 		<h1 className="title">Pokemon</h1>
			// 	</header>

			// 	<main className='main__container'>
			// 		<Filter
			// 			searchByName={this.state.searchByName}
			// 			handlerSearchByName={this.handlerSearchByName}
			// 		/>
			// 		{this.state.loading
			// 			? <p>loading...</p>
			// 			: <PokeList
			// 				nameFilter={nameFilter}
			// 			/>
			// 		}

			// 	</main>
			// </div>
		);
	}
}

export default App;
