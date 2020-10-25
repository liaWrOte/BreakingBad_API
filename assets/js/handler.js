handler = {
    handleMouseOnCharacter: function(event) {
        let character = event.currentTarget;
        console.log('clic');
        let characterName = character.previousElementSibling;
        let characterSpan = characterName.querySelector('span');
        console.log(characterName);
        characterSpan.classList.add('visible');
        characterSpan.classList.remove('hidden');

    },

    handleMouseOutCharacter: function(event) {
        let character = event.currentTarget;
        console.log('clic');
        let characterName = character.previousElementSibling;
        let characterSpan = characterName.querySelector('span');
        console.log(characterName);

        characterSpan.classList.remove('visible');
        characterSpan.classList.add('hidden');


    }
}