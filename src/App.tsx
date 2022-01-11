import { useState } from 'react'
import './App.css'
import SendButton from './index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      app  <SendButton />
    </div>
  )
}

export default App
