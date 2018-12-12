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
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    ];
var artists = [
    "Rebecca Black",
    "Luis Fonsi",
    "Psy",
    "Taio Cruz",
    "Darude",
    "f",
    ];
var songLengths = [
    "3:30",
    "3:47",
    "4:33",
    "3:22",
    "7:26",
    "f",
    ];
var song_links = [
    "https://www.youtube.com/watch?v=kfVsfOSbJY0",
    "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    "https://www.youtube.com/watch?v=9bZkp7q19f0",
    "https://www.youtube.com/watch?v=Vysgv7qVYTo",
    "https://www.youtube.com/watch?v=y6120QOlsfU",
    "f",
    ];





function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
