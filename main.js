
let countEl =document.getElementById("count-el")
console.log(countEl)
let count = 0

function increment(){
 count += 1
  countEl.innerText = count
}

function save(){
  console.log(count)
}

let welcomeEl =document.getElementById("welcome-el")
console.log(welcomeEl)

let name= "Sufinanal"
let greeting=" Welcome back mersan " 

let mygreeting=greeting+name

welcomeEl.innerText = mygreeting

welcomeEl.innerText += "😉"
console.log(mygreeting)

let saveEl = document.getElementById("save-el")
console.log(saveEl)
function save(){
let countStr = count + " - "
saveEl.textContent +=   countStr
countEl.textContent = 0
count = 0 
}

let fullname = "mersan "
let greetings = "Hi there"

function greetmersan() {
 console.log(greetings + "," + name +"!")
}
greetmersan()


