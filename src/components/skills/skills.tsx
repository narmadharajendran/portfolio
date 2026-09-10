import React from "react"
import "./skills.scss"

interface projectProps {
    id:string,
    innerRef: React.RefObject<HTMLDivElement | null>,
}
const Skills : React.FC<projectProps> = (props) =>{
    const {id, innerRef} = props;

    const skillsSet = ["Html5", "Css", "Sass", "Bootstrap", "Javascript", "Typescript", "React", "Redux",
        "ReduxSaga", "Zustand","NodeJS","ExpressJS","MongoDB", "Git"]
    return(
        <div className="skill-container" id={id} ref={innerRef}>
            <h1 className="heading">SKILLS</h1>
            <div className="skills">
                {skillsSet.map((skill, index) => (
                    <div className="skill" key={index}>
                        <span className={`skill-icon icon-${skill.toLocaleLowerCase()}`}></span>
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills