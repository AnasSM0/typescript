"use strict";
let Magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "David Blaine", "Criss Angel"];
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`${magicians[i]}`);
    }
}
;
show_magicians(Magicians);
