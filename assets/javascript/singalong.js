var searchQuery = "queen"


var spotifyURL = "https://api.spotify.com/v1/search?q=" + searchQuery + "&type=artist&limit=1"
var spotifyKey = "b133885956ff4364a68a1ca5b4870d83";
console.log(spotifyURL)
var client_id = "b133885956ff4364a68a1ca5b4870d83";
var redirect_uri = "file:///C:/Users/Jesse/Desktop/code/karaoke-/index.html"
var authorizeURL = "https://accounts.spotify.com/authorize?client_id=" + client_id + "&redirect_uri=" + redirect_uri + "&response_type=token"

$(document).on("click", ".testButton", function() {
	console.log("test")
    $.ajax({
        url: authorizeURL,
        method: "GET"
    }).done(function(response) {
        console.log(response)
    })
})

$.ajax({
	url: "https://api.deezer.com/search?q=eminem",
	method: "GET"
}).done(function(response){
	console.log(response)
})
