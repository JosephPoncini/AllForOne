let BackBtn = document.getElementById("BackBtn");
let ExecuteBtn = document.getElementById("ExecuteBtn");

BackBtn.addEventListener("click", function(){
    window.location.href = "../index.html";
})


//Say Hello Variables

if (window.location.href.indexOf("SayHello.html") !== -1) {
    // Code to execute if the current page is page1.html
console.log("You are on SayHello.html");
} 