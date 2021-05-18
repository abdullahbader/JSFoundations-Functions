/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log(`Hello ${name}`) 
  

}

//greet("abdullah")


/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if ((n%2 > 0)){
  return true}
  else{
    return false
  }
  }


isOdd(10)
isOdd(9)

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  if ((n%2 === 0)){
    return (n / 2)}
    else{ 
      return ((n / 2) - 0.5 )
    }
}
oddsSmallerThan(10)
oddsSmallerThan(9)


/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if ((n%2 > 0)){
    return (n * n)}
    else{
      return (n * 2)
    }

}

squareOrDouble(9)
squareOrDouble(4) 

  // Your code here node functions.js


module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };

