const ul = document.querySelector('#todoList')
const input = document.querySelector('#msgInput')
const button = document.querySelector('#msgButton')

button.addEventListener('click', onButtonClick)

function onButtonClick() {
    const todo = getTodoData()
    if(isTodoValid(todo)){
        renderTodo(todo)
        clear()
    } else {
        showError()
    }
}

function getTodoData() {
    return { data: input.value }
}

function isTodoValid(todo) {
    return todo.value !== ''
}

function renderTodo(todo){
    const li = document.createElement('li')
    li.textContent = todo.data
    ul.append(li)
}

function clear() {
    input.value = ''
}

function showError() {
    alert('Поле сообщения не должно быть пустым!')
}