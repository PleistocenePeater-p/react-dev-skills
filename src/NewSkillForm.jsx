import "./NewSkillForm.css"
import { useState } from "react";

export default function NewSkillForm ({newSkill}) {
    const [skill, setSkill] = useState({
        name: '',
        level: 3
    })

    /*
    const [errorMessage, setErrorMessage] = useState("")
    */

    function handleChange(e) {
        console.log(e.target.value);
    
        setSkill({
            ...skill,
            [e.target.name]: e.target.value
        })
      }

    function handleSubmit(e){
        e.preventDefault();
        /*if (skill.name === ""){
            return setErrorMessage("Enter a valid skill name")
        }
        */
       newSkill(skill);
       /*setErrorMessage("");*/
       setSkill({
        name: "",
        level: 3
       })
    }

//<span>{errorMessage ? errorMessage : ""}</span>
    return (
    <>

        <form className="NewSkillForm" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Skill name"
                value ={skill.name}
                onChange={handleChange}
            />                
            <select name="level" onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button>ADD SKILL</button>
        </form>
    </>
    );
}