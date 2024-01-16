
import './App.css';
 import { ToDoCounter } from './ToDoCounter';
 import { ToDoSearch } from './ToDoSearch';
 import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos=[
  {text:'cortar cebolla', completed:false},
  {text:'Tomar el curso de intro a React.js', completed:true},
  {text:'cortar cebolla 2', completed:false},
  {text:'Usar estados derivados', completed:false},
  {text:'LALALA', completed:false},
]
function App() {
  const [searchValue, setSearchValue]= React.useState('');
 

  const [todos, settodos]= React.useState(defaultTodos);

  const completedTodos= todos.filter(todo=> todo.completed).length
  const totalTodos= todos.length
  const searchedTodos=todos.filter((todo)=>todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    settodos(newTodos);
  };



 const deleteTodo= (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    settodos(newTodos);
  };



  return (
    <>
      <header className="App-header">
        <ToDoCounter completed={completedTodos} total={totalTodos}/>
        <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        
        <ToDoList>
          {searchedTodos.map(todo=>(
            <ToDoItem key={todo.text} text={todo.text} completed={todo.completed} OnComplete={()=>completeTodo(todo.text)} onDelete={()=>deleteTodo(todo.text)}/>
          ))}
        </ToDoList>

        <CreateToDoButton/>

      
      </header>
    </>
  );
}

export default App





