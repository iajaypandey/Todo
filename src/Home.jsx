import {  useEffect, useState, } from 'react';
import style from './App.module.css';
import TodoItem from './components/Item/TodoItem';
import Filter from './components/Filter/Filter';
import TodoInput from './components/Input/TodoInput'



function Home() {

  const [currentFilter, setFilter] = useState('All');

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : []
  });

  // Taking input
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      complete: false,
      text
    };
    setTodos([...todos, newTodo])
  }

  // Render the item..
  function toggleComplete(id){
    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, complete: !todo.complete} : todo
    )));
  }

  // Delete the item 
  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id != id));
  }

  // filtering the task
  const filterTodos = todos.filter(todo => {
    if(currentFilter === 'All') return true
    if(currentFilter === 'Complete') return todo.complete
    if(currentFilter === 'Pending') return !todo.complete
    return true;
  })

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  return (
  <>
    <div className={style.conatiner}>
      <h1>To Do App</h1>
      <TodoInput addTodo={addTodo} />
      <Filter filterTodos={filterTodos} setFilter={setFilter} currentFilter={currentFilter}/>
      {filterTodos.map(todo => (
        <TodoItem todo={todo} toggleComplete={toggleComplete} key={todo.id} deleteTodo={deleteTodo}/>
      ))}
    </div>
  </>
  )
}

export default Home

