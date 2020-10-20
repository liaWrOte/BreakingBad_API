let episodeManager = {

    loadAll: function() {
        episodeManager.loadSeasonOne();
    },

    loadSeasonOne: function () {
        // On prépare la configuration de la requête HTTP
        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };
    
        // On déclenche la requête HTTP (via le moteur sous-jacent Ajax)
        fetch(app.baseURI + 'episodes', config)
            // Ensuite, lorsqu'on reçoit la réponse au format JSON
            .then(function(response) {
                // console.log(response); // réponse entière (headers + contenu)
                // On convertit cette réponse en un objet JS et on le retourne
                return response.json();
            })
            // Ce résultat au format JS est récupéré en argument ici-même
            .then(function(data) {
                // On dispose désormais d'un tableau JS exploitable dans la variable data
                console.log(data); // contenu de la réponse sous forme d'objet JS

                // TODO peut être que for episodes of data doit être supprimé
                for (episodes of data) {
                    for (let i = 1; i <= 5; i++) {
                        // We clone the season template
                        let seasonTemplate = document.querySelector('.season_template');
                        let seasonClone = seasonTemplate.content.cloneNode(true);
                        // TODO peut être que je dois parcourir tous les episodes en fonctiondu nombre d'épisodes
                        // TODO problème je n'ai pas le nombre d'épisodes par saison
                        // TODO toruver coment je trouve la clé qui a telle valeur

                        // result.toyotaCount = list.filter(x => x.make === "toyota").length; 
                        //if (episodes.season == i)
                        for (let j = 1; j < {
                            // We clone the episode template
                            let episodeTemplate = seasonClone.querySelector('.episode_template');
                            
                            let episodeClone = episodeTemplate.content.cloneNode(true);
    
                            // We add the data in our episodeTemplate
                            // We add the season number
                            let season = episodeClone.querySelector('.season_text');
                            season.innerHTML = episodes.season;
    
                            // We add the episode number
                            let episodeNumber = episodeClone.querySelector('.episode_text');
                            episodeNumber.innerHTML = 'E' + episodes.episode_id;
    
                            // We add the episodeClone to the DOM
                            // We add them to the DOM
                            let parentNode = seasonClone.querySelector('.episodes');
                            let brother = parentNode.querySelector('.characters_container');
                            parentNode.insertBefore(episodeClone, brother);
                        }
                        // We add the seasonClone to the DOM
                            // We add them to the DOM
                            let parentNode = document.querySelector('.seasons');
                            let brother = parentNode.querySelector('.seasons_container');
                            parentNode.insertBefore(seasonClone, brother);
                    }
                    
                }
                
                //for (episodes of data) {
                //    // we clone the template for each character
                //    let characterTemplate = document.querySelector('.characters_template');
                //    let clone = characterTemplate.content.cloneNode(true);
//
                //    // we add the data in our template
                //    let newCharacter = clone.querySelector('.character');
//
                //    // Background-image
                //    newCharacter.style.backgroundImage = "url('" + character.img + "')";
                //    
                //    // Chemistry_number
                //    let chemistryTab = clone.querySelector('.chemistry_tab');
//
                //    let chemistryNumber = chemistryTab.querySelector('.chemistry_number');
                //    chemistryNumber.innerHTML = Math.floor((Math.random() * 99) + 1);
//
                //    // First chemistry letter
                //    chemistryTab.querySelector('.chemistry_letter_1').innerHTML = character.name.charAt(0);
//
                //    // Second chemistry letter of it exists
                //    let secondLetter = character.name.split(' ');
                //    if (secondLetter[1]) {
                //        chemistryTab.querySelector('.chemistry_letter_2').innerHTML = secondLetter[1].charAt(0);
                //    }
                //    
                //    // We add them to the DOM
                //    let parentNode = document.querySelector('.characters');
                //    let brother = parentNode.querySelector('.episodes');
                //    parentNode.insertBefore(clone, brother);
                //}
            }
        );
    }
}