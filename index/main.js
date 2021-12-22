let display = document.querySelector("#input-display")
let response = document.querySelector("#response")
let number1 = document.querySelector("#number-button1")
let number2 = document.querySelector("#number-button2")
let number3 = document.querySelector("#number-button3")
let number4 = document.querySelector("#number-button4")
let number5 = document.querySelector("#number-button5")
let number6 = document.querySelector("#number-button6")
let number7 = document.querySelector("#number-button7")
let number8 = document.querySelector("#number-button8")
let number9 = document.querySelector("#number-button9")
let number0 = document.querySelector("#number-button0")

number1.addEventListener("click",()=>showNumber(1))
number2.addEventListener("click",()=>showNumber(2))
number3.addEventListener("click",()=>showNumber(3))
number4.addEventListener("click",()=>showNumber(4))
number5.addEventListener("click",()=>showNumber(5))
number6.addEventListener("click",()=>showNumber(6))
number7.addEventListener("click",()=>showNumber(7))
number8.addEventListener("click",()=>showNumber(8))
number9.addEventListener("click",()=>showNumber(9))
number0.addEventListener("click",()=>showNumber(0))

let numberList = []

function showNumber(text){
    numberList.push(text)
    display.innerText = numberList.join(" ")

    if(numberList.length>=4){
        if(numberList.join("")==="4829"){
            console.log("correct")
            window.location.href = "../Deactivated/deactivated.html";

        }
        else{
            console.log("incorrect")
            response.innerText = "Incorrect. Try again!"
            numberList = []
        }
    }
}


