// Get the elements from the HTML
const inputBox = document.querySelector('#inputBox');
const addTaskButton = document.querySelector('#addTask');
const incompleteUl = document.querySelector('#items');
const completeUl = document.querySelector('#completeUl');

// Add a click event listener to the add task button
addTaskButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Get the new task from the input box
  const newTask = inputBox.value;

  // Create a new list item element
  const li = document.createElement('li');

  // Create a checkbox element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = function (event) {
    // If the checkbox is checked, move the list item to the completed tasks list
    if (event.target.checked) {
      incompleteUl.removeChild(li);
      completeUl.appendChild(li);
    } else {
      // If the checkbox is unchecked, move the list item to the incomplete tasks list
      completeUl.removeChild(li);
      incompleteUl.appendChild(li);
    }
  };

  // Create a label element for the checkbox
  const label = document.createElement('label');
  label.textContent = newTask;

  // Append the checkbox and label elements to the list item element
  li.appendChild(checkbox);
  li.appendChild(label);

  // Append the list item element to the incomplete tasks list
  incompleteUl.appendChild(li);

  // Clear the input box
  inputBox.value = '';
});

// Add a click event listener to the delete buttons in the completed tasks list
completeUl.querySelectorAll('.delete').forEach(function (button) {
  button.addEventListener('click', function (event) {
    // Remove the list item element from the completed tasks list
    completeUl.removeChild(event.target.parentElement);
  });
});
