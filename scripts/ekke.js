function getYoutube() {
    var yxhr = new XMLHttpRequest();
    var key = "AIzaSyAtO185zLEYwvnXo_fA4_MFJhwkTPBfaDo";
    var video_id

    // PROBLEM 1
    // reference site : https://developers.google.com/youtube/v3/guides/implementation/playlists


    // Part 1 (not needed??)
    // var url = 'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?' +
    //     'part=contentDetails' +
    //     '&id=UC1LupZh5xH3EATWUtHr07RA';
    // '&key=' + key;

    // Part 2 
    var url = 'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.playlists.list? +
    'part=snippet,contentDetails' +
        '&channelId=UC1LupZh5xH3EATWUtHr07RA';

    // Goal is to load most recently uploaded video in the playlist "videos"

    yxhr.open('GET', url, false);
    yxhr.onreadystatechange = function () {
        if (yxhr.readyState === XMLHttpRequest.DONE && yxhr.status === 200) {
            let objectYT = JSON.parse(yxhr.responseText);
            // video_id = objectYT.items[0].id.videoId;
        }
    }
    yxhr.send();
    return video_id;
}

function constructYT() {
    // call getYoutube
    // youtube_container.innerHTML = most recent upload in playlist "videos"
}
// PROBLEM 2
// reference website 1: https://www.instagram.com/developer/embedding/#oembed
// reference website 2: https://ariasthompson.com/2018/02/08/adding-instagram-feed-website-without-plugin/
// clientID: 8d0fe584f3d141af9193eb075656123b;

// goals:   
// either call whole feed (impossible??)
// or
// construct containers for 9 most recent IG post
// insta_container.innerHTML = loop for posts

function getInsta() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.instagram.com/oembed?url=https://www.instagram.com/itsekke/";
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let objectIG = JSON.parse(xhr.responseText);
            for (var i = 0; i < data.data.length; i++) {
                var container = document.getElementById('insta-feed');
                var imgURL = data.data[i].images.standard_resolution.url;
                var div = document.createElement('div');
                div.setAttribute('class', 'instapic');
                var insta_container = document.querySelector('#insta_container');
                insta_container.appendChild(div);
                var img = document.createElement('img');
                img.setAttribute('src', imgURL)
                div.appendChild(img);
            }

        }
    }
    xhr.send();
}
