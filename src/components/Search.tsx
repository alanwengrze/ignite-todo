import { ChangeEvent, FormEvent }from "react"
import styles from './Search.module.css'
import { PlusCircle } from "@phosphor-icons/react"

interface SearchProps {
  title: string
  value: string
  onAddTask: (e:FormEvent) => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export function Search({title, value,onAddTask, onChange}: SearchProps) {
  return (
    <section className={styles.container}>
      <input 
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={onChange}
        value={value}
      />
      <button onClick={onAddTask}>{title} <PlusCircle /></button>
    </section>
  )
}