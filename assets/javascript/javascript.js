// Global Variables
let deck = [];
let answer = [];

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

    if(playerTag == ""){
      alert('ERROR :: Please enter a clantag!!');
    }     

    $.ajax(settings).done(function (response) {
      
      console.log(response);

      document.getElementById('nameHolder').innerHTML = "Name: " + "</br>" + response.name;
      document.getElementById('clanHolder').innerHTML = "Clan: " + "</br>" + response.clan.name;
      document.getElementById('trophiesHolder').innerHTML = "Trophies: " + "</br>" + response.trophies;
      document.getElementById('arenaHolder').innerHTML = response.arena.arena  + ":" + "</br>" + response.arena.name;

      for(let i = 0; i < response.currentDeck.length; i++){
        deck += "<img src='" + response.currentDeck[i].icon + "'>";
      }

      document.getElementById('currentDeck').innerHTML = "Current Deck: </br>" + deck;

      document.getElementById('cycleTitle').innerHTML = "Chest Cycle: </br>The following numbers are the number of <strong>free</strong> chests that need to be won before you are awarded it:";

      document.getElementById('epicCycle').innerHTML = epic + ": " + response.chestCycle.epic;
      
      document.getElementById('giantCycle').innerHTML = giant + ": " + response.chestCycle.giant;
      document.getElementById('magicalCycle').innerHTML = magical + ": " + response.chestCycle.magical;
      document.getElementById('superMagicalCycle').innerHTML = supermagical + ": " + response.chestCycle.superMagical;
      document.getElementById('legendaryCycle').innerHTML = legendary + ": " + response.chestCycle.legendary;
      
      assignChestImage(response.chestCycle.upcoming);
      console.log(answer);
      
      document.getElementById('nexts').innerHTML = "And this the order of your next 8 free chests: ";
      document.getElementById('next1').innerHTML = answer[0]; 
      document.getElementById('next2').innerHTML = answer[1];
      document.getElementById('next3').innerHTML = answer[2];
      document.getElementById('next4').innerHTML = answer[3];
      document.getElementById('next5').innerHTML = answer[4];
      document.getElementById('next6').innerHTML = answer[5];
      document.getElementById('next7').innerHTML = answer[6];
      document.getElementById('next8').innerHTML = answer[7];

    }); // End of RESPONSE return
  }); // End of ONCLICK FUNCTION
}); // End of DOCUMENT.READY

function assignChestImage(response){
  let arr = response;

  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case "wooden":
        answer.push("<img src='assets/images/chests/chest-wooden.png'>");
        break;
      case "silver":
        answer.push("<img src='assets/images/chests/chest-silver.png'>");
        break;
        case "gold":
        answer.push("<img src='assets/images/chests/chest-gold.png'>");
        break;
        case "epic":
        answer.push("<img src='assets/images/chests/chest-epic.png'>");
        break;
        case "giant":
        answer.push("<img src='assets/images/chests/chest-giant.png'>");
        break;
        case "legendary":
        arr.push("<img src='assets/images/chests/chest-legendary.png'>");
        break;
        case "magical":
        answer.push("<img src='assets/images/chests/chest-magical.png'>");
        break;
        case "supermagcal":
        answer.push("<img src='assets/images/chests/chest-supermagcal.png'>");
        break;
    }
  }
  return answer;
}