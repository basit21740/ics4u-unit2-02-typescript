/*
 * This is Factorial Program
 * 
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync() 

function factorial (denominator: number) {
  // this function is a factorial calculator.
  if (denominator === 0) {
    return 1
  } else if (denominator > 0) {
    const returnValue1: number = denominator * factorial(denominator - 1)
    return returnValue1
  } else {
    const returnValue2: number = denominator * factorial(denominator + 1)
    return returnValue2
  }
}
var answer = prompt('Input an integer: ') 
  try {
    const factorialNum: number = factorial(parseInt(answer))
    console.log('The factorial of ' + answer + ' is ' + factorialNum)
  } catch (exeption) {
    console.log('please insert an integer.')
  }
  console.log("\nDone.")
  
