console.log("keySignatureQuiz.js loaded");


import { KeySignatures } from "./keySignatures.js";

let activeKey;
let remaining_keys = [];
let current_round_index = 0;



function startKeySignatureQuiz() {
  remaining_keys = [...KeySignatures]; // copy so we can remove as we go

  document.getElementById("submit").disabled = false;
  document.getElementById("user_feedback").innerText = "";
  document.getElementById("results_and_tally").innerHTML = "";
  document.getElementById("results_and_tally").style.display = "none";

  pickRandomKey();
}


function pickRandomKey() {
    if (remaining_keys.length === 0) {
      document.getElementById("submit").disabled = true;
      document.getElementById("current_h2_triad").innerText =
        "🎉 All key signatures completed!";
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * remaining_keys.length);
    activeKey = remaining_keys[randomIndex];
  
    document.getElementById("current_h2_triad").innerText =
      `${activeKey.key} Major Key Signature`;
  }

  function clearCheckedNotes() {
    const checkedBoxes = document.querySelectorAll('input[name="note"]:checked');
    checkedBoxes.forEach(box => (box.checked = false));
  }
  

  document.getElementById("submit").addEventListener("click", () => {
    const user_selected = [];
    const checkedBoxes = document.querySelectorAll('input[name="note"]:checked');
  
    checkedBoxes.forEach(box => user_selected.push(box.value));
  
    const correct = activeKey.accidentals;
  
    const isCorrect =
      user_selected.length === correct.length &&
      user_selected.every(note => correct.includes(note));
  
    if (isCorrect) {
      document.getElementById("user_feedback").innerText =
        `🏆 Correct! ${activeKey.key} major recorded.`;
  
      addCompletedKey();
      clearCheckedNotes();
      pickRandomKey();
    } else {
      clearCheckedNotes();
      document.getElementById("user_feedback").innerText =
        `❌ Try again! ${activeKey.key} major is incorrect.`;
    }
  });
 
  
  function addCompletedKey() {
    const p = document.createElement("p");
    p.innerText = `✅ ${activeKey.key} major completed.`;
    document.getElementById("results_and_tally").appendChild(p);
    document.getElementById("results_and_tally").style.display = "block";
  
    remaining_keys = remaining_keys.filter(
      keyObj => keyObj.key !== activeKey.key
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    startKeySignatureQuiz();
  });
  
  