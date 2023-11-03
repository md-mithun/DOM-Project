let form = document.querySelector('.form');
let inputBox = document.getElementById('inputBox');
let incompleteUl = document.querySelector('.incompleteUl');
let completeUl = document.getElementById('completeUl');

function createTask(txt) {
    let li = document.createElement('li');
    let label = document.createElement('label')
    let checkbox = document.createElement('input')

    label.innerText = txt;
    checkbox.type = 'checkbox';
    checkbox.onchange = completeTodo;

    li.appendChild(checkbox);
    li.appendChild(label);

    return li;
}

function addTask(event) {
    event.preventDefault();
    let li = createTask(inputBox.value);

    incompleteUl.appendChild(li);
    inputBox.value = '';

}

function deleteItem(t) {
    if (this === window) {
        let li = t.parentNode;
        li.remove();
    }
    else {
        let li = this.parentNode;
        li.remove();
    }
}
function completeTodo(t) {
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList = 'delete';
    deleteButton.onclick = deleteItem;

    if (this === window) {
        let li = t.parentNode;
        li.removeChild(t);
        li.appendChild(deleteButton);
        completeUl.appendChild(li);
    }
    else {
        let li = this.parentNode;
        li.removeChild(this);
        li.appendChild(deleteButton);
        completeUl.appendChild(li);
    }
}


form.addEventListener('submit', addTask);