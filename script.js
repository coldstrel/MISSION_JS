const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    let nombrePokemon = document.getElementById('nombrePokemon').value;

    fetch(url).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeName = data.name
        setName(pokeName);
        setType(data.types[0].type.name);

    })
    


}

const setName = (nombre) => {
    nombre = nombre.toUpperCase();
    document.getElementById("pokeName").innerHTML= "El nombre del pokemon es: " + nombre;
}

const setType = (tipo) => {
    tipo = tipo.toUpperCase();
    document.getElementById("tipoPoke").innerHTML = "Tu pokemon es de tipo: " + tipo;
}