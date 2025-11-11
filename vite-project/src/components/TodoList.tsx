import {type JSX } from "react";
import {type Todo} from '../Todo'
import SingleTodo from "./SingleTodo";

interface props{
    todos: Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}
export default function TodoList({todos, setTodos}: props):JSX.Element{
    return(
        <>
            {
                todos.map((e)=>(
                    <SingleTodo todo={e} todos={todos} setTodos={setTodos} key={e.id} />
                ))
            }
        </>
    )

}