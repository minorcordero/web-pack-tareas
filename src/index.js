

import './styles.css';

import { Todo, TodoList } from './classes'; //con esto importamos el index.js por defecto
import { crearTodoHtml } from './js/componentes';

//const tarea = new Todo('aprender javascript!!');
export const todoList = new TodoList();

//todoList.nuevoTodo( tarea );
//todoList.nuevoTodo( tarea2 );

console.log( todoList );

todoList.todos.forEach( crearTodoHtml );

console.log( 'todos', todoList.todos );


//crearTodoHtml( tarea );
