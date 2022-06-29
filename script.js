// TO SPIN THE WHEEL

let elements = document.querySelector(".elements");
let btn = document.getElementById("start");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
    elements.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 10000);
}

// TO SHOW THE WHEEL POPUP

document.getElementById("click").addEventListener("click", function () {
    document.querySelector("#card").style.display = "flex";
})

// TO CLOSE THE WHEEL POPUP

document.getElementById("cut").addEventListener("click", function () {
    document.querySelector("#card").style.display = "none";
})


