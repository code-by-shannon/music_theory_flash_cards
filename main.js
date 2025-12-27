import { ChordLibrary } from "./library.js";

const chord_name = document.getElementById('current_h2_triad');
// press enter after choosing chord tones
const button = document.getElementById('submit');

const randomIndex = Math.floor(Math.random() * ChordLibrary.length);
const activeChord = ChordLibrary[randomIndex];
console.log(activeChord);
chord_name.innerText = activeChord.name;

const active_triad = activeChord.notes;

console.log(active_triad);
// notes user clicked
let user_submitted_values = [];


// click button to submit user choices and check against correct answer
button.addEventListener('click', ()=>{
    let user_submitted_values = [];
    // grab all the checked boxes
    const checkedBoxes = document.querySelectorAll('input[name="note"]:checked');
    // for each checked box push checked value to user_submitted_values array
    checkedBoxes.forEach(box =>{
        user_submitted_values.push(box.value);
    });
    // check for equal length between user input and correct answer
    // check for each value matched in both arrays
    const chord_tone_validation = 
        user_submitted_values.length === active_triad.length && 
        user_submitted_values.every(note => active_triad.includes(note));

    if (chord_tone_validation) {
        console.log('correct');
    } else console.log('try again!');


    console.log(user_submitted_values);
})


