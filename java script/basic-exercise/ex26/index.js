synchronous
function fetchUserDataSync(){
    alert("hello world")
    return {id:36665,name:"nuur"}
}
console.log("start")
const user = fetchUserDataSync()
console.log("user information",user)

// async
function getUserData(){
    setTimeout(()=>{
        a= 10
        b= 20
        x = a+b
        console.log(x)
    },3000)
}
console.log("starting")
getUserData()
console.log("end")