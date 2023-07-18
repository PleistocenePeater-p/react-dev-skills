import "./SkillListItem.css"
export default function SkillListItem ({skill}) {
    return (
        <ul className="SkillListItem">
        <li>{skill.name}<span className="level">{skill.level}</span></li>
        </ul>
    );
}