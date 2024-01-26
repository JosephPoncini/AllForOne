


// Declaring Element Variables
let SayHelloBtn = document.getElementById("SayHelloBtn");
let AddTwoNumBtn = document.getElementById("AddTwoNumBtn");
let AskQuestionsBtn = document.getElementById("AskQuestionsBtn");
let GreaterOrLessBtn = document.getElementById("GreaterOrLessBtn");
let MadLibBtn = document.getElementById("MadLibBtn");
let OddOrEvenBtn = document.getElementById("OddOrEvenBtn");
let ReverseItNumBtn = document.getElementById("ReverseItNumBtn");
let ReverseItAlphaBtn = document.getElementById("ReverseItAlphaBtn");
let RestaurantPickerBtn = document.getElementById("RestaurantPickerBtn");
let MagicEightBtn = document.getElementById("MagicEightBtn");
let GoBtn = document.getElementById("GoBtn");


//Declaring Global Variables

let buttonsArray = [SayHelloBtn, AddTwoNumBtn, AskQuestionsBtn, GreaterOrLessBtn, MadLibBtn, OddOrEvenBtn, ReverseItNumBtn, ReverseItAlphaBtn, RestaurantPickerBtn, MagicEightBtn];
let srcArray = ["SayHello", "AddTwoNum", "AskQuestions", "GreaterOrLess", "MadLib", "OddOrEven", "ReverseItNum", "ReverseItAlpha", "RestaurantPicker", "MagicEight"];
let srcString = "./pages/SayHello.html";

//Global Functions
const SelectBtn = (element, src) => {
    buttonsArray.forEach( x => {
        x.classList.remove("selectedButton");
        x.classList.add("unSelectedButton");
    })
    element.classList.remove("unSelectedButton");
    element.classList.add("selectedButton")
    srcString = "./pages/"+src+".html";
    console.log(srcString);
}


//Button Functions

//adds an event listener to all my buttons for home page
for (let i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener("click", function() {
        SelectBtn(buttonsArray[i],srcArray[i]);
    });
}

GoBtn.addEventListener("click", function(){
    window.location.href = srcString;
})


//async Functions