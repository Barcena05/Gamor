
let lb = document.getElementById("SwitchToRegister");
let l = document.getElementById("Log");
let s = document.getElementById("Sign");
let sb = document.getElementById("SwitchToLog");

lb.addEventListener("click", () => { l.style.display = "none"; s.style.display = "flex"; });
sb.addEventListener("click", () => { s.style.display = "none"; l.style.display = "flex"; });

let show_pass = document.getElementById("ShowPass");
show_pass.addEventListener("click",
    () => {
        let pass = document.getElementById("PassIn");
        if (pass.type == "password") {
            pass.type = "text";
        }
        else {
            pass.type = "password";
        }
    })
let show_sign_pass = document.getElementById("show_sign_pass");
show_sign_pass.addEventListener("click",

    () => {
        let pass = document.getElementById("sign_pass_in");
        if (pass.type == "password") {
            pass.type = "text";
        }
        else {
            pass.type = "password";
        }
    })

let l_cancel = document.getElementById("logCancel");
l_cancel.addEventListener("click", () => {              //Esta talla esta super loca!
    window.open('', '_parent', '');
    window.close();
});

function selectTheme() {
    let r = document.querySelector(':root');
    r.style.setProperty('--inCol', localStorage.getItem('--inCol'));
    r.style.setProperty('--backCol', localStorage.getItem('--backCol'));
    r.style.setProperty('--InText', localStorage.getItem('--InText'));
    r.style.setProperty('--createAccount', localStorage.getItem('--createAccount'));
}
selectTheme();

function Initial_display() {
    if (localStorage.getItem('Log') === "1") {
        s.style.display = "none"; l.style.display = "flex";
    }
    else {
        l.style.display = "none"; s.style.display = "flex";
    }
}
Initial_display();


function loadData() {
    let users = localStorage.getItem("users");
    let user_data;
    if (users == null) user_data = [];
    else user_data = JSON.parse(users);
    return user_data;
}

let log_accept = document.getElementById("logAccept");
log_accept.addEventListener("click", async () => {
    let completed = false;
    let users = loadData();
    let inLog = document.getElementById("NameIn").value;
    let inPass = document.getElementById("PassIn").value;
    let user_found = false;
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.username === inLog) {
            user_found = true;
            if (element.password === inPass) {
                console.log("Empingao");
                localStorage.setItem("User", element.username);
                completed = true;
            }
            else {
                alert("Wrong password, please try again");
            }
            break;
        }
    }
    if (!user_found) alert("User not found");
    if (completed) {
        window.open('', '_parent', '');
        window.close();
    }
})

let sign_accept = document.getElementById("signAccept");
sign_accept.addEventListener("click", async () => {
    let in_user = document.getElementById("sign_username_in").value;
    let found = false;
    let users = loadData();
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.username === in_user) {
            alert("User already exists");
            found = true;
            break;
        }
    }
    if (!found) {
        let games = document.getElementById("games").getElementsByTagName("input");
        let submitted = [];
        for (let index = 0; index < games.length; index++) {
            if (games[index].checked) {
                submitted.push(games[index].name);
            }
        }
        let datas =
        {
            firstName: document.getElementById("sign_firstname_in").value,
            lastName: document.getElementById("sign_lastname_in").value,
            username: in_user,
            games: submitted,
            password: document.getElementById("sign_pass_in").value
        }
        console.log(users)
        users.push(datas);
        console.log(users);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("User", datas.username);
        window.open('', '_parent', '');
        window.close();
    }
})