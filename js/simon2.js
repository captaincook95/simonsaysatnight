var combinationEncoded = 3230057076;
HTTP_GET_VARS=new Array();
strGET=document.location.search.substr(1,document.location.search.length);
if(strGET!='')
    {
    gArr=strGET.split('&');
    for(i=0;i<gArr.length;++i)
        {
        v='';vArr=gArr[i].split('=');
        if(vArr.length>1){v=vArr[1];}
        HTTP_GET_VARS[unescape(vArr[0])]=unescape(v);
        }
    }
var code = HTTP_GET_VARS["code"];
code = "" + code + (2*code) + (3*code) + (4*code);
var combinationDecoded = combinationEncoded + parseInt(code);
combinationDecoded = "" + combinationDecoded;
var combinationArray = [];
for (var i = 0; i < combinationDecoded.length; i++){
	switch(combinationDecoded.charAt(i)){
		case '1':
		combinationArray.push('#blue');
		break;
		case '2':
		combinationArray.push('#red');
		break;
		case '3':
		combinationArray.push('#dark');
		break;
		case '4':
		combinationArray.push('#green');
		break;
	}
}

var timer;
var game = {
  count: 0,
  possibilities: ['#green','#blue', '#red', '#dark'],
  currentGame: combinationArray,
  player: [],
  sound:{
    blue: new Audio('audio/blue_e4.mp3'), 
    red: new Audio('audio/red_a4.mp3'), 
    dark: new Audio('audio/yellow_cis1.mp3'), 
    green: new Audio('audio/green_e3.mp3')
  }
}

function clearGame() {
  game.count = 0;
  game.player = [];
  addCount();
}

function newGame() {
  clearGame();
  timer = 60;
}

function sound(name) {
  switch(name) {
    case'#green':
      game.sound.green.play();
      break;
    case '#blue':
      game.sound.blue.play();
      break;
    case '#red':
      game.sound.red.play();
      break;
    case '#dark':
      game.sound.dark.play();
      break;
  };
}

function playGame(field) {
  $(field).addClass('hover');
  sound(field);
  setTimeout(function(){
      $(field).removeClass('hover');
  }, 300);
}

function clearPlayer() {
  game.player = [];
}

function addToPlayer(id) {
  var field = "#"+id
  console.log(field);
  game.player.push(field);
  playerTurn(field);
} 

function playerTurn(x) {	
  if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
      alert("Falsche Eingabe");
	  location.href="coords.html?code=" + code;
   } else {
      sound(x);
      var check = game.player.length === game.count;
      if (check) {
        if(game.count == 10){
          //alert('You won! Congrats.');
		  location.href="coords2.html?key=" + (code);
        } else {
          //alert('Next round!');
          nextLevel();
        }
      }
    }
} 

function nextLevel() {
  addCount();
  timer = 63;
  game.player = [];
  $('#clickNumber').text("OK");
}


function addCount() {
  game.count++;
}

function startTimer(duration, display) {
    timer = duration;
	var	minutes, seconds;
    setInterval(function () {
		if (timer > 0){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (timer > duration){
			display.text("OK");
		}else{
			display.text(minutes + ":" + seconds);
		}
		
		timer--;
		
        } else {
			alert("Zeit abgelaufen");
			location.href="coords.html?code=" + code;
		}
    }, 1000);
}


newGame();
startTimer(60,$('#clickNumber'));