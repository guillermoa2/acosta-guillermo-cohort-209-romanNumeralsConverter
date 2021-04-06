// Lists or Roman Numerals and Numbers, with matching indexes
let romans = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convertToRoman(num) {
//output List
  let output = []
  //Loop through decimals List 
  for (let i = 0; i < decimals.length; i++) {
    // While the given number is greater than or equal to the current decimal number...
    while(num >= decimals[i]) {
    // ...Subtract current decimal number from given number
      num -= decimals[i];
      // push the current decimal's matching index from the romans list to output List
      output.push(romans[i])
    }
  }
// return output array as a string
 return output.join('');
}

console.log(convertToRoman(36)); 