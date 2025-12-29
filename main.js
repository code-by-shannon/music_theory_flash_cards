import { ChordLibrary } from "./library.js";

const user_feedback = document.getElementById('user_feedback');
const results_and_tally = document.getElementById('results_and_tally');
const next_round_button = document.getElementById('next_round');

const chord_name = document.getElementById('current_h2_triad');
// press enter after choosing chord tones
const button = document.getElementById('submit');

let activeChord;
let active_triad;
let remaining_chords;

//possible current rounds = major, minor, mixed, done etc.
let current_round = 'major';

startRound("major");

function startRound(quality) {
    current_round = quality;
    remaining_chords = ChordLibrary.filter(
        chord => chord.quality === quality
    );

    button.disabled = false;
    user_feedback.innerText = "";
    results_and_tally.innerHTML = "";
    results_and_tally.style.display = "none";

    pickRandomChord();
}

// if array is empty end the session
function pickRandomChord() {
    // end-of-round behavior
    if (remaining_chords.length === 0) {
      button.disabled = true;
  
      if (current_round === "major") {
        chord_name.innerText = "🎉 Major chords completed!";
        next_round_button.hidden = false; // show the Start Minor button
      } else if (current_round === "minor") {
        chord_name.innerText = "🎉 All chords completed!";
        current_round = "done";
        next_round_button.hidden = true; // no more rounds
      }
  
      return; // stop here so we don't try to pick a chord
    }
  
    // normal chord selection
    const randomIndex = Math.floor(Math.random() * remaining_chords.length);
    activeChord = remaining_chords[randomIndex];
    active_triad = activeChord.notes;
  
    chord_name.innerText = activeChord.name;
  }
  

function clearCheckedNotes() {
    const checkedBoxes = document.querySelectorAll('input[name="note"]:checked');
    checkedBoxes.forEach(box => box.checked = false);
}

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
        user_feedback.innerText = `🏆 Correct!  ${activeChord.name} has been added to your completed list!`
        addCompletedChord();
        clearCheckedNotes();
        pickRandomChord();
        
    } else {
        console.log('try again!');
        clearCheckedNotes();
        user_feedback.innerText = `❌ Try again!  The notes chosen for ${activeChord.name} were incorrect!`
    } 
});

function addCompletedChord(){
    const p = document.createElement('p');
    p.innerText = `✅ ${activeChord.name} completed.`;
    results_and_tally.appendChild(p);
    results_and_tally.style.display = 'block';
    

    // remove chord from pool
    remaining_chords = remaining_chords.filter(
        chord => chord.name !== activeChord.name
    );
};

next_round_button.addEventListener('click', ()=>{
    next_round_button.hidden = true;
    startRound('minor');
})