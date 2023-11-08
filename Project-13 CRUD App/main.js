const studentsArray = localStorage.getItem('studentsArray') ? JSON.parse(localStorage.getItem('studentsArray')) : [];
let editMode = null;
const listContainer = document.getElementById('listContainer');
const myform = document.getElementById('myform');
const sName = document.getElementById('nameIn');
const sRoll = document.getElementById('rollIn');


//aler message
function alertMsg(msg) {
    console.log(msg);
}

//clear input
function clearInput() {
    sName.value = '';
    sRoll.value = '';
}


//take form submit
myform.addEventListener('submit', (e) => {
    e.preventDefault();
    const student = { name: sName.value, roll: sRoll.value };
    if (editMode == null) {
        studentsArray.push(student);
        localStorage.setItem('studentsArray', JSON.stringify(studentsArray));

        clearInput();
        refresh();
    } else {
        //here editmode contain index of edit student
        studentsArray[editMode].name = sName.value;
        studentsArray[editMode].roll = sRoll.value;

        localStorage.setItem('studentsArray', JSON.stringify(studentsArray));
        editMode = null;


        document.getElementById('submitBtn').innerText = 'Add Student';
        refresh();
        clearInput();
    }
})




//add item in listContainer from localstorage
function refresh() {
    let items = JSON.parse(localStorage.getItem('studentsArray'));
    list = '';
    try {
        items.forEach((element, index) => {
            list += ` <tr id="list">
                    <td>${element.name}</td>
                    <td>${element.roll}</td>
                    <td class="action">
                        <i  onclick="editItem(${index})" class="fa-regular edit fa-pen-to-square"></i>
                        <i  onclick="deleteItem(${index})" class="fa-regular delete fa-trash-can"></i>
                    </td>
                  </tr>`;
        })
        listContainer.innerHTML = list;

    } catch (error) {
        console.log('No students found');
    }

}

function deleteItem(index) {

    studentsArray.splice(index, 1)
    localStorage.setItem('studentsArray', JSON.stringify(studentsArray));
    // console.log(studentsArray);
    refresh();
}

function editItem(index) {
    sName.value = studentsArray[index].name;
    sRoll.value = studentsArray[index].roll;
    editMode = index;
    document.getElementById('submitBtn').innerText = 'Update';
}
refresh();