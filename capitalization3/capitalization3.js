const name = "krestine";

const letter = name.substring(2, 6);

const upperCase = letter.toUpperCase();

const newName = name.replace(letter, upperCase);

console.log(newName);

// ved ikke om jeg måtte bruge replace her, men vidste ikke lige hvordan jeg skulle lave den uden
