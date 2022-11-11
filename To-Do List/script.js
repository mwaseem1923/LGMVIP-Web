let toDoList = [];

const inputEl = document.getElementById("input-el");
const addItemBtn = document.getElementById("add-item-btn");
const container = document.getElementById("container");
const deleteAllTask = document.getElementById("delete-all-task");

addItemBtn.addEventListener("click", function() {
    inputEl.value = inputEl.value.toLowerCase();
    if (!inputEl.value) {
        alert("Title can't be empty");
    } else if (inputEl.value.length < 3) {
        alert("Title should be at least 3 characters");
    } else if (toDoList.includes(inputEl.value)) {
        alert(`Task "${inputEl.value}" already exist in the list`);
    } else {
        toDoList.unshift(inputEl.value);
        renderHtml();
    }
    inputEl.value = "";
})

container.addEventListener("click", function(e) {
    const id = document.getElementById(e.target.id).id;
    toDoList.splice(toDoList.indexOf(id), 1)
    renderHtml();
})

deleteAllTask.addEventListener('click', function() {

    const response = confirm("Are You sure want to delete all tasks?")
    if (response) {
        toDoList.splice(0);
    }
    renderHtml();
})

function renderHtml() {
    let html = ""
    for (item of toDoList) {
        html +=
            `
            <div class="list-item">
                <h3 class="list-item-content">${item}</h3>
                <button class="delete-btn" id="${item}">X</button>
            </div>
            `
    }
    container.innerHTML = html;
    if (toDoList.length) {
        deleteAllTask.style.display = "inline"
    } else {
        deleteAllTask.style.display = "none"
    }
}