var text = "[12:22.31] Take me down to the paradise city [00:25.01] Where the grass is green [00:27.36] And the girls are pretty [00:30.07] Take me home"
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
	console.log(milli);

	tonumber.push(milli);
}


console.log(tonumber);