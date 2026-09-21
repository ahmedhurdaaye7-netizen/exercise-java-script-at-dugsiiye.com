// async function fetchUserData() {
//     console.log("starting fetch user")

//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json();
//     console.log("response: ",data)
    
// }
// fetchUserData()



// async function fetchUserData() {

//  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//  const data =  await response.json();
//  console.log('reponse',data)

    
// }
// fetchUserData()

// async function fetchUserData() {

// try{
//     const reponse = await fetch('https://jsonplaceholder.typicode.com/posts',{
//       method: 'post',
//      headers:{
//         'Content-type': 'application/json'
//      },

//      body: JSON.stringify({
//         title :"the title of the post",
//         body: 'the body of the post',
//         userId: 1
//      })



//     })

//     if(!reponse.ok){
//         throw new error(`http resqusr ${reponse.status}`)
//     }
   

//     const data = await reponse.json()
//     console.log("response",data)


// } catch(error){
//     console.log(error)
// }

    
// }
// fetchUserData()
// const header = document.getElementById("Header")
// console.log(header)
// function  changeText(){
//     header.textContent="asc wll"
//     header.innerHTML=
// }
const list= document.getElementById('list');


function addItem(){

const newItem = document.createElement('li')
newItem.textContent="items"

list.appendChild(newItem)

}
addItem()

function removeItem(){
if(list.lastChild){
    list.removeChild(list.lastChild)
} else{
    alert('there is not to delete!')
}

}


























