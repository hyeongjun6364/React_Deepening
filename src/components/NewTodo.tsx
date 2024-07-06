import { useRef,useContext } from "react";

import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC  = () => {
    const todosCtx = useContext(TodosContext)
    //input의 타입값으로 HTMLInputElement을 넣어야 하고, 기본값으로 null을 써야한다. -> 안그러면 오류남
    const todoTextInputRef = useRef<HTMLInputElement>(null);


    //form 제출의 경우 React.FormEvent를 활용하여 타입을 지정한다.
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        //trim(): 이 메서드는 문자열 양 끝의 공백(공백, 탭 및 줄 바꿈)을 제거합니다
        if (enteredText?.trim().length === 0){
            //throw an error
            return;
        }

        todosCtx.addTodo(enteredText)
    }
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type= "text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;

