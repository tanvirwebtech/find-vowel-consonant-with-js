function isVowel(text) {
    if (text == "a") {
        extractedVowls.push(text);
        return true;
    } else if (text == "e") {
        extractedVowls.push(text);
        return true;
    } else if (text == "i") {
        extractedVowls.push(text);
        return true;
    } else if (text == "o") {
        extractedVowls.push(text);
        return true;
    } else if (text == "u") {
        extractedVowls.push(text);
        return true;
    } else {
        extractedCons.push(text);
    }
}

const testText = "javascriptloops"; //given word

let extractedVowls = []; //Here vowels stored
let extractedCons = []; //Here Consonant stored
let convertedArray = []; // extracted letter goes here

//Extracting letters with while loop to an array from given word
let i = 0;
while (i < testText.length) {
    convertedArray.push(testText[i]);
    i++;
}
convertedArray.forEach(isVowel); //calling isVowel function for every element of convertedArray

// Showing Vowels with For LOOP
for (let i = 0; i < extractedVowls.length; i++) {
    let element = extractedVowls[i];
    console.log(`vowel number ${i + 1} is:  ${extractedVowls[i]}`);
}

//Showing Consonant With For loop
for (let i = 0; i < extractedCons.length; i++) {
    let element = extractedCons[i];
    console.log(`Consonant number ${i + 1} is:  ${extractedCons[i]}`);
}
