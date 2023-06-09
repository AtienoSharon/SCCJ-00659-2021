//get form and task list Element
const form = document.getElementById("task-form");
const tasklist = document.getElementById("task-list");

// Add task event listner
form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Get form value 
    const date = document.getElementId("task.date").value;
    const time = document.getElementId("task.time").value;
    const details = document.getElementId("task.details").value;

    //create task element
    const task = document.createElement("div");
    task.className = "task";

    //create task content
    const taskContent = document.createElement("span");
    taskContent.innerHTML = 'Date: ${date}<br>Time: ${time}<br>Details: ${details}';
    
    //create Delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => {
        task.remove();
    });

    //Append task content and delete button to task element
    task.appendChild(taskContent);
    task.appendChild(deleteBtn);

    //Append task element to task list
    tasklist,appendChild(task);

    //Append task element to task list
    document.getElementById("task-date").value = "";
    document.getElementById("task-time").value = "";
    document.getElementById("task-details").value = "";
});
