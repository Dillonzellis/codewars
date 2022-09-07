// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

const totalGames1 = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];

const totalGames2 = [
  "1:1",
  "2:2",
  "3:3",
  "4:4",
  "2:2",
  "3:3",
  "4:4",
  "3:3",
  "4:4",
  "4:4",
];

const totalGames3 = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "1:3",
  "1:4",
  "2:3",
  "2:4",
  "3:4",
];

const points = (games) => {
  let arX = [];
  let arY = [];

  let totalPoints = 0;

  games.map((item) => {
    const values = item.split(":");

    arX.push(values[0]);
    arY.push(values[1]);
  });

  const compareArr = (ar1, ar2) => {
    for (let i = 0; i < ar1.length; i++) {
      if (ar1[i] > ar2[i]) {
        totalPoints += 3;
      } else if (ar1[i] < ar2[i]) {
        totalPoints + 0;
      } else if (ar1[i] == ar2[i]) {
        totalPoints += 1;
      }
    }
    return totalPoints;
  };

  compareArr(arX, arY);

  return totalPoints;
};

console.log(points(totalGames1));
console.log(points(totalGames2));
console.log(points(totalGames3));
