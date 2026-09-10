import React, { useCallback, useState } from "react"
import "./projects.scss"
import Card from "../card/card";
import { Project } from "../../types/types";
import ProjectDetailModal from "../modal/project-detail-modal";

interface projectProps {
    id:string,
    innerRef: React.RefObject<HTMLDivElement | null>,
    projects: Project[],
}

const Projects:React.FC<projectProps> = (props) =>{
    const{id, innerRef, projects} = props;
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null >(null);

    const handleProjectClick = useCallback((project: Project) => {
        setShowModal(true);
        if(Object.keys(project).length) setSelectedProject(project);

    },[showModal, selectedProject]);

    const closeModal = useCallback(() =>{
        setShowModal(false);
    },[])
    return(
        <>
            <div className="project-container" id={id} ref={innerRef}>
                <h1 className="heading">PROJECTS</h1>
                <div className="project-list row g-0 row-cols-1 row-cols-md-2 row-cols-xl-3">
                    {projects.map(project => (
                        <Card cardData = {project} handleClick = {() => handleProjectClick(project)}/>
                    ))}
                </div>
            </div>
            {showModal && <ProjectDetailModal showModal={showModal} closeModal={closeModal} selectedProject={selectedProject}/> }
        </>
    )
}

export default Projects