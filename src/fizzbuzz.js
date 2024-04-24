const answer = []

// Write your code below this line
for (let number = 1; number <= 15; number++) {
  if (number % 15 === 0) {
    answer.push('FizzBuzz')
 } else if (number % 3 === 0) {
     answer.push('Fizz')
 } else if (number % 5 === 0) {
    answer.push('Buzz')
 } else answer.push(number)
}
console.log(answer)
// Don't touch the code below this line, we'll cover it later
module.exports = answer