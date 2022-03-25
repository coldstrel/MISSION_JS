const fetchPokemon = () => {

    let nombrePokemon = document.getElementById('nombrePokemon').value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;



    fetch(url).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data.name);
        let pokeName = data.name
        setName(pokeName);
        setType(data.types[0].type.name);
        setImg(data.sprites.front_default);
        console.log(data)

        // Getting the stats for the pokemon
        var listStatsvalue = [];

        for (var i in data.stats) {
            var statValue = data.stats[i].base_stat;
            listStatsvalue.push(statValue);
        }

        document.getElementById("1").innerHTML = listStatsvalue[0];
        document.getElementById("2").innerHTML = listStatsvalue[1];
        document.getElementById("3").innerHTML = listStatsvalue[2];
        document.getElementById("4").innerHTML = listStatsvalue[3];
        document.getElementById("5").innerHTML = listStatsvalue[4];
        document.getElementById("6").innerHTML = listStatsvalue[5];
        // Finishing getting the stats

        var z = document.getElementById("movPoke");
        for (var i = 0; i < data.abilities.length; i++) {
            console.log(data.abilities[i].ability.name);
            var div = document.createElement("p");
            div.innerHTML = data.abilities[i].ability.name;
            z.appendChild(div);
        }
    })



}

const setName = (nombre) => {
    nombre = nombre.toUpperCase();
    document.getElementById("pokeName").innerHTML = "El nombre del pokemon es: " + nombre;
}

const setType = (tipo) => {
    tipo = tipo.toUpperCase();
    document.getElementById("tipoPoke").innerHTML = "Tu pokemon es de tipo: " + tipo;
}

const setImg = (img) => {
    document.getElementById("pokeImg").src = img;
}