import React from 'react'
import { createContext,useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
    items: Todo[];
    addTodo: (text:string) => void;
    removeTodo: (id: string) => void;
}
type TodosContextProviderProps = {
    children: React.ReactNode;
  };

//이 객체의 타입을 정의하려면 제네릭 타입을 정의해야 한다.
export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC <TodosContextProviderProps> = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    }
    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId)
        });
    }
    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {children}
    </TodosContext.Provider>
}

export default TodosContextProvider;