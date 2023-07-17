export default function SkillListItem ({skill}) {
    return (
        <ul className="SkillListItem">
        <li>{skill.name}{skill.level}</li>
        </ul>
    );
}