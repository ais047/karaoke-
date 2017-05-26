var text = "[00:22.31] Take me down to the paradise city [00:25.01] Where the grass is green [00:27.36] And the girls are pretty [00:30.07] Take me home"
var textsplit = text.split('[');
//first 8 are number, 9= ], 10 = " "
textsplit = textsplit.splice(1);

var timestamps = [];
var lyrics = [];
console.log(textsplit);
var testArray =[]
for (let value of textsplit) {
	testArray = value.split("] ")
	timestamps.push(testArray[0])
	lyrics.push(testArray[1])
}

