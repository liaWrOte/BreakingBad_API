handler = {
    handleMouseOnCharacter: function(event) {

        // Afficher le nom
        let character = event.currentTarget;
        let characterName = character.previousElementSibling;
        let characterSpan = characterName.querySelector('span');
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
        let characterName = character.previousElementSibling;
        let characterSpan = characterName.querySelector('span');

        characterSpan.classList.remove('visible');
        characterSpan.classList.add('hidden');

        // rapetisser l'image du perso
        character.classList.add('small_character');
        character.classList.remove('big_character');

        // retrait de niveaux de gris
        character.classList.add('greyscale_on');
        character.classList.remove('greyscale_off');
    },

    handleClickOnCharacter: function(event) {
        let character = event.currentTarget;
        console.log('click');
        
        // TODO modifier curseur au survol du lien

        // we clone the template
        let characterPanelTemplate = document.querySelector('.character_panel');
        let clone = characterPanelTemplate.content.cloneNode(true);

        // On remplit les infos du panneau
        let characterTitle = clone.querySelector('.character_title');
        console.log(characterTitle);
        characterTitle.innerHTML = 'WalterWhite';

        // We add the clone to the DOM
        let parentNode = character.parentNode;
        console.log(parentNode);
        character.after(clone);
        console.log(clone);
        
    }
}