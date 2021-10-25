import React from "react";
import s from "./Todolist.module.css"
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { useState } from "react";

const getLocalStorage = () => {
    let list = localStorage.getItem('Todos')
    if (list) {
        return JSON.parse(localStorage.getItem('Todos'))
    }
    return []
}

function Todolist() {

    const [todos, setTodos] = useState(getLocalStorage());


    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                newItem: true,
                complete: false
            }
            setTodos([...todos, newItem])
            let todosLocal = JSON.stringify([...todos, newItem]);
            localStorage.setItem('Todos', todosLocal);
        }

    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
        let Todos = JSON.stringify([...todos.filter((todo) => todo.id !== id)]);
        localStorage.setItem('Todos', Todos);
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
            )
        ])
        let Todos = JSON.stringify([...todos.map((todo) =>
            todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
        )
        ]);
        localStorage.setItem('Todos', Todos);
    }

    return (
        <div className={s.todolist}>

            <h1>
                Список задач : {todos.length}
            </h1>
            <ToDoForm addTask={addTask} />
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />
                )
            })}


        </div>
    );
}
export default Todolist