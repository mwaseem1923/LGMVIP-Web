const enrolledList = document.getElementById("cards");
const addCard = document.getElementById("add-card")
const name = document.getElementById("name")
const email = document.getElementById("email")
const website = document.getElementById("website")
const image = document.getElementById("image")
const addStudentBtn = document.getElementById("blue-btn")
const clearFieldBtn = document.getElementById("red-btn")

const enrolledStudentList = [];

function showCards() {
    enrolledList.style.display = "block"
        // addCard.innerHTML = "";
    while (addCard.firstChild) {
        addCard.removeChild(addCard.firstChild)
    }
    let html = "";
    for (student of enrolledStudentList) {
        html +=
            `
            <div id="add-card">
                <div class="card-item">
                    <div id="card-data">
                        <h4 class="space" id="name">${student.name}</h4>
                        <p class="space" id="email">${student.email}</p>
                        <p class="space" id="gender">${student.website}</p>
                        <p class="space" id="gender">Male</p>
                        <p class="space" id="skills">HTML, CSS, JS</p>
                    </div>
                    <div id="card-image">
                        <img src="${student.image}" alt="profile image" height="100px">
                    </div>
                </div>
            </div>
        `
    }
    addCard.innerHTML += html
}

function checkStudentList() {
    if (enrolledStudentList.length <= 1) {
        enrolledList.style.display = "none"
    }
}
checkStudentList();

addStudentBtn.addEventListener("click", function(e) {
    e.preventDefault()
    if (name.value.length > 2 && email.value.length > 6) {
        let obj = {
            name: name.value,
            email: email.value,
            website: website.value,
            image: image.value,
            gender: "Male",
            skills: "HTML, CSS, JS"
        }
        if (enrolledStudentList.length > 0) {
            let name = enrolledStudentList[enrolledStudentList.length - 1]
            if (email.value === name.email) {
                alert("email already registered")
                return
            }
        }

        enrolledStudentList.push(obj)
        console.log(enrolledStudentList)
        showCards();
    }

})
clearFieldBtn.addEventListener("click", function() {
    name.value = "";
    email.value = ""
    website.value = ""
    image.value = ""
})