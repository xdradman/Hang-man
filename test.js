const words = [
    "rrdor",
]

function getSumOfRecursive(word){
    //get the repeated letters in the array word

    let repeatedLetters = [];
    let sum = 0;
    for(let i = 0; i < word.length; i++){
        if(repeatedLetters.includes(word[i])){
            sum += word[i].charCodeAt(0);
        }
        else{
            repeatedLetters.push(word[i]);
        }
    }
    return sum;

}
console.log(getSumOfRecursive(words[0]));