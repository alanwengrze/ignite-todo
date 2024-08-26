import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
