// Task 1:
// Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(str) {
  const num = Number(str); // try to convert
  return Number.isNaN(num) // check if conversion failed
    ? "Not a number"
    : num;
}

let type = stringToNumber("Bismit")

// console.log(type);



// Task 2:

// Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
function flipBoolean(Bol){

  const changedInput = Boolean(Bol);
  const flipped = !changedInput;
  return flipped;

}

let result= flipBoolean(true);

// console.log(result);


// Task 3:

// Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
function whatAmI(input){
  // First convert the input if needed
  const asNumber = Number(input); //convert to number
  const asString = String(input); // convert to string


  //check if it is a Valid Number
  if (!Number.isNaN(asNumber)){ // if conversion to number worked. the conversion to number didnot fail.
    return "I am a Number";
  }

  if(typeof asString === "string"){
    return "I am a String";
  }
}


// Task 4:

// Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

let valueInput = 0;
function isItTruthy(valueInput){

  const asBoolean = Boolean(valueInput);
  if(asBoolean === true){
    return "It's truthy";
  }
  else{
    return "It's Falsey";
  }
}
let hello= isItTruthy(0);

console.log(hello);

