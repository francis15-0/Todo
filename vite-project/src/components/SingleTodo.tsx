import {type Todo} from '../Todo'
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import "../styles/SingleTodo.css"
type props = {
    todo : Todo,
    todos: Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>

}




export default function SingleTodo({todo, todos, setTodos}:props){
    const handleDone = (id: number)=>{
        setTodos(
            todos.map((todo)=>
                todo.id === id ? {...todo, isDone: !todo.isDone} : todo
            )
        );

    }

    const handleDelete = (id: number)=>{
        setTodos(
            todos.filter((todo)=>(
                todo.id !== id
            ))
        )
    }
    return(
        <>
            <div className='todo-box'>

                {
                    todo.isDone ? 

                    (<s>{todo.todo}</s>)
                    :
                     (<p>
                    {todo.todo}
                    </p>)
                }


               

                <div className='icons'>
                    <MdDeleteForever onClick={()=>handleDelete(todo.id)}/>
                    <FaCheck onClick={()=>handleDone(todo.id)} />
                </div>
                
            </div>
        </>
    )
}