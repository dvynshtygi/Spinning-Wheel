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

let greet = document.getElementById("arrow")

if (greet==document.getElementById("one")) {
    setTimeout(function () {
        msg1.style.display = "flex";


    })
 }else if(greet == document.getElementById("two")){
    setTimeout(function () {
        msg2.style.display = "flex";
  

    })

 }else if(greet == document.getElementById("three")){
    setTimeout(function () {
        msg1.style.display = "flex";


    })
 }
