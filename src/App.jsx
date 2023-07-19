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

  function newSkill(skillFromTheForm){
    console.log(skillFromTheForm, ' skill From the form'); // this log occurs
    // when the user hits the form addSkill button
    setSkillsObj([
      ...skillsObj, // Spread operator
       skillFromTheForm// this puts the new user at the end of the array
     
    ])
  } 

  return (
  <div>
      <h1>React Dev Skills</h1>
      <SkillList skills ={skillsObj}/>
      <br />
      <NewSkillForm newSkill={newSkill}/>
  </div>
  )
}

export default App
