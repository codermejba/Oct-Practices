// 1. Developer object
const developer = {
  name: "Mejba Hasan",
  age: 25,
  gender: "male",
  role: "Junior Web Developer",
  isAvailable: true,
};
console.log(developer);

//2. Skills array

const skills = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"];
console.log(skills);

// Score calculation function

/* 

Starting score: 1000

Every move:    -50 points
Every second:  -5 points
Minimum score: 100 

*/

function calculateScore(moves, time) {
  const score = 1000 - moves * 50 - time * 5;
  return Math.max(score, 100);
}

console.log(calculateScore(3, 10));
console.log(calculateScore(20, 50));

//4. filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//5. map()

const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);

//6. find()

const firstEvenNumber = numbers.find((num) => num % 2 === 0);
console.log(firstEvenNumber);

/* ================================================== */
/* ================================================== */

const games = [
  {
    name: "Card Memory",
    difficulty: "Easy",
  },
  {
    name: "Number Sequence",
    difficulty: "Medium",
  },
  {
    name: "Logic Puzzle",
    difficulty: "Hard",
  },
  {
    name: "Quick Quiz",
    difficulty: "Easy",
  },
];

// task - 1. Get all Easy games.

const easyGames = games.filter((items) => items.difficulty === "Easy");

console.log(easyGames);


//task - 2. Create a new array containing only the game names.

const gameNames = games.map((items) => items.name);
console.log(gameNames);

//task - 3. Find the game named "Number Sequence"

const numberSequence = games.find((items) => items.name === "Number Sequence");
console.log(numberSequence);