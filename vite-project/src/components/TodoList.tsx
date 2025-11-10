import {type JSX } from "react";
import {type Todo} from '../Todo'

interface props{
    todos: Todo[],
    setTodos : React.Dispatch<React.SetStateAction<string>>
}
export default function TodoList({todos, setTodos}: props):JSX.Element{
    return(
        <>
            {
                todos.map((e)=>(
                    <li>{e.todo}</li>
                ))
            }
        </>
    )

}