// state
let pokemonData = {
	artwork:
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
	name: 'pikachu'
};

// GET the Pokemon
export async function get() {
	return {
		body: pokemonData
	};
}

// POST to submit the Pokemon
export async function post({ request }) {
	let form = await request.formData();
	let pokemon = form.get('pokemon');

	let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
	let { name, sprites } = await response.json();
	let artwork = sprites.other['official-artwork']['front_default'];

	// update state
	pokemonData = { artwork, name };

	// avoid redirect
	return {
		status: 303,
		body: { artwork, name },
		headers: {
			location: '/'
		}
	};
}
