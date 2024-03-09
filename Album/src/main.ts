interface Album {

artist:string;
title:string;
tracks?:number;

}

function make_album(artist:string, title:string,tracks?:number): Album{

let album: Album = {

artist: artist,
title:title,
tracks: tracks 
};

return album;

};

let album1: Album = make_album("Travis Scott","UTOPIA");
let album2: Album = make_album("21 Savage","SAVAGE MODE II");
let album3: Album = make_album("Playboi Carti","Whole Lotta Red",14);

console.log(album1);
console.log(album2);
console.log(album3);