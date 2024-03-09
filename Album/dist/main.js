"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    return album;
}
;
let album1 = make_album("Travis Scott", "UTOPIA");
let album2 = make_album("21 Savage", "SAVAGE MODE II");
let album3 = make_album("Playboi Carti", "Whole Lotta Red", 14);
console.log(album1);
console.log(album2);
console.log(album3);
