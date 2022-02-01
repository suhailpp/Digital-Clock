//1. console API
// console.log("Hello World",10+6,"Another One")
// console.warn("This is serious");
// console.error("this is an error")


//2. Variables
//Store data values
var num1 = 56
var num2 = 20
// console.log(num1 + num2)

//3. Data Types
//string type
var str = "This is interesting"
// console.log(str)

//object type
var marks = {
    suhi: 83,
    adil: 92,
    mufi: 95
}
// console.log(marks)

//boolean
var a = true
var b = false

//array
var arr = [1,2,3,4,5]
// console.log(arr)

//4. Operator
//arithmatic 
var a = 12
var b = 35
// console.log("The Sum is", a+b)

//assignment
var c = b
c -= 2
c += 2
c /= 2
// console.log(c)
// comparison operator
var x = 85
var y = 62
// console.log(x==y)
// console.log(x>y)
// console.log(x<y)
//logical operators
//Logical and
// console.log(true && true)
// console.log(false && true)
// console.log(true && false)
// console.log(false && false)
// Logical or ||
// console.log(true || true)
// console.log(false || true)
// console.log(true || false)
// console.log(false || false)
//Logical not
// console.log(!true)
// console.log(!false)

//5. Functions
function avg(a,b){
    c =  (a+b)/2
    return c
}
c1 = avg(51,23)
c2 = avg(78,69)
// console.log(c1,c2)

//6. Conditionals 
var age = 22

//IF STATEMENT---
if (age>21)
// {
//     console.log("You can marry your dream girl")
// }


//IF-ELSE STATEMENT---
// if (age>21)
// {
//     console.log("You can marry your dream girl")
// }
// else
// {
//     console.log("You cannot marry your dream girl")
// }

//IF-ELSE LADDER

/*
var age = 25
if (age>18)
{
    console.log("you can drink")
}
else if(age>21){
    console.log("you can marry")
}
else if(age>25){
    console.log("you can buy a house")
}
else if(age>30){
    console.log("u turned 30")
}
else {
    console.log("Your just a kid")
}
console.log("End of ladder")
*/

//7. looping
var arr = [1,2,3,4,5]
// arr.forEach(function(element){
//     console.log(element)
// })

// using FOR LOOP
// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }

//using WHILE LOOP
//let j=0
// while(j<arr.length)
// {
//     console.log(arr[j])
//     j++
// }

// Do-While Loop
// do{
//     console.log(arr[j])
//     j++
// }
// while(j<arr.length)

//8. Break and Continue

// for(var i=0;i<arr.length;i++)
// {
//     if(i==2)
//     {
//         continue
//     }
//     console.log(arr[i])
// }

//9. Array method
// myArr = ["Suhi","Adil",03,null, true]
// myArr.push("mufi")
// myArr.pop()
// console.log(myArr) 

//10. String method 
// let myLovelyString = "Suhail is a good designer"
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))

//11. Date
// let date = new Date()
// console.log(date)

//12. DOM MAnipulation
let elem  = document.getElementById('click')
// console.log(elem)

let elemClass  = document.getElementsByClassName('container')
// console.log(elemClass)

// elemCon[0].style.background = "yellow"
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// elemClass[0].innerHTML
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)
tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p')
createdElement.innerText = "This is created para"
tn[0].appendChild(createdElement)
createdElement2 = document.createElement('b')
createdElement2.innerText = "This is created bold text"
tn[0].replaceChild(createdElement2, createdElement)

//query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

//13. Events
//  function clicked()
// {
//     console.log("The button was clicked")     
// }

//When page loads:
// window.onload = function()
// {
//     console.log("Window loaded")
// }

//when you click on particular container
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked"
//     console.log("You just clicked on container")
// })

//when you hover on a container
// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of container")
// })


// let prevHTML = document.querySelectorAll('.container')[1].innerHTML
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML
//     console.log("Mouse up of container")
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked"
//     console.log("Mouse down of container")
// })

//14. Arrow function
// function summ(a,b){
//     return a+b
// }

// summ = (a,b)=>
// {
//     return a+b
// }

//15. SetTimout and SetInterval
// logkaro = () => {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired"
//     console.log("I'm your log")
// }

// clr = setTimeout(logkaro,2000)
// clr = setInterval(logkaro,2000)

//16. Local Storage
localStorage.setItem("name","Suhail")
localStorage.getItem("name")

//17. JSON
obj = {name:"Suhail", length:1, a:{this: "that"}}
jso = JSON.stringify(obj)
console.log(typeof jso)
console.log(jso)
parsed = JSON.parse(`{"name":"Suhail","length":1,"a":{"this":"that"}}`)
console.log(parsed)

//18. Version
// ECMA Script