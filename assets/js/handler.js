handler = {
    handleMouseOnCharacter: function(event) {

        // Afficher le nom
        let character = event.currentTarget;
        console.log('clic');
        let characterName = character.previousElementSibling;
        let characterSpan = characterName.querySelector('span');
        console.log(characterName);
        characterSpan.classList.add('visible');
        characterSpan.classList.remove('hidden');

        // grossir l'image du perso
        character.classList.remove('small_character');
        character.classList.add('big_character');

        // retrait de niveaux de gris
        character.classList.remove('greyscale_on');
        character.classList.add('greyscale_off');


    },

    handleMouseOutCharacter: function(event) {
        //cacher le nom
        let character = event.currentTarget;
        console.log('clic');
        let characterName = character.previousElementSibling;
        let characterSpan = characterName.querySelector('span');
        console.log(characterName);

        characterSpan.classList.remove('visible');
        characterSpan.classList.add('hidden');

        // rapetisser l'image du perso
        character.classList.add('small_character');
        character.classList.remove('big_character');

        // retrait de niveaux de gris
        character.classList.add('greyscale_on');
        character.classList.remove('greyscale_off');
    }
}