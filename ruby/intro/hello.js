// This is a comment.

console.log(4 * 4); // This would evaluate to 8.

function square(n) {
  if (n > 7) console.log("It's huge!");
  return n * n;
}

function double(n) {
  if (!(n % 2 === 0)) console.log(`${n} is odd!`);
  return n * 2;
}

// const square = n => n * n;

console.log(square(7));
console.log(square(8));

console.log(double(5));
console.log(double(6));

let n = 0;

// n++;

n += 1;

console.log(n);

n = 42;

console.log(n);

const PHI = 1.61803399;

// PHI = 1.618;

console.log(3 * PHI);

const fibb = [1, 1, 2, 3, 5, 8, 13, 21, 34];

for (let i = 0; i < fibb.length; i++) {
  console.log(fibb[i]);
}

fibb.forEach(n => console.log(n));

const eyeColors = {
  "Matt C": "Brown",
  "Karsten R": "Blue",
  "Ben J": "Grey",
  "Jason P": "Hazel"
};

console.log(eyeColors);
