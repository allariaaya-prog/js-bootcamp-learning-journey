// setting up variables
let input = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task .plus");

let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// focus on the input field when you open the website
window.onload = function () {
    input.focus();
};

// adding the task
addButton.onclick = function () {

    // if input is empty
    if (input.value === '') {

        // alert message
        alert("No Value");

    } 

    else {

        let noTasksMsg = document.querySelector(".no-tasks");

        //check if span with no tasks massege is exit 
        if(document.body.contains(document.querySelector(".no-tasks"))){

            //remove no tasks massege
            noTasksMsg.remove();
        }
        

        // check if task already exists in tasks container
        let allTasks = Array.from(document.querySelectorAll('.tasks-content .task-box'));
        
        // check if any task matches the input value (ignoring case and extra spaces)
        let isExist = allTasks.some(task => {

            // task.childNodes[0].textContent gets only the task text (excluding delete button text)
            return task.childNodes[0].textContent.trim().toLowerCase() === input.value.trim().toLowerCase();
        });

        if (isExist) {

            // alert if task exists
            alert("This Task Already Exists!");
            
            // clear input and focus
            input.value = '';
            input.focus();
        }
    
    
    else {

        // check if no tasks message exists and remove it
        let noTasksMsg = document.querySelector(".no-tasks");
        if (noTasksMsg) {
            noTasksMsg.remove();
        }

        // create main span element
        let mainSpan = document.createElement("span");

        // create delete button
        let deleteElement = document.createElement("span");

        // create main span text & delete button text
        let text = document.createTextNode(input.value);
        let deleteText = document.createTextNode("Delete");

        // add text to main span & add class to it
        mainSpan.appendChild(text);
        mainSpan.className = 'task-box';

        // add text & class to delete button
        deleteElement.appendChild(deleteText);
        deleteElement.className = 'delete';

        // add delete button to main span
        mainSpan.appendChild(deleteElement);

        // add the task to the container
        tasksContainer.appendChild(mainSpan);

        // empty the input & then focus on it
        input.value = '';
        input.focus();

        // calculate tasks
        calculateTasks();

    }
}
};


// delete task & toggle completed
document.addEventListener('click', function (e) {

    // delete task
    if (e.target.className === 'delete') {

        // remove current task
        e.target.parentNode.remove();

        // check number of tasks in container
        if (tasksContainer.childElementCount === 0) {
            createNoTasks();
        }

    }

    // toggle completed task
    if (e.target.classList.contains('task-box')) {

        // toggle class finished
        e.target.classList.toggle("finished");

    }

    // calculate tasks
    calculateTasks();

});

//function to create no tasks massege
function createNoTasks()
{
    //create message span element
    let msgSpan = document.createElement("span");

    //create the text massege
    let msgText = document.createTextNode("No tasks to show");

    //add text to message span element
    msgSpan.appendChild(msgText);

    //add class to massege span
    msgSpan.className = 'no-tasks';

    //append the msg span element to the tasks container
    tasksContainer.appendChild(msgSpan);
}


// function to calculate tasks
function calculateTasks() {

    // calculate all tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // calculate completed tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}

