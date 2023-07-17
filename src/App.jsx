import { useState } from 'react'
import './App.css'
import './SkillList';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr></hr>
      <NewSkillForm />
  </div>
  )
}

export default App
