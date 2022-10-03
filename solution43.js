// Solution 43

let show_magicians = (magicians) => {
    magicians.forEach(
        (magician) => {
            console.log(magician);
        }
    )
}

let magicians = ["Harry Houdini", "David Blaine", "Teller", "Penn Jillette"];

show_magicians(magicians);

let make_great = (magicians) => {
    return magicians.map(
        (magician) => {
            return `The Great ${magician}`;
        }
    )
}

great_magicians = make_great(magicians);

show_magicians(magicians);
show_magicians(great_magicians);
    