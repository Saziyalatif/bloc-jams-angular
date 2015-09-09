
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';

var createSongRow = function(songNumber, songName, songLength) {

    var template =
        '<tr class="album-view-song-item">' + '  <td class="song-item-number">' + songNumber + '</td>' + '  <td class="song-item-title">' + songName + '</td>' + '  <td class="song-item-duration">' + songLength + '</td>' + '</tr>';

    var $row = $(template);

    var clickHandler = function() {

        var songNumber = parseInt($(this).attr('data-song-number'));

        if (currentlyPlayingSongNumber !== null) {
            // Revert to song number for currently playing song because user started playing new song.
            var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
            currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
            currentlyPlayingCell.html(currentlyPlayingSongNumber);
        }

        if (currentlyPlayingSongNumber !== songNumber) {
            // Switch from Play -> Pause button to indicate new song is playing.
            setSong(songNumber);
            currentSoundFile.play();
            
            $(this).html(pauseButtonTemplate);
            updatePlayerBarSong();
              
            currentlyPlayingSongNumber = songNumber;
            currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
            $('.left-controls .play-pause').html(playerBarPauseButton);
        }

        else if (currentlyPlayingSongNumber === songNumber) {
            if (currentSoundFile.isPaused()) {
+                $(this).html(pauseButtonTemplate);
+                $('.left-controls .play-pause').html(playerBarPauseButton);
+                currentSoundFile.play();
+            } else {
+                $(this).html(playButtonTemplate);
+                $('.left-controls .play-pause').html(playerBarPlayButton);
+                currentSoundFile.pause();   

}
    };
    var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');
        $row.find('.song-item-number').click(clickHandler);
        $row.hover(onHover, offHover);
        return $row;
    };
    
    if (songNumber !== currentlyPlayingSongNumber) {
        songNumberCell.html(playButtonTemplate);
    }
};
    var setCurrentAlbum = function(album) {
        currentAlbum = album;

        var $albumTitle = $('.album-view-title');
        var $albumArtist = $('.album-view-artist');
        var $albumReleaseInfo = $('.album-view-release-info');
        var $albumImage = $('.album-cover-art');
        var $albumSongList = $('.album-view-song-list');

        $albumTitle.text(album.name);
        $albumArtist.text(album.artist);
        $albumReleaseInfo.text(album.year + ' ' + album.label);
        $albumImage.attr('src', album.albumArtUrl);



        $albumSongList.empty();


        for (i = 0; i < album.songs.length; i++) {
            var $newRow = createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
            $albumSongList.append($newRow);
        }
    };
    
    var trackIndex = function(album, song) {
     return album.songs.indexOf(song);
 };

    var element =


        $(document).ready(function() {

            setCurrentAlbum(albumPicasso);
             $previousButton.click(previousSong);
            $nextButton.click(nextSong);

            var onHover = function(event) {
                var songNumberCell = $(this).find('.song-item-number');
                var songNumber = songNumberCell.attr('data-song-number');

                if (songNumber !== currentlyPlayingSongNumber) {
                    songNumberCell.html(playButtonTemplate);
                }
            };

            var offHover = function(event) {
                var songNumberCell = $(this).find('.song-item-number');
                var songNumber = songNumberCell.attr('data-song-number');
                if (songNumber !== currentlyPlayingSongNumber) {
                    songNumberCell.html(songNumber);
                    console.log("songNumber type is " + typeof songNumber + "\n and currentlyPlayingSongNumber type is " + typeof currentlyPlayingSongNumber);
...
    }
};

        
            $row.find('.song-item-number').click(clickHandler);
            $row.hover(onHover, offHover);

        });


    window.onload = function() {
        album - covers container.addEventListener("toggle", albumPicasso, albumMarconi, albumMaroon5);
    };

    for (i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
    }

};

};
};
};


var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;
var currentSoundFile = null;
var currentVolume = 80;
var $previousButton = $('.left-controls .previous');
var $nextButton = $('.left-controls .next');


$(document).ready(function() {

            window.onload = function() {
                    for (i = 0; i < songRows.length; i++) {
                        songRows[i].addEventListener('mouseleave', function(event) {
                            var leavingSongItem = getSongItem(event.target);
                            var leavingSongItemNumber = leavingSongItem.getAttribute('data-song-number');
                            if (leavingSongItemNumber !== currentlyPlayingSong) {
                                leavingSongItem.innerHTML = leavingSongItemNumber;
                            }
                        });


                });
        }
        var updatePlayerBarSong = function() {

            $('.currently-playing .song-name').text(currentSongFromAlbum.name);
            $('.currently-playing .artist-name').text(currentAlbum.artist);
            $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.artist);
            $('.left-controls .play-pause').html(playerBarPauseButton);

        };
        
        var playerBarPlayButton = '<span class="ion-play"></span>';
        var playerBarPauseButton = '<span class="ion-pause"></span>';
        
       var nextSong = function() {
    
    var getLastSongNumber = function(index) {
        return index == 0 ? currentAlbum.songs.length : index;
    };
    
    var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    // Note that we're _incrementing_ the song here
    currentSongIndex++;
    
    if (currentSongIndex >= currentAlbum.songs.length) {
        currentSongIndex = 0;
    }
    
    // Set a new current song
    currentlyPlayingSongNumber = currentSongIndex + 1;
    currentSongFromAlbum = currentAlbum.songs[currentSongIndex];

    // Update the Player Bar information
    $('.currently-playing .song-name').text(currentSongFromAlbum.name);
    $('.currently-playing .artist-name').text(currentAlbum.name);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.name);
    $('.left-controls .play-pause').html(playerBarPauseButton);
    
    var lastSongNumber = getLastSongNumber(currentSongIndex);
    var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
    var $lastSongNumberCell = getSongNumberCell(lastSongNumber);
    
    $nextSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
    
};
var songNumber = parseInt($(this).attr('data-song-number'));

var setSong = function (songNumber){
     if (currentSoundFile) {
        currentSoundFile.stop();
    }
    currentlyPlayingSongNumber = parseInt(songNumber);
    currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
    currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
    
        formats: [ 'mp3' ],
        preload: true
    });
    
     setVolume(currentVolume);
};

setSong();

var setVolume = function(volume) {
 
     if (currentSoundFile) {
         currentSoundFile.setVolume(volume);
     }
 
 };

var getSongNumberCell = function (number){
    
    
};

getSongNumberCell ();

var previousSong = function() {
    setSong(currentSongIndex + 1);
    currentSoundFile.play();
    updatePlayerBarSong();
};

var nextSong = function() {
    setSong(currentSongIndex + 1);
    currentSoundFile.play();
    updatePlayerBarSong();
};

var  togglePlayFromPlayerBar = function (){
    
    
};