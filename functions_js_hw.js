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
