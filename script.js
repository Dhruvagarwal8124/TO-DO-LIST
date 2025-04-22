// Select the input field
const input = document.querySelector(".inputBox input");

// Add click event to the ADD button, and call handleAddEvent function
const addBtn = document.querySelector("button").addEventListener("click", handleAddEvent);

// Select the container where tasks will be displayed
const taskList = document.querySelector(".checkBoxes");

// Variable to hold user input temporarily
let collectedText = "";

// Add event listener to input field to track user typing
input.addEventListener("input", handleTextInput);

// Function to handle input event and update collectedText
function handleTextInput() {
    collectedText = input.value; // Store the current value typed by the user
}

// Function to handle task addition when the ADD button is clicked
function handleAddEvent() {
    // If input is empty, show alert and stop the function
    if (collectedText === "") {
        alert("Please enter a task first");
        return;
    }

    // Create a div to wrap the task
    const taskDiv = document.createElement("div");
    taskDiv.className = "task"; // Add a class for styling

    // Create checkbox input and label
    const newTask = document.createElement('input');
    const newTaskValue = document.createElement('label');

    newTask.type = "checkbox"; // Set type to checkbox
    newTask.name = "task";     // Set name attribute
    newTask.value = collectedText; // Set value to the task text

    newTaskValue.className = "checkText"; // Add class for styling
    newTaskValue.textContent = collectedText; // Set the visible text

    // Append checkbox and label to the task wrapper
    taskDiv.appendChild(newTask);
    taskDiv.appendChild(newTaskValue);

    // Add the task to the list
    taskList.appendChild(taskDiv);

    // Clear input field and variable
    input.value = "";
    collectedText = "";

    // Event listener to handle checkbox change (i.e., task completion)
    newTask.addEventListener("change", function () {
        if (this.checked) {
            let confirmDelete = confirm("Do you want to delete the task!"); // Ask user to confirm deletion
            if (confirmDelete) {
                taskDiv.remove(); // Remove the task from the DOM
            } else {
                this.checked = false; // Uncheck if user cancels
            }
        }
    });
}
