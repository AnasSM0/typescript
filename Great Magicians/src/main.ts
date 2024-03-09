let Magicians = ["Harry Houdini", "David Copperfield","Penn Jillette", "David Blaine","Criss Angel"];

function show_magicians(magicians:string []){

for (let i=0;i<magicians.length;i++){

console.log(`${magicians[i]}`);


}


};

function make_great(Magicians:string []){

for(let i=0;i<Magicians.length;i++){

    Magicians[i]="The Great " + Magicians[i];
}


};

make_great(Magicians);
show_magicians(Magicians);