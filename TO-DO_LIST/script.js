document.getElementById('add-task-btn').addEventListener('click', function(){
    //step 1: Get the value from the input field
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;

    //step 2: check if the input is not empty
    if (taskText === ''){
        alert('please enter a task!');
        return;
    }

    //step 3: Create a new list item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    //add event listener to remove the task when clicked
    taskItem.addEventListener('click', function (){
        this.remove();
    });

    //step 4: Append the task to the list
    const taskList = document.getElementById('task-list');
    taskList.appendChild(taskItem);

    //step 5: clear the input field
    taskInput.value = '';
});

