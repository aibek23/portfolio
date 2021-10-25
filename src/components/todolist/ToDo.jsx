import React from "react"
import s from "./Todolist.module.css"
function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className={s.item_todo}>
            <div
                className={`${s.item_text}  ${todo.complete ? s.strike : ""}`}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className={s.item_delete} onClick={() => removeTask(todo.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo