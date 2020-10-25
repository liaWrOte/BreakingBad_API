let characterManager = {
    loadAll: function() {
        // On prépare la configuration de la requête HTTP
        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };
    
        // On déclenche la requête HTTP (via le moteur sous-jacent Ajax)
        fetch(app.baseURI + 'characters', config)
            // Ensuite, lorsqu'on reçoit la réponse au format JSON
            .then(function(response) {
                // console.log(response); // réponse entière (headers + contenu)
                // On convertit cette réponse en un objet JS et on le retourne
                return response.json();
            })
            // Ce résultat au format JS est récupéré en argument ici-même
            .then(function(data) {
                // On dispose désormais d'un tableau JS exploitable dans la variable data

                for (character of data) {
                    // we clone the template for each character
                    let characterTemplate = document.querySelector('.characters_template');
                    
                    let clone = characterTemplate.content.cloneNode(true);

                    // we add the data in our template
                    let newCharacter = clone.querySelector('.character');

                    // Background-image
                    newCharacter.style.backgroundImage = "url('" + character.img + "')";

                    
                    
                    // Chemistry_number
                    let chemistryTab = clone.querySelector('.chemistry_tab');

                    let chemistryNumber = chemistryTab.querySelector('.chemistry_number');
                    chemistryNumber.innerHTML = Math.floor((Math.random() * 99) + 1);

                    // First chemistry letter
                    chemistryTab.querySelector('.chemistry_letter_1').innerHTML = character.name.charAt(0);

                    // Second chemistry letter of it exists
                    let secondLetter = character.name.split(' ');
                    if (secondLetter[1]) {
                        chemistryTab.querySelector('.chemistry_letter_2').innerHTML = secondLetter[1].charAt(0);
                    }
                    
                    // Character Name
                    let characterNameTab = clone.querySelector('.character_name');
                    characterNameTab.innerHTML = '<span class="characterName hidden">' + character.name + '</span>';

                    // We add the clone to the DOM
                    let parentNode = document.querySelector('.characters');
                    let brother = parentNode.querySelector('.season_container');
                    parentNode.insertBefore(clone, brother);

                    // We load the events after that all characters have been loaded
                    app.bindEvent();
                    //characterManager.loadNames();
                }

            },

           
        );

        
        
    },

    loadNames: function() {
        let characterNameDiv = document.querySelectorAll('.character_name');
        console.log(character);
        for (let i = 0 ; i < characterNameDiv.length; i++) {
            console.log(character[i].name);
            //let spanName = document.createElement('span');
            characterNameDiv[i].textContent = character.name;
            //console.log(characterNameDiv[i]);
            //characterNameDiv[i].appendChild(spanName);
        };
    }
}

    