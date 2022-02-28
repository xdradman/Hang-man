const guessPlaceholder = document.querySelector('.guess-placeholder');

const image = document.querySelector('.image');

let rightGuess = 0;
let stages = 1;
const placement = []

words = [
    "ok",
    "lmao",
    "idk",
    "something",
    "guess",
    "test",
    "rrdorr",
    "rrrdo"
]

// make a random number generator with min and max numbers
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const max = words.length - 1;
const awnser = words[randomNumber(0,max)];
const [...letterArr] = awnser;
const [...rightArr] = awnser;
console.log(letterArr);


let placeholderNumer = 1;
//input the length of the word and than it add underscores to the html as of placeholder
//the function uses recutsion
function place(n){
    if(n <= 0){
        placeholderNumer = 1;
        return
    }
    const newH1 = document.createElement("h1")
    //adds the placeholder with its number to h1 class
    newH1.classList.add(`placeholder-${placeholderNumer}`);
    newH1.textContent = '_'
    //makes the new created h1 child of guessplaceholder in the html
    guessPlaceholder.appendChild(newH1);
    placeholderNumer++;
    place(n-1);
}

function play(){
    place(awnser.length);
    document.addEventListener('click', handleMouseClick);
}

function stopPlay(){
    document.removeEventListener('click', handleMouseClick);
}

function handleMouseClick(e){
    if(e.target.matches("[data-key]")){
        pressKey(e.target.dataset.key);
        return
    }

}


function pressKey(key){
    if(letterArr.includes(key)){
        placeLetter(key);
        return
    }
    else{
        stages++
        if(stages == 10) stopPlay();
        //when player guesses wrong
        const wrong = document.querySelector(`[data-key="${key}"]`);
        image.src = `images/Stage-${stages}.png`;
        wrong.classList.add('wrong');
        return
    }
}

function placeLetter(letter){
    for (let i = 0; i < letterArr.length; i++) 
    {
        // the if statement doesnt same to be working the if statement runs twice even runs after the first one been ran the else statmen
        if(letter == letterArr[i]){
            console.log(letterArr);    
            for (let j = 0; j < letterArr.length; j++) {
                const letters = document.querySelector(`.placeholder-${j+1}`);
                if(letterArr[j] == letter)
                {
                    rightGuess++;
                    console.log(rightGuess);
                    // find a way to remove a string from the rightArr array
                    //when player guesses right
                    letters.textContent = letterArr[j];
                    const right = document.querySelector(`[data-key="${letterArr[j]}"]`)
                    right.classList.add('right')
                }
            }
        }
    }
}

play();