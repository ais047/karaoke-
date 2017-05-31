var text = "[00:02.31] Take me down to the paradise city [00:05.01] Where the grass is green [00:07.36] And the girls are pretty [00:30.07] Take me home"
var textsplit = text.split('[');
//first 8 are number, 9= ], 10 = " "
textsplit = textsplit.splice(1);

//-------------------------------------------------------------------
//
// Split a given string into lyrics and timestamps 
//
//-------------------------------------------------------------------

var timestamps = [];
var lyrics = [];
console.log(textsplit);
var testArray =[]
for (let value of textsplit) {
  testArray = value.split("] ")
  timestamps.push(testArray[0])
  lyrics.push(testArray[1])
}

var tonumber =[];

for(var i = 0; i < timestamps.length; i++){
  var timestampsholde=[];
  timestampsholde = timestamps[i].split('');
  console.log(timestampsholde);
  var minutes= timestampsholde[0] + timestampsholde[1];
  var millisec = timestampsholde[3] + timestampsholde[4] + timestampsholde[6] + timestampsholde[7]+ "0";
  var milli =  (parseInt(minutes) * 60 * 1000) +  parseInt(millisec);
  tonumber.push(milli);
}

console.log(tonumber);


window.onload = function() {

  $("#pause").click(timer.stop);
  $("#reset").click(timer.reset);
  $("#play").click(timer.start);
};

var intervalId;
var timestart = false;
var counter = 0;

var timer = {

  time: 0,

  reset: function() {

    timer.time = 0;
    timestart=false;
    $("#display").html("0000");
    counter=0;
    $("#prev").text("-");
    $("#current").text("-");
    $("#next").text("-");

  },

  start: function() {
  if(timestart == false){
    intervalId = setInterval(timer.count, 1000);
    timestart = true;
  }
    
  },
  stop: function() {
    clearInterval(intervalId);
    timestart = false;
  },

  count: function() {
    timer.time++;
    $("#display").html(timer.time);

    if(1000*timer.time > tonumber[counter]){
      if(counter === 0){
        $("#prev").text("-");
      }
      else{
        $("#prev").text(lyrics[counter-1]);
      }

      $("#current").text(lyrics[counter]);
      
      if(counter === tonumber.length-1){
        $("#next").text("-");
      }
      else{
      $("#next").text(lyrics[counter+1])
      }
      counter++;

    }

  }
};
