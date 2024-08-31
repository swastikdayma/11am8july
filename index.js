const prompt = require('prompt-sync')()
// console.log("first")

// functions


// function anything(){
//    console.log("mera naam")
// }
// anything()
// const func = ()=>{
//     console.log("second")
// }

// func()


// function add(a ,b){
//     console.log(a + b)
// }

// add(3 ,4)


// function uskaname(a , b, c){
//    console.log(a + b +c )
// }
// uskaname( 3 , 4, "swastik")

//function add(a ,b){
//     console.log(a + b )
// }


// add(3 ,4)
// add(4 ,5)
// add(8,9)



//datatypes

// string- set of characters.

// let name = "swastik nflknasklnfklan"
// let name2 =  '1 '
// let name3 = 1
// let name3 = `swastik`
// console.log(typeof(name2))
// let userDetail = prompt('enter name: ')

// let upper = userDetail.toUpperCase()
// console.log(upper)
// let string = `the quick brown fox jumps over the Jumps lazy JUMPS dog`;
// let string2 = `the quick brown fox jumps over the Jumps lazy JUMPS dog`;
// let string3 = `the quick brown fox jumps over the Jumps lazy JUMPS dog`;

// let concat = string.concat(string2, string3)
// console.log(concat)

// let splitted = string.split(' ')
// console.log(splitted)
// let include = string.includes('thes')

// let include = string.charAt(5)
// console.log(include)



// let replaced = string.replaceAll(/jumps/gi, 'sat')
// console.log(replaced)

// console.log(string.length)


// let upper = string.toLowerCase()
// console.log(upper)
// let trimmed = string.trimEnd()
// console.log(trimmed.length)

// console.log(string.length)

// let sliced = string.slice(10)


// console.log(sliced)
// console.log(string)



// +, - * mathematical
// && || ! logical
// ++ -- unary 

// let num  = 4;
// num++

// console.log(num)

// comparison operator  == , === , >=, <=

// let a = 1
// let b = 3

// console.log(a == b)




// parseInt, parseFloat

// const num1= parseFloat(prompt('enter number 1: ')) 
// const operator = prompt('enter operator either:  + , - , *, /')
// const num2 = parseFloat(prompt('enter number 2: '))

// let result= '';

// if(operator == "+"){
//     result = num1 + num2
// }
// else if(operator == '-'){
//     result = num1 - num2
// }
// else if(operator == '*'){
//     result = num1 * num2
// }
// else if(operator == '/'){
//   result = num1 / num2
// }
// else{
//     console.log('wrong input')
// }

// console.log('num1+" " + operator+ " "+ num2 + " "+ "=" + " "+ result')
// console.log(`${num1} ${operator} ${num2} = ${result}`)


//conditional statement


// let age = prompt('enter age: ')

// if(age>=18){
//     console.log('you are eligible to vote')
// }else{
//     console.log('no you cannot')
// }


// let marks = prompt('enter marks :  ')
// if(marks<=100 && marks>=90){
//     console.log('10 cgpa')
// }
// else if(marks<90 && marks>=80){
//     console.log('9cgpa')
// }
// else if(marks<80 && marks>=70){
//   console.log('8cgpa')
// }
// else if(marks < 70 && marks>=60){
//     console.log('7cgpa')
// }
// else if(marks < 60 && marks>=50){
//     console.log('6cgpa')
// }
// else if(marks < 50 && marks>=40){
//     console.log('5cgpa')
// }
// else{
//     console.log('better luck next time')
// }


// let animalHeight = prompt("enter animal height either lessthan 1 or greater than 1 (<=1 / >1): ")

// if(animalHeight<=1){
//     console.log("animal is short")

//  let squeak =  prompt('can / cannot squeak: yes/ no')
//  if(squeak == "yes"){
//     console.log('might be a squirrel')
//  }else{
//     console.log('might be a rat')
//  }
// }
// else{

//     console.log('animal is tall')

//    let neck =  prompt(`enter animal's neck , short/ long:  `)
//    if(neck == 'long'){
//     console.log('might be a giraffe')

//    }else{

//    let nose =  prompt('now tell me about nose long/short: ')
//    if(nose == "long"){
//     console.log('might be an elephant')
//    }else{

//    let live =  prompt('where does it live,  on land/ in water: ')
//    if(live == "land"){
//     console.log("might be a Rhino")
//    }else{
//     console.log('might be a hippo')
//    }
//    }
//    }


// }



// let array = [1, "swastik", 2]
// console.log(array)



// let array = [1, 2 ,3, 4 ,5 ,6, 45 , 9, 4, 5, 3,2,1 ]
// array.splice(6, 0 , 90, "swastik" , 78 )
// console.log(array)
// console.log(array.unshift(01))
// console.log(array.unshift(02))  
// let newarr = array.toString()
// console.log(newarr)

// let arr3 = [22, 33, 44, 333, 23,56,23, 10]
// const newarr = array.concat(arr3)
// console.log(newarr)

// const newarrr=  array.join('/')
// console.log(newarrr)

// arr3.sort()
// console.log(arr3)

// let arr2 = ["swastik", "shyam", "swapnil"]
// arr2.sort()
// console.log(arr2)


// array.sort()
// console.log(array)

// array.push("swastik")
// array.pop()
// array.shift()
// array.unshift("swastik")
// console.log(array)

// const sliced = array.slice(2 ,4)
//    console.log(sliced)

// array.splice(2 , 0, "swastik" , 1 ,2 ,4 , 5, 6)
// console.log(array)



