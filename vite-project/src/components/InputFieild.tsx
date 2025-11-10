import { useRef, type JSX } from "react";
import '../styles/InputField.css'

type props = {
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function InputField({todo, setTodo, handleAdd}: props): JSX.Element{

    console.log(todo)
    const inputRef = useRef<HTMLInputElement>(null)
    return(
        <>
            <form className="input" 
            onSubmit={(e)=>{
                handleAdd(e)
                inputRef.current?.blur();
            }}>
                <input value={todo}
                ref={inputRef}
                 className="input_box"
                  placeholder="Enter a task"
                   type="input" 
                   onChange={(e)=>(setTodo(e.target.value))}
                   
                   />
                <button>
                    Go
                </button>
            </form>
        </>
    )
} 