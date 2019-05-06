// Ep 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// EXPECTED: I expect to see the string of 'The murderer is Miss Scarlet'

// ACTUAL: The murderer is Miss Scarlet.

// Ep 2
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// EXPECTED: On line 21, you are attempting to change the value of a const variable after the = sign. Therefore, I expect an error which says you can't change the value of the const var.

// ACTUAL: murderer = 'Mrs. Peacock';
//            ^
//
// TypeError: Assignment to constant variable.


// Ep 3
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// EXPECTED: no errors so expected is:
// First Verdict:  The murderer is Mrs. Peacock.
// Second Verdict:  The murderer is Professor Plum.

// ACTUAL: First Verdict:  The murderer is Mrs. Peacock.
// Second Verdict:  The murderer is Professor Plum.


// Ep 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// EXPECTED: maybe an error with the let variables, not sure if the first console log will like the fact that the let variable has changed only within the function block. If no error:
// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// Suspect three is Mrs. Peacock.

// ACTUAL: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// Suspect three is Mrs. Peacock.


// Ep 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// EXPECTED: No errors so the result should be "The weapon is the Revolver."

// ACTUAL: The weapon is the Revolver.


// Ep 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// EXPECTED: calling the changeMurderer const variable last so the result should be "The murderer is Mr Green"

// ACTUAL: The murderer is Mrs. White.
