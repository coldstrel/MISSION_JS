const fetchPokemon = () => {
    $('.moves').hide();
    $('.abilities').hide();
    const pokeName = document.getElementById('nombrePokemon').value;

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != 200) {
            poke_image("resources/pokebola.png");
            clean_text();
        } else {
            return res.json();
        }
    }).then((data) => {
        $('#type_info').text(data.types[0].type.name.toUpperCase());
        poke_info(data.stats);
        abilities(data.abilities);
        moves(data.moves);
        poke_image(data.sprites.front_default);
    })
}

const poke_info = (stats) => {
    $('#hp').text(`HP: ${stats[0].base_stat}`);
    $('#atk').text(`ATK: ${stats[1].base_stat}`);
    $('#def').text(`DEF: ${stats[2].base_stat}`);
    $('#speed').text(`SPD: ${stats[5].base_stat}`);
    $('.basic_info').show();
}

const abilities = (abilities) => {
    $('#first_ability').text(abilities[0].ability.name);
    if (abilities[1]) {
        $('#second_ability').text(abilities[1].ability.name);
    }
    if (abilities[2]) {
        $('#hidden_ability').text(abilities[2].ability.name);
    }
}

const moves = (moves) => {
    console.log("entraste a movs")
    $('#first_move').text(`1.- ${moves[0].move.name}`);
    $('#second_move').text(`2.- ${moves[1].move.name}`);
    $('#third_move').text(`3.- ${moves[2].move.name}`);
}

const poke_image = (url) => {
    const poke_img = document.getElementById("pokeImg")
    poke_img.src = url
}

const clean_text = () => {
    $('#hp').text('');
    $('#atk').text('');
    $('#def').text('');
    $('#speed').text('');
    $('#name').text('');
    $('#type_info').text('');
}

$('#abilities').on('click', function() {

    $('.basic_info').hide();
    $('.moves').hide();
    $('.abilities').show();

});

$('#moves').on('click', function() {

    $('.basic_info').hide();
    $('.abilities').hide();
    $('.moves').show();

});