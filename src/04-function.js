/**
 * This function generates a personalized message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Personalized message for the user.
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // message will be "Hey Jack, at 25, you are in the prime of your life!"
 */
generateMessage = (name,age) =>{
    let messageToUser = `Hey ${name}, at ${age}, you are in the prime of your life!`
    console.log(messageToUser);

}
generateMessage("Jack",33)


/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */

/// denne er bare copy pasted mere eller mindre....

titleCase = (str) => {
    const arr = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        const str2 = arr.join(" ");
        return str2
}
    }
titleCase('Benjamin er den bedste lærer')


/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */

sumOfRange = (start,end) =>{
 let sumOfNumbers = 0;
    for (let i = start; i < end+1; i++){
        sumOfNumbers = sumOfNumbers += i
    }
    return sumOfNumbers;

}

sumOfRange(1,22)

