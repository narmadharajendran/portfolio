import React, { useMemo } from "react"
import { ExperienceType } from "../../types/types"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import "./experience.scss"

interface contactProps {
    id:string,
    innerRef: React.RefObject<HTMLDivElement | null>,
    experience: ExperienceType[]
}

const Experience:React.FC<contactProps> = (props) =>{
    const{id, innerRef, experience} = props;

    const work = useMemo(()=>{
        if(experience.length){
            return experience.map((exp, i) => {
                let mainTech, tech;
                if(exp.mainTech){
                    mainTech = <span className="vertical-timeline-element-main-tech">{exp.mainTech}</span>
                }
                tech = exp.technologies.map((technology, index)=>{
                    return <span className="vertical-timeline-element-tech" key={index}>{technology}</span>
                })
            return(
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={exp.years}
                    iconStyle={{
                        textAlign: "center",
                    }}
                    icon={<span className={`exp-icon icon-${exp.mainTech ? exp.mainTech.toLocaleLowerCase() : "html5"}`}></span>}
                    key={i}
                >
                    <div style={{ textAlign: "left", marginBottom: "4px" }}>
                        {mainTech}
                    </div>

                    <h3
                        className="vertical-timeline-element-title"
                        style={{ textAlign: "left" }}
                    >
                    {exp.title}
                    </h3>
                    <h4
                        className="vertical-timeline-element-subtitle"
                        style={{ textAlign: "left" }}
                    >
                    {exp.company}
                    </h4>
                    <div className="vertical-timeline-element-tech-container" style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
                </VerticalTimelineElement>
            );
        })
        }
        return null;
    },[experience]);
    return(
        <div className="experience-container" id={id} ref={innerRef}>
            <h1 className="heading">EXPERIENCE</h1>
            <div className="vertical-timeline-container">
                <VerticalTimeline animate={true}>
                    {work}
                    <VerticalTimelineElement
                        iconStyle={{
                            textAlign: "center",
                            fontSize:"2rem"
                        }}
                        icon={
                            <span className="exp-icon icon-hourglass"></span>
                        }
                    />
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience