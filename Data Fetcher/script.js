const fetchDataBtn = document.getElementById("get-data")
const userData = document.getElementById("user-data")


fetchDataBtn.addEventListener("click", function() {
    fetch("https://reqres.in/api/users?page=1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let html = ""
            const users = data.data
            for (let user of users) {
                console.log(user.first_name, user.last_name, user.email)
                html +=
                    `
                    <div class="user-card">
                        <div>
                            <h1>${user.id}: ${user.first_name} ${user.last_name}</h1>
                            <a href="${user.email}">${user.email}</a>
                        </div>
                        <img src = "${user.avatar}" alt="img-person" class="user-img"/>
                    </div>
                `
            }
            userData.innerHTML = html;
            console.log(users)
        })
})