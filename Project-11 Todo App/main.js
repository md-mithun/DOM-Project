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

    li.appendChild(checkbox);
    li.appendChild(label);

    return li;
}

function addTask(event) {
    event.preventDefault();
    let li = createTask(inputBox.value);

    incompleteUl.appendChild(li);
    inputBox.value = '';

    addOnchangeHandler(li, completeTodo)
}


function completeTodo() {
    let li = this.parentNode;
    this.remove();

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList = 'delete';

    li.appendChild(deleteButton);
    completeUl.appendChild(li);


    addOnclickHandler(li, deleteItem);
}

function deleteItem() {
    let li = this.parentNode;
    li.remove();
}

function addOnclickHandler(li, deleteItem) {
    let btn = li.querySelector('.delete');
    btn.onclick = deleteItem;
}

function addOnchangeHandler(li, completeTodo) {
    let checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.onchange = completeTodo;
}



let allCompleteli = completeUl.querySelectorAll('li');
let allincompleteli = incompleteUl.querySelectorAll('li');

for (const li of allCompleteli) {
    addOnclickHandler(li, deleteItem);
}
for (const li of allincompleteli) {
    addOnchangeHandler(li, completeTodo);
}




form.addEventListener('submit', addTask);