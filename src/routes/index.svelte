<script context="module">
  // GET request to the server
  export async function load({ fetch }) {
    let response = await fetch('/pokemon.json')
    
    if (!response.ok) {
      return {
        status: 400,
        error: new Error('Could not fetch Pokemon.')
      }
    }

    let pokemon = await response.json()

    return {
      status: response.status,
      props: { pokemon }
    }
  }
</script>

<script>
  export let pokemon
</script>

<h1>Pokémon Fetcher</h1>

<!-- POST request to the server -->
<form action="/pokemon.json" method="post">
  <input name="pokemon" type="text" />
</form>

<img src={pokemon.artwork} alt={pokemon.name} />