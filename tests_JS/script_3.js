

let number_floors;
let o = 1;
let u = "#"
number_floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

while (o <= number_floors) {
console.log(u.repeat(o));
o = o + 1;
}

