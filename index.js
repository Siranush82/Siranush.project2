import readlineSync from 'readline-sync';

import colors from 'colors';
console.log('\n Hello'.underline.green); 




console.log("\n Willkommen zum Namensratespiel!" .rainbow);
console.log("\n Das Ziel des Spiels ist es, den richtigen Namen zu erraten." .red);



const correctName = "Anna"; 
let attempts = 0;
let guessedCorrectly = false;

while (!guessedCorrectly) {

    
    const User = readlineSync.question(" Gib einen Namen ein: " .magenta);
    attempts++;

    
    if (User.toLowerCase() === correctName.toLowerCase()) {
        console.log(`Herzlichen Glückwunsch! Du hast den Namen '${correctName}' in ${attempts} Versuchen erraten.` .red);
        guessedCorrectly = true;
    } else {
        if (!User.toLowerCase().startsWith('a')) {
            console.log("Der Name muss mit dem Buchstaben 'A' beginnen. Versuche es erneut." .bgMagenta);
        } else if (User.length !== 4) {
            console.log("Der Name muss genau 4 Buchstaben lang sein. Versuche es erneut." .bgMagenta);
        } else if (User[1].toLowerCase() !== 'n') {
            console.log("Der zweite Buchstabe des Namens muss 'N' sein. Versuche es erneut." .bgMagenta);  
        } else {
            console.log("Der Name enthält nur die Buchstaben 'A' und 'N'. Versuche es erneut." .bgMagenta); 
        }
    }
}



console.log("\n Jetzt musst du Annas Alter erraten!" .green);
const correctAge = 25; 
let ageGuessedCorrectly = false;

while (!ageGuessedCorrectly) {
    const userAge = readlineSync.questionInt("Wie alt ist Anna? " .cyan);

    if (userAge === correctAge) {
        console.log(`Richtig! Anna ist ${correctAge} Jahre alt.` .red);
        ageGuessedCorrectly = true;
    } else if (userAge < correctAge) {
        console.log("Anna ist älter. Versuche es erneut." .cyan);
    } else {
        console.log("Anna ist jünger. Versuche es erneut." .cyan);
    }
}




console.log("\n Willkommen zum Quiz-Spiel!" .rainbow);
console.log("\n Beantworte die Fragen und sammle Punkte für jede richtige Antwort." .bgBlue);


const questions = [
    {
        question: "Wie alt ist Anna?",
        options: ["a) 25", "b) 32", "c) 28", "d) 30"],
        correctAnswer: "a"
    },
    {
        question: "Wo wohnt Anna(im Hauptstadt von Deutscland)?",
        options: ["a) München", "b) Hamburg", "c) Berlin", "d) Frankfurt"],
        correctAnswer: "c"
    },
    {
        question: "Was ist die Hauptstadt von Frankreich?",
        options: ["a) Paris", "b) Lyon", "c) Marseille", "d) Toulouse"],
        correctAnswer: "a"
    },
    
    {
        question: "Was ist die Hauptstadt von Spanien?",
        options: ["a) Madrid", "b) Barcelona", "c) Valencia", "d) Sevilla"],
        correctAnswer: "a"
    },
    {
        question: "Was ist die Hauptstadt von Japan?",
        options: ["a) Tokio", "b) Osaka", "c) Kyoto", "d) Hiroshima"],
        correctAnswer: "a"
    }
];

let score = 0;

questions.forEach((q) => {
    console.log(`Frage : ${q.question}`);
    q.options.forEach(option => console.log(option));

    const userAnswer = readlineSync.question("Deine Antwort (a, b, c, d): ").toLowerCase();

    if (userAnswer === q.correctAnswer) {
        console.log("Richtig! Du bekommst einen Punkt.\n");
        score++;
    } else {
        console.log("Falsch! Die richtige Antwort war: " + q.correctAnswer + "\n");
    }
});

console.log(`Spiel beendet! Du hast insgesamt ${score} Punkte erzielt.` .red);

console.log("\n Danke fürs Spielen! Bis zum nächsten Mal." .rainbow);

