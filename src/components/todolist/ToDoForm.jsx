import React from "react";
import { useState } from "react";

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={userInput}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Введите значение..."
            />
            <button>Сохранить</button>
        </form>
    )

}

export default ToDoForm