// console.log(array.length)


// const array = [1,2,
//     ["swastik", null, 
//         ['1', 2],
//          1]]


// console.log(array[2][2][1])


// console.log("swastik")
// console.log("swastik")

// console.log("swastik")

// console.log("swastik")

// console.log("swastik")

// console.log("swastik")

// console.log("swastik")

// console.log("swastik")
// console.log("swastik")

// console.log("swastik")


// for(let i = 1; i<=10 ; i++){
//     console.log(i*2)
// }


// for(let i =2; i<=20; i=i+2){
//     console.log(i)
// }
// for(){
//     //statement
// }

// let arr = parseFloat(prompt('enter value: '))
// for(let i =1; i<=10; i++){
//     console.log(i*arr)
// }







// for(let i =1; i<=10; i++){
//     console.log(i*2)
// }


// let a ;

// console.log(a)

// let arr = [1, 2, 3, 4 ,5]

//  arr.forEach((swastik)=>{
//    console.log(swastik) 
// })

//  const array = arr.map((value)=>{
//     return value
// })
// console.log(array)
// console.log(newar)

// arr.map((value)=>{
//     console.log(value)
// })


// let array = [1 ,2 ,4 ,4 ,5 ,2,2,2,2,5]

// const newarr = array.reduce((previous, current)=>{
//     return previous - current
// })
// console.log(newarr)



// const newarr = array.filter((value)=>{
//     return value==2
// })
// console.log(newarr)



// o	JS numbers
// o	IsNan()
// o	.toString()

// o	Bigint
// o	.toFixed()
// o	.toPrecision()
// o	.parseFloat()
// o	.parseInt()

// let num = 45.4562345
// let newnum = num.toFixed(4)
// let num2 = num.toPrecision(5)
// console.log(newnum)
// console.log(num2)

// const num = "swastik";
// const num2 = num.toString()
// console.log(typeof(num2))
// console.log(isNaN(num2)) 



// let num =  BigInt(2312345678987654321234567876543);
// let num2 = "swastik";


// console.log(isNaN(num2))
// const newnum = num.toString()
// console.log(typeof(newnum))
// console.log(num)


// o	JS objects
// o	Object.keys
// o	Object.values
// o	Accessing value 



// o	JS Date
// o	New Date()
// o	All date methods 
// o	.getMonth
// o	.getDate()
// o	.getTime()


// const date = new Date()
// console.log(typeof(date))
// console.log(date.toDateString()) 
// console.log(date.toISOString())
// console.log(date.toLocaleDateString())
// console.log(date.toTimeString())
// console.log(date.toUTCString())

// console.log(date.getDate())
// console.log(date.getMonth()+1)
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// date.setDate(10)
// date.setFullYear(2023)
// date.setMonth(3)
// console.log(date)
// console.log(date.toJSON())


// o	JS Math methods 

// console.log(Math.PI)
// console.log(Math.round(34.56))
// console.log(Math.ceil(34.90))
// console.log(Math.floor(34.90))
// console.log(Math.trunc(34.26))
// o	Math.PI
// o	.SQRT

// o	.SQRT1_2

// o	.round
// o	.ceil
// o	.floor
// o	.trunc

// scope , hoisting , clouser, object 





//  global , function

// var - global variable

// let, const = local/ block variable

// var - global variable

// let, const - local variable
// {
//     let a = 5;
    

// }

// console.log(a)

// object

// const student = {
//     name:"swastik",
//     rollno: 28 ,
//     class:12 , 
//     dob:17
// };


// const student = {}

// student.name ='swastik';
// student.rollno = 23

// console.log(student)



// console.log(student.name)
// console.log(student.rollno)
// console.log(student.class)
// console.log(student.dob)


// console.log(student['name'])


// ternary operator

// let x = 9;

// console.log(x >=18 ? 'no cannot vote' : (x<=10 ? true:false)) 
//  (condition1) ? (statement3) : (condition2) ? (statement1) : (statement2);
 

// (condition ? true : false)

// const job = prompt('enter job title: ');

// switch(job){
//     case 'engineer':
//         console.log('zindagi barbaad hogiyaa');
//        break;
//     case 'teacher':
//          console.log('waah bhai moj kardi') 
//       break;

//     case "student":
        
//          console.log('padhai likhai par dhyan do ias yas bano, desh ka naam roshan karo , lekin nahi inhe rajneeti karni hai')     
//         break;
//     default:
//         console.log('kuch karlo bhai')
//         break;
// }

// sets - 

// const arr = new Set([1 ,2, 1, 1, 2 ,3 ,4])
// arr.add(8)
// arr.add(8)
// arr.delete(8)
// arr.entries()

// console.log(arr)

function fullname(city, state){
    return this.fname + ' '+ this.lname + ' '+ city + " " + state
}


const student = {
    fname:'girdhar',
    lname:'gopal',
    std:'12',
    rollno:21,
   
  
}


const student2 = {
    fname:'krishna',
    lname:'gopal',
    std:'12',
    rollno:21,
  
}
const student3 = {
    fname:'kanha',
    lname:'gopal',
    std:'12',
    rollno:21,
   
}





// console.log(student.fullname())
console.log(fullname.call(student, "jaipur", "raj"))
console.log(fullname.apply(student2, ["jodhpur", "raj"]))
const borrowed = fullname.bind(student3, "bhilwara","raj")
console.log(borrowed())

 





// function add(a , b){
//     return a + b
// }
// add(2 ,4)