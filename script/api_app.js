let BackBtn = document.getElementById("BackBtn");
let ExecuteBtn = document.getElementById("ExecuteBtn");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");

let output = document.getElementById("output");

let inputArray = [input1, input2, input3, input4, input5];

var currentPage = window.location.pathname;
console.log(currentPage);


BackBtn.addEventListener("click", function () {
    window.location.href = "../index.html";
})

function GetAddress() {
    let address;
    switch (currentPage) {
        case "/pages/SayHello.html":
            address = `/SayHello/${input1.value}`;
            break;
        case "/pages/AddTwoNum.html":
            address = `/Summation/WhatIsTheSumOf/${input1.value}/and/${input2.value}`;
            break;
        case "/pages/AskQuestions.html":
            address = `/WakeUpTime/WhatIsYourName/${input1.value}/WhenDidYouWakeUp/${input2.value}`;
            break;
        case "/pages/GreaterOrLess.html":
            address = `/GreaterThanOrLessThan/WhichNumberIsGreater/${input1.value}/Or/${input2.value}`;
            break;
        case "/pages/MadLib.html":
            address = `/MadLib/MadLibGen/${input1.value}/${input2.value}/${input3.value}/${input4.value}/${input5.value}`;
            break;
        case "/pages/OddOrEven.html":
            address = `/OddOrEven/InputInteger/${input1.value}`;
            break;
        case "/pages/ReverseItNum.html":
            address = `/ReverseItNumeric/Numerical/${input1.value}`
            break;
        case "/pages/ReverseItAlpha.html":
            address = `/ReverseItAlpha/AphaNumerical/${input1.value}`
            break;
        case "/pages/RestaurantPicker.html":
            address = `/RestarauntPicker/Pick_American_Mexican_Or_Asian/${input1.value}`
            break;
        case "/pages/MagicEight.html":
            address = `/MagicEightBall/Question/${input1.value}`
            break;
        default:
            console.log("Something went wrong :( ");
    }

    return address;
}


const GetApi = async (address) => {
    const promise = await fetch("https://poncinijallforoneapis.azurewebsites.net/" + address);
    const data = await promise.text();
    console.log(data);
    return data;
}

// digimonInput.addEventListener("keydown", async (event) => {
//     if (event.key === "Enter") {
//         let digimon = await digimonApi(event.target.value);
//         // console.log(digimon);
//         digimonImg.src = digimon[0].img;
//         digimonName.textContent = digimon[0].name;
//         digimonStatus.textContent = digimon[0].level;
//     }
// })

ExecuteBtn.addEventListener("click", async() => {
    let address = GetAddress();
    let outputTxt = await GetApi(address);
    console.log(outputTxt);
    output.innerText = "Output: \n \n" + outputTxt;
})