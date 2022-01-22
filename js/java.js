// ----designing hamburger menu----
let ham = document.getElementById("hamburger");
let click = document.getElementById("click-ham");
let nav = document.getElementById("navbar")
let nav_ham = document.getElementById("navbar-ham")
ham.addEventListener("click", () => {
    console.log("hiii")
    ham.classList.toggle("hamburger-toggle");
    nav.style.display = "none";
    nav_ham.style.display = "block";
    click.style.display = "none";
})

// ----designing scroll / progress bar ----
let progress = document.getElementById("progressbar");
let totalheight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressheight = (window.pageYOffset / totalheight) * 100;
    progress.style.height = progressheight + "%";
}

//----designing btn1 i.e(watch video and subscribe )----
function myFunction() {
    window.open("https://www.youtube.com/channel/UC7iXqWD1Pw4CT3iMRz5y5ZQ", "_blank");
}


