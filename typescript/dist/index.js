// write a js fucntion that accepts a string as a parameter and count the number of vowels within the string
const vowelsCounter = (input) => {
    const lowerCase = input.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let word of lowerCase) {
        if (vowels.includes(word)) {
            count++;
        }
    }
    return count;
};
const output = 'nehal';
console.log(`numbers of vowels in this sentence is : ${vowelsCounter(output)}`);
export {};
