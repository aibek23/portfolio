import React from "react";
import s from "./Todolist.module.css"
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { useState } from "react";


function Todolist() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
            )
        ])
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