import { ChordLibrary } from "./library.js";

const rounds = [
    {
      id: "major",
      label: "Major Chords",
      qualities: ["major"],
      type: ['triad']
    },
    {
      id: "minor",
      label: "Minor Chords",
      qualities: ["minor"],
      type: ['triad']
    },
    {
      id: "major_and_minor",
      label: "Major + Minor",
      qualities: ["major", "minor"],
      type: ['triad']
    },
    {
      id: "minor_pentatonics",
      label: "Minor Pentatonics",
      qualities: ["minor"],
      type: ['scale']
    }
  ];
  
const user_feedback = document.getElementById('user_feedback');
const results_and_tally = document.getElementById('results_and_tally');
const round_select = document.getElementById("round_select");


const chord_name = document.getElementById('current_h2_triad');
// press enter after choosing chord tones
const button = document.getElementById('submit');

let activeChord;
let active_triad;
let remaining_chords;

//possible current rounds = major, minor, mixed, done etc.
let current_round;
let current_round_index = 0;
let allowed_qualities = [];
let allowed_types = [];

startRoundByIndex(0);

function startRoundByIndex(index) {
    const round = rounds[index];
    current_round_index = index;
    allowed_qualities = round.qualities;

    allowed_types = round.type;

    remaining_chords = ChordLibrary.filter(
        chord => 
        allowed_qualities.includes(chord.quality) &&
        allowed_types.includes(chord.type)
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

      const round = rounds[current_round_index];
      chord_name.innerText = `🎉 ${round.label} completed!`;
  
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

rounds.forEach((round, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = round.label;
    round_select.appendChild(option);
  });
  
  round_select.addEventListener("change", e => {
    startRoundByIndex(Number(e.target.value));
  });
  