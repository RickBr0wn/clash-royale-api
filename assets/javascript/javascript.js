$(document).ready(function(){
    console.log(api_key);
      $('#buttonSubmit').click(function(){
        
        let hidden = document.getElementById('hidden');
        if(hidden.style.display === "none"){
          hidden.style.display = "block";
        }else{
          hidden.style.display = "none";
        }

        // let playerTag = $('#tagInput').val();
        let playerTag = "RYULJJJJ";
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.cr-api.com/player/" + playerTag,
            "method": "GET",
            "headers": {
              "auth": api_key
            }
          }

        if(playerTag === ""){
          alert('Please enter a clantag!!');
        }     

        $.ajax(settings).done(function (response) {
          console.log(response);
          document.getElementById('nameHolder').innerHTML = "Name: " + response.name;
          document.getElementById('trophiesHolder').innerHTML = "Trophies: " + response.trophies;
          document.getElementById('arenaHolder').innerHTML = "Arena: " + response.arena.arena + " - " + response.arena.name;

          $('#currentDeck').css("background-color: ", "yellow");
          // "url(" + response.currentDeck[0].icon + ")");

          document.getElementById('cycleTitle').innerHTML = "The following numbers are the number of <strong>free</strong> chests that need to be won before you are awarded the appropiate chest.";
          document.getElementById('epicCycle').innerHTML = "Epic Chest: " + response.chestCycle.epic;
          document.getElementById('giantCycle').innerHTML = "Giant Chest: " + response.chestCycle.giant;
          document.getElementById('magicalCycle').innerHTML = "Magical Chest: " + response.chestCycle.magical;
          document.getElementById('superMagicalCycle').innerHTML = "Super Magical Chest: " + response.chestCycle.superMagical;
          document.getElementById('legendaryCycle').innerHTML = "Legendary Chest: " + response.chestCycle.legendary;
        });
      });
});