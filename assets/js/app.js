let app = {
    baseURI : 'https://www.breakingbadapi.com/api/',

    init:function() {
        console.log('init');

        characterManager.loadAll();

        // episodeManager.loadAll();
 
    },

    bindEvent:function() {
        //let characters = document.getElementsByClassName('character');
        
        let characters = document.querySelectorAll('.character');
        console.log(characters);
        //if (characters) {
         
        function addListener(item) {
            item.addEventListener('click', handler.handleHoverOnCharacter);
        } 
            characters.forEach(addListener);
    }
}

document.addEventListener('DOMContentLoaded', app.init);


