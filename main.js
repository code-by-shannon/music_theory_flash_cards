const button = document.getElementById('submit');

const c_major_triad = ['C', 'E', 'G'];

button.addEventListener('click', ()=>{
    let user_submitted_values = [];

    const checkedBoxes = document.querySelectorAll('input[name="note"]:checked');
    
    checkedBoxes.forEach(box =>{
        user_submitted_values.push(box.value);
    });

    console.log(user_submitted_values);
})


