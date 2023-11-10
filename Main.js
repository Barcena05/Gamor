let dark_mode = true;

var r = document.querySelector(':root');
let Mode = document.getElementById("Mode");
Mode.addEventListener('click', myFunction_set_colors);
function myFunction_set_colors() {
    dark_mode = !dark_mode;
    if (dark_mode) {
        r.style.setProperty('--InText', 'white');
        r.style.setProperty('--backCol', 'rgb(26, 32, 40)');
        r.style.setProperty('--inCol', 'rgb(33, 39, 47)');
        r.style.setProperty('--leftBarText', 'rgb(76, 83, 88)');
        r.style.setProperty('--leftBarHover', 'rgb(162, 82, 35)');
        r.style.setProperty('--logBarHover', 'rgb(76, 83, 88)');
        r.style.setProperty('--PicsButtom', 'rgba(255, 255, 255, 0.3)');
        r.style.setProperty('--createAccount', 'rgb(19, 23, 28)');
        r.style.setProperty('--categoryHover', 'darkorchid');
        r.style.setProperty('--SearchHover', 'white');
        r.style.setProperty('--ModeHover', 'rgb(76, 83, 88)');
        localStorage.setItem('--InText', 'white');
        localStorage.setItem('--backCol', 'rgb(26, 32, 40)');
        localStorage.setItem('--inCol', 'rgb(33, 39, 47)');
        localStorage.setItem('--leftBarText', 'rgb(76, 83, 88)');
        localStorage.setItem('--leftBarHover', 'rgb(162, 82, 35)');
        localStorage.setItem('--logBarHover', 'rgb(76, 83, 88)');
        localStorage.setItem('--PicsButtom', 'rgba(255, 255, 255, 0.3)');
        localStorage.setItem('--createAccount', 'rgb(19, 23, 28)');
        localStorage.setItem('--categoryHover', 'darkorchid');
        localStorage.setItem('--SearchHover', 'white');
        localStorage.setItem('--ModeHover', 'rgb(76, 83, 88)');
        let sum = document.getElementById("Summary");
        sum.style.backgroundImage = "url('resources/dark_s.png')";
    }
    else {
        r.style.setProperty('--InText', 'black');
        r.style.setProperty('--backCol', 'rgb(240,240,240)');
        r.style.setProperty('--inCol', 'white');
        r.style.setProperty('--leftBarText', 'rgb(30,30,30)');
        r.style.setProperty('--leftBarHover', 'rgb(125,50,240)');
        r.style.setProperty('--logBarHover', 'white');
        r.style.setProperty('--PicsButtom', 'rgba(255, 255, 255, 0.3)');
        r.style.setProperty('--createAccount', 'rgb(240,240,240)');
        r.style.setProperty('--categoryHover', 'orange');
        r.style.setProperty('--SearchHover', 'black');
        r.style.setProperty('--ModeHover', 'white');
        localStorage.setItem('--InText', 'black');
        localStorage.setItem('--backCol', 'rgb(240,240,240)');
        localStorage.setItem('--inCol', 'white');
        localStorage.setItem('--leftBarText', 'rgb(30,30,30)');
        localStorage.setItem('--leftBarHover', 'rgb(125,50,240)');
        localStorage.setItem('--logBarHover', 'white');
        localStorage.setItem('--PicsButtom', 'rgba(255, 255, 255, 0.3)');
        localStorage.setItem('--createAccount', 'rgb(240,240,240)');
        localStorage.setItem('--categoryHover', 'orange');
        localStorage.setItem('--SearchHover', 'black');
        localStorage.setItem('--ModeHover', 'white');
        let sum = document.getElementById("Summary");
        sum.style.backgroundImage = "url('resources/a.png')";
    }
}

myFunction_set_colors();
localStorage.setItem("User", "unregistered");
document.getElementById("User").innerHTML = localStorage.getItem("User");
addEventListener("storage", () => document.getElementById("User").innerHTML = localStorage.getItem("User"));

document.getElementById("SignIn").addEventListener('click', () => { localStorage.setItem("Log", '1') });
document.getElementById("CreateAccount").addEventListener('click', () => { localStorage.setItem("Log", '0') });

let pics = ["resources/Assasins Creed.png", "resources/CoD.jpg", "resources/Fifa.jpg",
    "resources/Fortnite.jpeg", "resources/Skyrim.jpg"];
let i = 0;
document.getElementById("prevPic").addEventListener("click", () => {
    let frame = document.getElementById("PicsShow");
    if (i == 0) {
        i = pics.length - 1;
    }
    else {
        i--;
    }
    frame.style.backgroundImage = "url(" + pics[i] +")";
});
document.getElementById("nextPic").addEventListener("click", () => {
    let frame = document.getElementById("PicsShow");
    if (i == pics.length - 1) {
        i = 0
    }
    else {
        i++;
    }
    frame.style.backgroundImage = "url(" + pics[i] +")";
});

let search_input = document.getElementById("searchBox");
let search_buttom = document.getElementById("Search");
let search_results = document.getElementById("SearchResults");

function loadData() {
    let users = localStorage.getItem("users");
    let user_data;
    if (users == null) user_data = [];
    else user_data = JSON.parse(users);
    return user_data;
}
search_buttom.addEventListener('click', () => {
    for (let index = 0; index < search_results.children.length; index++) {
        search_results.children[index].remove();        
    }
    let text_in = search_input.value;
    let data = loadData();
    for (let index = 0; index < data.length; index++) {
        if (data[index].games.includes(text_in)) {
            let x = document.createElement('p');  
            x.addEventListener('click',()=>{throw_player(x)});     
            x.innerHTML = data[index].username;
            search_results.appendChild(x);
        }
    }
});
let players = [];
function throw_player(player)
{
    if(players.includes(player)) return;
    players.push(player);
    if(players.length>3) return;
    let div = document.createElement('div');
    div.setAttribute('title',player.innerHTML);
    div.style.overflow = 'hidden';
    div.style.position = 'relative';
    let pic = document.createElement('img');
    pic.setAttribute('src','resources/1831651.png');
    div.style.opacity = '0.8';
    pic.style.opacity = '0.8';
    div.style.display = 'inline-block';
    div.style.width = '10%';
    div.style.marginRight = '70%';
    pic.style.width = '100%';
    pic.style.length = '100%';
    div.style.backgroundColor = "red";
    div.addEventListener('click',()=>{remove_player(div)});
    div.appendChild(pic);
    document.getElementById("PicsShow").appendChild(div);
}
function remove_player(player)
{
    let i = players.indexOf(player);
    players.splice(i,1);
    player.remove();
}