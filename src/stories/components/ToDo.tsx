import React from 'react'
import styles from "./ToDo.module.css"
interface ToDoProps {
    id: string;
    todo: string;
    isCompleted?: boolean;
}
export const ToDo = ({id, todo, isCompleted}: ToDoProps) => {
    const [completed, setCompleted] = React.useState(isCompleted)
  return (
    <div>
        <input type="checkbox"
        onChange={(e) => setCompleted(e.target.checked)}
        checked={completed}
        id={id}
        />
        <span className={completed ? styles.enabled : ""}>{todo}</span>
    </div>
  )
}

