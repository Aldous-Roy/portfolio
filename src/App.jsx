import { useState } from 'react'
import Large from './pages/Large'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Large/>
      <h1 className='text-3xl'>hello</h1>
    </div>
    </>
  )
}

export default App
