
const pokemon = [
    { "id": 1, "name": "bulbasaur", "types": ["poison", "grass"], "evolution": null, "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { "id": 2, "name": "ivysaur", "types": ["poison", "grass"], "evolution": "bulbasaur", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    { "id": 3, "name": "venusaur", "types": ["poison", "grass"], "evolution": "ivysaur", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
    { "id": 4, "name": "charmander", "types": ["fire"], "evolution": null, "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { "id": 5, "name": "charmeleon", "types": ["fire"], "evolution": "charmander", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
    { "id": 6, "name": "charizard", "types": ["flying", "fire"], "evolution": "charmeleon", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
    { "id": 7, "name": "squirtle", "types": ["water"], "evolution": null, "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
    { "id": 8, "name": "wartortle", "types": ["water"], "evolution": "squirtle", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
    { "id": 9, "name": "blastoise", "types": ["water"], "evolution": "wartortle", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
    { "id": 10, "name": "caterpie", "types": ["bug"], "evolution": null, "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" }
];

const ENDPOINT = {
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=25&limit=25",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
            "name": "charizard",
            "url": "https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon/9/"
        },
        {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon/10/"
        },
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon/20/"
        },
        {
            "name": "spearow",
            "url": "https://pokeapi.co/api/v2/pokemon/21/"
        },
        {
            "name": "fearow",
            "url": "https://pokeapi.co/api/v2/pokemon/22/"
        },
        {
            "name": "ekans",
            "url": "https://pokeapi.co/api/v2/pokemon/23/"
        },
        {
            "name": "arbok",
            "url": "https://pokeapi.co/api/v2/pokemon/24/"
        },
        {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon/25/"
        }
    ]
}

export { ENDPOINT };