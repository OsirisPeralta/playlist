/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Fighting Gold","Solo Quiero de Ti", "Agafant L'Horitzo", "BAAM"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imageLinks = [
    "https://m.media-amazon.com/images/I/91Ozac3gv8L._SS500_.jpg",
    "https://t2.genius.com/unsafe/221x221/https%3A%2F%2Fimages.genius.com%2F359e9caa8d1de7511f4bb490a9183037.800x800x1.jpg",
    "https://www.viasona.cat/imatges/discos/txarango-agafant-horitzo.jpg",
    "https://i1.sndcdn.com/artworks-000370882212-l5fv20-t500x500.jpg"];
var artists = ["Coda","La Raiz","Many Catalan Artists","MOMOLAND"];
var lengths = ["4:14","2:43","4:49","3:33"];
var links = [
"https://www.youtube.com/watch?v=rGfAyOFUdEY",
"https://www.youtube.com/watch?v=Ypg-8o5Ogzg",
"https://youtu.be/e2pEx7PAb30",
"https://www.youtube.com/watch?v=txWmd7QKFe8"];

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    var title = $("#song").val();
    var imgLink = $("#image").val();
    var artistName = $("#artist").val();
    var duration = $("#length").val();
    var songLink = $("#links").val();

    songs.push(title);
    artists.push(artistName);
    imageLinks.push(imgLink);
    lengths.push(duration);
    links.push(songLink);

    emptySongInfo()
    displaySongInfo();
}

function displaySongInfo(){
    songs.forEach(function(song){
    $("#songs").append("<p>" + song + "</p>");
    });
    imageLinks.forEach(function(img){
    $("#images").append("<img src='" + img + "'>");
    });
    artists.forEach(function(artist){
    $("#artists").append("<p>" + artist + "</p>");
    });
    lengths.forEach(function(length){
    $("#lengths").append("<p>" + length + "</p>");
    });
    links.forEach(function(link){
    $("#links").append("<a href='" + link + "'> Song Link </a>");
    });
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
});

displaySongInfo();