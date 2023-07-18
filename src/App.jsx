import './App.css'
import './SkillList';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import { useState } from 'react'

const skills = (props) => {
  // const skills = [
  //   { name: "HTML", level: 5 },
  //   { name: "CSS", level: 3 },
  //   { name: "JavaScript", level: 4 },
  //   { name: "Python", level: 2 },
  // ];
}


function App() {
  const [count, setCount] = useState(0)
  
  const [skillsObj, setSkillsObj] = useState([
    {name: "HTML", level: 5},
    {name: "CSS", level: 3},
    {name: "JavaScript", level: 4},
    {name: "Python", level: 2}
  ])

  return (
  <div>
      <h1>React Dev Skills</h1>
      <SkillList skills ={skillsObj}/>
      <br />
      <NewSkillForm />
  </div>
  )
}

export default App
