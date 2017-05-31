var searchQuery = "queen"


var spotifyURL = "https://crossorigin.me/https://api.spotify.com/v1/search?q=" + searchQuery + "&type=artist&limit=1"
var spotifyKey = "b133885956ff4364a68a1ca5b4870d83";
console.log(spotifyURL)
var client_id = "b133885956ff4364a68a1ca5b4870d83";
var redirect_uri = "https://crossorigin.me/https://omnomon.github.io/karaoke-/"
var authorizeURL = "https://accounts.spotify.com/authorize?client_id=" + client_id + "&redirect_uri=" + redirect_uri + "&response_type=token&state=123"
"https://accounts.spotify.com/authorize?  client_id=5fe01282e94241328a84e7c5cc169164&  redirect_uri=http:%2F%2Fexample.com%2Fcallback&  response_type=token&state=123"

$(document).on("click", ".testButton", function() {
	console.log("test")
    $.ajax({
        url: authorizeURL,
        method: "GET"
    }).done(function(response) {
        console.log(response)
        $(".login").append($("<div>").html(response))
    })
})

$.ajax({
	url: "https://crossorigin.me/https://api.deezer.com/search?q=eminem",
	method: "GET"
}).done(function(response){
	console.log(response)
})
