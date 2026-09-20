// async function fetchUserData() {
//     console.log("starting fetch user")

//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json();
//     console.log("response: ",data)
    
// }
// fetchUserData()



async function fetchUserData() {

 const response = await fetch('https://jsonplaceholder.typicode.com/posts')
 const data =  await response.json();
 console.log('reponse',data)

    
}
fetchUserData()





















