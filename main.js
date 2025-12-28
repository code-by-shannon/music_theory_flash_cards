import { ChordLibrary } from "./library.js";

const user_feedback = document.getElementById('user_feedback');
const results_and_tally = document.getElementById('results_and_tally');

const chord_name = document.getElementById('current_h2_triad');
// press enter after choosing chord tones
const button = document.getElementById('submit');

let activeChord;
let active_triad;

function pickRandomChord() {
    const randomIndex = Math.floor(Math.random() * ChordLibrary.length);
    activeChord = ChordLibrary[randomIndex];
    active_triad = activeChord.notes;

    chord_name.innerText = activeChord.name;

    console.log("New chord:", activeChord);
}

pickRandomChord();

function clearCheckedNotes() {
    const checkedBoxes = document.querySelectorAll('input[name="note"]:checked');
    checkedBoxes.forEach(box => box.checked = false);
}

console.log(active_triad);
// notes user clicked
let user_submitted_values = [];


// click button to submit user choices and check against correct answer
button.addEventListener('click', ()=>{
    const user_submitted_values = [];
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
        user_feedback.innerText = `Correct!  ${activeChord.name} has been added to your completed list!`
        addCompletedChord();
        clearCheckedNotes();
        pickRandomChord();
        
    } else {
        console.log('try again!');
        clearCheckedNotes();
        user_feedback.innerText = `Try again!  The notes chosen for ${activeChord.name} were incorrect!`
    } 
});

function addCompletedChord(){
    const p = document.createElement('p');
    p.innerText = `${activeChord.name} completed.`;
    results_and_tally.appendChild(p);
    results_and_tally.style.display = 'block';
} 




