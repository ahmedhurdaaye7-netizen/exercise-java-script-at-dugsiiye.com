

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