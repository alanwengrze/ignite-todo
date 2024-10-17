import { ChangeEvent, FormEvent, useState, type ButtonHTMLAttributes } from 'react'
import styles from './App.module.css'
import { NoteBlank } from '@phosphor-icons/react'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Task, TaskType } from './components/Task'
function App() {
  const [countTask, setCountTask] = useState(0)
  const [countTaskCompleted, setCountTaskCompleted] = useState(0)
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [task, setTask] = useState('')
  function handleAddTask(e:FormEvent) {
    const newTask : TaskType = {
      id: new Date().getTime(),
      title: task,
      isCompleted: false
    }

    e.preventDefault()
    setTasks([...tasks, newTask])
    setCountTask(state => state + 1)
    setTask('')
  }
  function handleChangeTask(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value)
  }
  function handleCompleteTask(taskCompleted: TaskType) {
    if(taskCompleted.isCompleted) {
      setCountTaskCompleted(state => state - 1)
      taskCompleted.isCompleted = false
      return
    }else{
      taskCompleted.isCompleted = true
      setCountTaskCompleted(state => state + 1)
      return
    }
  }
  function handleDeleteTask(taskDeleted: TaskType) {
    setTasks(state => state.filter(task => task !== taskDeleted))
  }
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Search 
          title="Criar"
          onAddTask={handleAddTask}
          onChange={handleChangeTask}
          value={task}
        />
        <div className={styles.countTask}>
           <p>Tarefas criadas <span>{tasks.length}</span></p>
           <p>Concluídas <span>{countTaskCompleted} / {tasks.length}</span></p>
        </div>
        {
          tasks.length <= 0 ?
          <div className={styles.noTask}>
            <NoteBlank />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          :
          <div>
            {
              tasks.map((task) => {
                return (
                  <Task 
                    key={task.id}
                    task={{
                    id: task.id, title: task.title, isCompleted: task.isCompleted}}
                    onDeleteTask={() => handleDeleteTask(task)}
                    onCompleteTask={() => handleCompleteTask(task)}
                  />
                )
              })
            }
          </div>
        }
      </main>
    </div>
  )
}

export default App
