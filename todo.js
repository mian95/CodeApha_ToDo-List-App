const textInput = document.querySelector(".input-text");
const addBtn = document.querySelector(".input-btn");
const taskBox = document.querySelector(".task-box");

// Creating task element
function createTaskElement(task) {
  const taskElement = document.createElement("li");
  taskElement.innerHTML = `
    <div>
    <p>
    ${task}
    </p>  
    </div>
    <button class="delete-btn">
        <span class="material-symbols-outlined">close</span>
    </button>
    `;
  return taskElement;
}

// Adding task element to taskbox
const addTaskToBox = (taskElement) => {
  taskBox.appendChild(taskElement);
  const deleteBtn = taskElement.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskElement.remove();
  });
};

//  Task adding fuction
const addTask = () => {
  const text = textInput.value.trim();
  if (text) {
    const taskElement = createTaskElement(text);
    addTaskToBox(taskElement);
    textInput.value = " ";
  } else {
    console.log("Please Enter the task");
  }
};

// Event listener
addBtn.addEventListener("click", addTask);
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
