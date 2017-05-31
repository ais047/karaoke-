var searchQuery = "queen"


var spotifyURL = "https://crossorigin.me/https://api.spotify.com/v1/search?q=" + searchQuery + "&type=artist&limit=1"
var spotifyKey = "b133885956ff4364a68a1ca5b4870d83";
console.log(spotifyURL)
$.ajax({
    url: spotifyURL,
    method: "GET"
}).done(function(response) {
    console.log(response.artists.items[0])
})



//search list?
var searchfor = ["q_artist", "q_track"];
function grabSongAndArtist(song, artist) {
    this.song = song
    this.artist = artist 
}


var musixMatchKey = "efae639020096342d2756d4d332283bf";
var musixMatchURL = "https://api.musixmatch.com/ws/1.1/track.search?" + searchfor[0] + "=" + searchQuery + "&page_size=10&page=1&s_track_rating=desc&format=JSONP&apikey=" + musixMatchKey
$.ajax({
    url: musixMatchURL,
    dataType: "JSONP",
    type: "GET"
}).done(function(response) {
    var plswork = response.message.body.track_list;
    console.log(plswork);
    for (var i = 0; i < plswork.length; i++) {
        var hasSubs;
        if (plswork[i].track.has_subtitles == 1) {
            hasSubs = "Yes";
        } else {
            hasSubs = "No";
        }
        var container = $("<div>").addClass("selectThisSong");
        container
            .attr("songName", plswork[i].track.track_name)
            .attr("songArtist", plswork[i].track.artist_name)
            .append($("<div>").html("<button><img src='" + plswork[i].track.album_coverart_100x100 + "''></img></button>"))
            .append($("<div>").html("Artist: " + plswork[i].track.artist_name + "<br> Album Name: " + plswork[i].track.album_name +
            "<br> Track Name: " + plswork[i].track.track_name + "<br> Has Subtitles: " + hasSubs));


        $(".songs").append(container);
        $(".songs").append("<br>");
    }

        $(".selectThisSong").click(function(event) {
            var song
            var artist; 

            var passToNextFunction = new grabSongAndArtist(song, artist)
            passToNextFunction.song = $(this).attr("songName")
            passToNextFunction.artist = $(this).attr("songArtist")
            console.log(passToNextFunction)
            return passToNextFunction

        })
})
