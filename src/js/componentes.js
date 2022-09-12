import { todoList } from "..";
import { Todo, TodoList } from "../classes";


//Referencias en el HTML 
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');


export const crearTodoHtml = (todo) => {


    const htmlTodo = `
    <li class="${(todo.completado)?'completed':''}" data-id=${todo.id}>
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    //div TodoList
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

//Eventos

txtInput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13 && txtInput.value.length > 0) {
        // console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value)
        todoList.nuevoTodo(nuevoTodo);

        // console.log(todoList);

        crearTodoHtml(nuevoTodo);

        txtInput.value = '';
    }
})

divTodoList.addEventListener('click',(e) => {
    // console.log('Click');
    // console.log(e.target.localName);

    const nombreElemento = e.target.localName; //input,label,button
    const todoElemento = e.target.parentElement.parentElement; //input
    const todoId = todoElemento.getAttribute('data-id');
    // console.log(todoElemento);
    // console.log(todoId);

    // console.log(nombreElemento);

    if(nombreElemento.includes('input')){ //Click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed')
    }else if(nombreElemento.includes('button')){ //Hay que borrar el todo
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }

    // console.log(todoList);

})
