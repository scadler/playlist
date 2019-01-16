/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Friday",
    "Despacito",
    "Gangnam Style",
    "Dynamite",
    "Sandstorm",
    "Ultimate Showdown",
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var image_links = [
    "https://i.kym-cdn.com/entries/icons/medium/000/005/320/friday.jpg",
    "https://www.recordshopx.com/cover/normal/5/55/553148.jpg?cd",
    "https://vignette.wikia.nocookie.net/hitlerparody/images/a/ad/Gangnam_Style_Official_Cover.png/revision/latest/scale-to-width-down/200?cb=20121012154637",
    "https://www.whosampled.com/static/track_images_200/lr7710_2010919_1550967089.jpg",
    "https://i1.sndcdn.com/artworks-000087543799-rv3bhl-t200x200.jpg?e76cf77",
    "https://steamuserimages-a.akamaihd.net/ugc/448492965239699216/EF6F3BD5FA2A291B980DDB1BF58A2B1C11EFBAAF/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
];
var artists = [
    "Rebecca Black",
    "Luis Fonsi",
    "Psy",
    "Taio Cruz",
    "Darude",
    "Lemon Demon",
];
var songLengths = [
    "3:30",
    "3:47",
    "4:33",
    "3:22",
    "7:26",
    "3:34",
];
var song_links = [
    "https://www.youtube.com/watch?v=kfVsfOSbJY0",
    "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    "https://www.youtube.com/watch?v=9bZkp7q19f0",
    "https://www.youtube.com/watch?v=Vysgv7qVYTo",
    "https://www.youtube.com/watch?v=y6120QOlsfU",
    "https://www.youtube.com/watch?v=4WgT9gy4zQA",
];





function displaySongInfo() {
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>");
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    image_links.forEach(function(image_link) {
        $("#images").append(`<img src=" ${image_link} ">`);
    });
    artists.forEach(function(artist) {
        $("#artists").append("<p>" + artist + "</p>");
    });
    songLengths.forEach(function(songLength) {
        $("#lengths").append("<p>" + songLength + "</p>");
    });
    song_links.forEach(function(link, index) {
        $("#links").append(`<a href="  ${link} ">${songs[index]} </a>`);
    });
}

function emptySongInfo() {
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo() {
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays
    var imageLink = [];
    var imageSource = $('input#image').val();
    imageLink.push(imageSource);
    $('#images').empty();
    for (var i = 0; i < imageLink.length; i++) {
        $('#images').append(`<img src=" ${imageLink} ">`);
    }
    var songName = [];
    var song = $('input#songs').val();
    songName.push(song);
    $('#songs').empty();
    for (var i = 0; i < songName.length; i++) {
        $('#songs').append("<p>" + songName + "</p>");
    }
    var artistName = [];
    var name = $('input#artist').val();
    artistName.push(name);
    console.log(name);
    $('#artists').empty();
    for (var i = 0; i < artistName.length; i++) {
        $('#artists').append("<p>" + artistName + "</p>");
    }
    var songLength = [];
    var time = $('input#length').val();
    songLength.push(time);
    $('#lengths').empty();
    for (var i = 0; i < songLength.length; i++) {
        $('#lengths').append("<p>" + songLength + "</p>");
    }
    
    var URLS = [];
    var url = $('input#link').val();
    URLS.push(url);
    $('#links').empty();
    for (var i = 0; i < URLS.length; i++) {
        $('#links').append(`<a href="  ${URLS} ">${songName[0]} </a>`);
    }
}
$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});
