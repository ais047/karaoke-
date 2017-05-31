var searchQuery = "queen"

 $.base64.utf8encode = true;

if (!window.btoa) window.btoa = $.base64.btoa
if (!window.atob) window.atob = $.base64.atob
/*    $.base64.utf8encode = true*/

    var token;
    var bearer;
    var expires_in;

var spotifyURL = "https://api.spotify.com/v1/search?q=" + searchQuery + "&type=artist&limit=1"
var spotifyKey = "b133885956ff4364a68a1ca5b4870d83";
console.log(spotifyURL)
var client_id = "b133885956ff4364a68a1ca5b4870d83";
var client_secret = "99ff078e0c5f4acf97129b81bcd33dbb"
var redirect_uri = "https://omnomon.github.io/karaoke-/"
var authorizeURL = "https://accounts.spotify.com/authorize?client_id=" + client_id + "&redirect_uri=" + redirect_uri + "&response_type=token&state=123"
// https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123
$(document).on("click", ".testButton", function() {
	console.log("test")
    $.ajax({
        url: authorizeURL,
        method: "GET" ,
        headers: {
            "Authorization" : "Bearer" + token
        }
    }).done(function(response) {
        console.log(response)
        $(".login").append($("<div>").html(response))
    })
})

/*$.ajax({
	url: "https://crossorigin.me/https://api.deezer.com/search?q=eminem",
	method: "GET"  
}).done(function(response){
	console.log(response)
})
*/
console.log("before ajax call")
$.ajax({
    url:"https://accounts.spotify.com/api/token",
    method: "POST", 
    data: {
        grant_type: "client_credentials"
    },
    beforeSend: function(request) {

        var authorize = "Basic "+  $.base64.btoa(client_id + ":" + client_secret)
        console.log(authorize)
        console.log("send xhr request")
     request.setRequestHeader("Authorization", authorize);
     }
    
}).done(function(response){
    console.log(response)
    token = response.access_token
    expires_in = response.expires_in
    bearer = response.token_type
})