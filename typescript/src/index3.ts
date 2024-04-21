// write a js function to find the first not repeat character

const noRepeartChars = (str: any) => {
  let count: any = {};

  for (let character of str) {
    if (count[character]) {
      count[character]++;
    } else {
      count[character] = 1;
    }
  }

  for (let character of str) {
    if (count[character] === 1) {
      return character;
    }
  }
  return null;
};

console.log(noRepeartChars("aabbccddeeffyy"));
