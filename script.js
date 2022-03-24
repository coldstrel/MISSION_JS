const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    let nombrePokemon = document.getElementById('nombrePokemon').value;
    // console.log(nombrePokemon);

    fetch(url).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);

    })


}