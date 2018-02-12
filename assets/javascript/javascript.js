$(document).ready(function(){
  $('#buttonSubmit').click(function(){

    let playerTag = $('#playerTagInput').val();
    // let playerTag = "RYULJJJJ"; // To be corrected after TESTING
    // let playerTag = "RYCGGPLY"; // To be corrected after TESTING
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.cr-api.com/player/" + playerTag,
        "method": "GET",
        "headers": {
          "auth": api_key
        }
      }

    console.log(settings.url);

    if(playerTag === " "){
      alert('Please enter a clantag!!');
    }     

    $.ajax(settings).done(function (response) {
      
      console.log(response);

      let deck = [];
      let epic = "<img src='assets/images/chests/chest-epic.png'>"
      let giant = "<img src='assets/images/chests/chest-giant.png'>"
      let magical = "<img src='assets/images/chests/chest-magical.png'>"
      let supermagical = "<img src='assets/images/chests/chest-supermagical.png'>"
      let legendary = "<img src='assets/images/chests/chest-legendary.png'>"

      document.getElementById('nameHolder').innerHTML = "Name: " + "</br>" + response.name;
      document.getElementById('trophiesHolder').innerHTML = "Trophies: " + "</br>" + response.trophies;
      document.getElementById('arenaHolder').innerHTML = response.arena.arena + "</br>" + response.arena.name;

      for(let i = 0; i < response.currentDeck.length; i++){
        deck += "<img src='" + response.currentDeck[i].icon + "'>";
      }

      document.getElementById('currentDeck').innerHTML = "Current Deck: </br>" + deck;

      document.getElementById('cycleTitle').innerHTML = "Chest Cycle: </br>The following numbers are the number of <strong>free</strong> chests that need to be won before you are awarded the appropiate chest:";

      document.getElementById('epicCycle').innerHTML = epic + ": " + response.chestCycle.epic;
      
      document.getElementById('giantCycle').innerHTML = giant + ": " + response.chestCycle.giant;
      document.getElementById('magicalCycle').innerHTML = magical + ": " + response.chestCycle.magical;
      document.getElementById('superMagicalCycle').innerHTML = supermagical + ": " + response.chestCycle.superMagical;
      document.getElementById('legendaryCycle').innerHTML = legendary + ": " + response.chestCycle.legendary;
    });
  });
});