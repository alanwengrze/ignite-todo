import styles from './Task.module.css'
import { Trash, Check } from '@phosphor-icons/react'

export interface TaskType {
  id: number
  title: string
  isCompleted: boolean
}
interface TaskProps {
  task: TaskType
  onDeleteTask: () => void
  onCompleteTask: () => void
}
export function Task({task, onDeleteTask, onCompleteTask}: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={task.isCompleted ? styles.checkboxWithCheck : styles.checkbox}>
        <input 
          type="checkbox"
        />
        <button onClick={onCompleteTask}><Check /></button>
      </div>
      <p className={task.isCompleted ? styles.taskCompleted : ''}>{task.title}</p>
      <button onClick={onDeleteTask}><Trash /></button>
    </div>
  )
}