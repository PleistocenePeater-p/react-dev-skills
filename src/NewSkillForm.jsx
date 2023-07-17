export default function NewSkillForm () {
    return (
        <form className="NewSkillForm">
            <label htmlFor="">
                Skill
                <input type="text" />
            </label>
            <label htmlFor="">
            <br />
                Level
                <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
            </label>
            <br />
            <button>ADD SKILL</button>
        </form>
    );
}