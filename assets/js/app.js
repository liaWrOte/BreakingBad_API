let app = {
    baseURI : 'https://www.breakingbadapi.com/api/',

    init:function() {
        console.log('init');

        characterManager.loadAll();

        

        // episodeManager.loadAll();
 
    },

    bindEvent:function() {

        let characters = document.querySelectorAll('.character');
         
        function addListener(item) {
            item.addEventListener('mouseover', handler.handleMouseOnCharacter);
            item.addEventListener('mouseout', handler.handleMouseOutCharacter);
            item.addEventListener('click', handler.handleClickOnCharacter)
        } 
            characters.forEach(addListener);
    }
}

document.addEventListener('DOMContentLoaded', app.init);


