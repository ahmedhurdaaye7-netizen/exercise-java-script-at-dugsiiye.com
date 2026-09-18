// while loop
// let number= 10
// while(number<5){
//     console.log(number)
//     number++

// }
// let number =9
// do{
//     console.log(number)
//     number ++
// }while(number<8)
// for of loop
let students =["nuur","farax","muuse","nuur","farax","muuse","nuur","farax","muuse","nuur","farax","muuse","nuur","farax","muuse","geedi","muuse"]
// for( let student of students){
//     console.log(student)
// }
// // for(let i = 0; i<students.length; i++){
// //     console.log(students[i])
    


// // }
// for(let i= 0;i<students.length; i++){
//     console.log(students[i])

// }
// let number =5
// while (number<5) {
//     console.log(number)
//     number++
    
// }
// let number =10;
// do{
//     console.log(number)
//     number++

// } while(number<8)
// for(let student of students){
//     console.log(student)

// }
// const name="nuur"
// const city= "mogadishu"
// const message =`hello ${name} welcome to ${city}`
// console.log(message)
// const  numbers=[1,2,3,4,5]
// numbers[0]
// console
// const person = {name: "frax",age:22,city:"mogadishu"}
// const {name,age,city}=person
// console.log(name)
// const numbers =[1,2,3,5,6,7]
// // const allNumbers=[...numbers,8,9,12,15,20]
// // console.log(allNumbers)
// function sum(...numbers){
//     numbers.reduce((total,num)=>total+num,0)

// }
//   console.log( sum(2,5,7))
// setTimeout(()=>{
//     console.log("after 3 second")
// },2000)
// function fetchUserDataSync(user){
//     alert("fetch user data")
//     return {id:1,name:"nuur",faculty:"cs"}
// }
// console.log("starting user fetch")
// const user= fetchUserDataSync()
// console.log("user data",user)
// console.log("the message")
// function userDataSync(){
//     alert("user data")
//     return {id:36665,name:"ahmed maxamed ahmed"}
// }
// console.log("starting user data displaying")
//  const user=  userDataSync()
//  console.log("user",user)
// console.log("welcome to our home")

// function fetchUserDataSync(){
//     alert("hello world")
//     return {id:36665,name:"nuur"}
// }
// console.log("start")
// const user = fetchUserDataSync()
// console.log("user information",user)
function fetchUserData(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const sucsess= false
            if(sucsess){
                resolve({id:36665,name:"ahmed maxamed ahmed"})
            } else{
                reject("failed to fetch user data")
            }


        },2000)
        
    })
}
// fetchUserData()
// .then((data)=> console.log("user datsa",data))
// .catch((error)=> console.log(error))
async function displayUserData() {
    try{
        const user = await fetchUserData()
        console.log("user data",user)

    } catch(error){
        console.log(error)


    }
    
}
displayUserData()


