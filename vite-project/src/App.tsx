import React, { useState } from 'react'
import '../src/styles/App.css'
import InputField from './components/InputFieild'
import type { Todo } from './Todo'
import TodoList from './components/TodoList'

function App() {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  let handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone:false}])
      setTodo("");
    }
  } 


  return (
    <>
      <section>
        <h1>Taskify</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodo} />
      </section>
      
    </>
  )
}

export default App
