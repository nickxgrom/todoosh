'use strict';

console.log('i\'m alive!!!!11!!1');

const taskInput = document.getElementById('inp');

taskInput.addEventListener('keypress', (key) => {
    if (key.code == 'Enter' && inp.value !== ''){
        addTask(inp.value);
        inp.value = '';
    }
})

function addTask(inputText) {
    var field = document.querySelector('.field'),
        task = document.createElement('div'),
        elemTxt = document.createTextNode(inputText),
        completeCheckBox = document.createElement('input');
    completeCheckBox.type = 'checkbox';
    task.className = 'task';
    task.append(completeCheckBox);
    task.append(elemTxt);
    // taskComplete();
    field.append(task);
}

// function taskComplete() {
//     let completeCheckBox = document.createElement('input');

// }