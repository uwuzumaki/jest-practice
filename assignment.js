const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

const caesarCipher = (string, shift) => {
  const stringArr = string.split("");
  return stringArr
    .map((char) => {
      const value = char.charCodeAt(0);
      console.log(value);
      //Checks for case
      if (value >= 97 && value <= 122) {
        //Checks for wrapping of lower case characters
        if (value + shift > 122) {
          return String.fromCharCode(97 + (122 + shift - 123));
        } else return String.fromCharCode(value + shift);
        //Checks for wrapping of upper case characters
      } else if (value >= 65 && value <= 90) {
        if (value + shift > 90) {
          return String.fromCharCode(65 + (90 + shift - 91));
        } else return String.fromCharCode(value + shift);
      } else return String.fromCharCode(value);
    })
    .join("");
};

const analyzeArray = (array) => {
  const sortedA = array.sort((a, b) => a - b);
  const length = sortedA.length;
  const average = array.reduce((value, current) => value + current, 0) / length;
  return {
    average: average,
    min: sortedA[0],
    max: sortedA[length - 1],
    length: length,
  };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
