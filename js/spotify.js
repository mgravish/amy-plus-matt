
$( document ).ready(function() {
    $.ajax({
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Authorization':'Basic ' + 'YzAxZmFkMzdhYWZlNGY3NjhiMmU5OGQ3NDY3YzRjODU6Yjc4ZjFkNTVmZjk2NGM4OGIxNzZkMDJkYWU2NDgxZGY="'
        },
        method: 'POST',
        dataType: 'json',
        data: {
            grant_type:'client_credentials'
        }
    });
});

var spotifyApi = new SpotifyWebApi();

function keyHandler(e) { 
    var keycode = e.charCode || e.keyCode;
    if (keycode  == 13) {
        searchSong($('input').val());
    }
}

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

