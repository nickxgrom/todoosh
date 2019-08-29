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
        taskNode = document.createElement('div'),
        delTask = document.createElement('input'),
        completeCheckBox = document.createElement('input'),
        elemTxt = document.createTextNode(inputText);

    taskNode.className = 'task-node';
    delTask.type = 'button';
    delTask.className = 'del-btn';
    completeCheckBox.className = 'complete-checkbox';
    completeCheckBox.type = 'checkbox';

    taskNode.append(elemTxt);
    task.className = 'task';
    task.append(completeCheckBox);
    task.append(taskNode);
    task.append(delTask);
    field.prepend(task);
    checkBoxAction();
    console.log(document.querySelectorAll('.task').length - document.querySelectorAll('.complete').length -1)
}

function checkBoxAction() {
    let chbox = document.querySelectorAll('.complete-checkbox');
    chbox.forEach((elem) => {
        elem.addEventListener('click', function() {
            if (this.checked) {
                this.parentNode.classList.add('complete');
            } else {
                this.parentNode.classList.remove('complete');
            }  
            console.log(document.querySelectorAll('.task').length - document.querySelectorAll('.complete').length -1);
         });    
    })  
}