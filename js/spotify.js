var Spotify = require('spotify-web-api-js');
var spotifyApi = new SpotifyWebApi();
var s = new Spotify();

spotifyApi.setAccessToken('BQBXS5G2oxNARykcBUNqcHTFKIvyFCIPjbqK5t9bPRrNyPAy2S5jbEui35ATFiB-vgWlg1ggjEW0szmzHRzu7AxF_2Y_GqZPng9s0Rwb4rY7sCpxVNrxcStjEvk6vo-AYCGBMyWq_xorGL0gBpGNL_8dYTa5kKY&refresh_token=AQAyJtIcW7ePj8yBgVMeWl6OAgtQNI4FBNhL_LYqUsxAjvxw9oRZPbJ8NVa1PZhIHGUM4W5mNSfj81RNmX0MconhUtPiolYYpb9z4GMMdWcLnkSwjc5RLd-_m3XLxwHcO3Q');

function keyHandler(e) { 
    var keycode = e.charCode || e.keyCode;
    if (keycode  == 13) {
        searchSong($('input').val());
    }
}

window.keyHandler = keyHandler;

function getTopTracks(access_token) {
  $.ajax({
    url: 'https://api.spotify.com/v1/me/top/tracks?limit=10',
    headers: {
      'Authorization': 'Bearer ' + access_token
    },
    success: function(response) {
      $(".recommendations").show();
      mapOverSongs(response.items);
    }
  });
}

function searchSong(searchstring){
    spotifyApi.search(searchstring,["track"])
      .then(function(data) {
        parseResults(data);
        console.log(data);
      }, function(err) {
        console.error(err);
        console.log("yarghhhh");
      });
}

function parseResults(data)
{
     var resultDiv = `
    <div class="results">
        <img/>
        <p id="band-name">
        <p id="track-name">
    </div>
    `;
    
    $('#search-results').empty();
    var trackObj = data.tracks.items[0];
    var bandName = trackObj.artists[0].name;
    var trackName = trackObj.name;
    var albumURL = trackObj.album.images[0].url;
    
    $('#search-results').append(resultDiv);
    $('.info').find('p')[0].append(bandName);
    $('.info').find('p')[1].append(trackName);
    var art = $('.art').find('img')[0];
    $(art).attr("src", albumURL);
}

