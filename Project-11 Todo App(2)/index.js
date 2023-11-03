
let inputBox = document.getElementById('input');
let listUL = document.getElementById('list');

inputBox.addEventListener('keyup', function (e) {
    if (e.key === 'Enter' && e.target.value != '') {
        addTask(this.value);
        this.value = '';
    }
})

function createTask(txt) {
    let li = document.createElement('li');
    li.innerHTML = `${txt} <i></i>`;
    return li;
}
function addTask(value) {
    let li = createTask(value);

    li.addEventListener('click', function () {
        this.classList.toggle('active');
    })
    li.querySelector('i').addEventListener('click', function () {
        this.parentNode.remove();
    })
    listUL.appendChild(li)
}