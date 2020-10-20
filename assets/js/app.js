let app = {
    baseURI : 'https://www.breakingbadapi.com/api/',

    init:function() {
        console.log('init');

        characterManager.loadAll();

        // episodeManager.loadAll();

        
    },

    bindEvent:function() {
        //let characters = document.getElementsByClassName('character');
        
        let characters = document.getElementsByClassName('character');
        console.log(characters);
        if (characters) {
            console.log('dans la condition');

            for (item in characters) {
                //let item = characters.item;
                console.log(item);
                
                item.addEventListener('click', handler.handleOverOnCharacter);
            }
        }      
    }

}

document.addEventListener('DOMContentLoaded', app.init);


