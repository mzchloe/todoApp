const todo = new Todo()

const input = document.querySelector('.input')
const addBtn = document.querySelector('.addBtn')
const list = document.querySelector('.list')
const deleteItemsBtns = document.querySelectorAll('.itemDeleteBtn')

/* deleteItemsBtns[0].onclick = () => {
    //removing an item means removing the parent:
    const item = deleteItemsBtns[0].parentElement
    item.remove()
} */

deleteItemsBtns.forEach(deleteItemBtn => {
    deleteItemsBtns.onclick = () => {
        const item = deleteItemsBtns.parentElement
        item.remove()
    }
})


//create a function that will make a new item, the text will be the input a person puts inn:
const buildItem = (text) => {
    //we need to recreate all the elements inside <li>:
    const li = document.createElement('li')
    li.className = 'listItem'
    li.setAttribute('id', todo.idCount)
    const div = document.createElement('div')
    div.className = 'itemTextContainer'
    const input = document.createElement('input')
    input.className = 'itemCheckbox'
    input.setAttribute('type', 'checkbox')
    const span = document.createElement('span')
    span.className = "itemText"
    span.innerHTML = text 
    const button = document.createElement('button')
    button.className = 'itemDeleteBtn'
    button.innerHTML = 'X'

    button.onclick = () => {
        const item = button.parentElement
        console.log(item)
        item.remove()
    }
    li.appendChild(div)
    li.appendChild(button)
    div.appendChild(input)
    div.appendChild(span)

    return li

}

addBtn.onclick = () => {
    if(input.value){
        const inputValue = input.value
        todo.addItem(inputValue, todo.idCount)
        list.appendChild(buildItem(inputValue))
        input.value = ''
        todo.idCount++
        console.log(todo.todoItems)
    }
}

