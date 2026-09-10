import React from "react";
import "./project-detail-modal.scss";
import { Project } from "../../types/types";
import CustomCarousel from "../carousel/carousel";

interface modalProps {
    closeModal: () => void;
    showModal: boolean;
    selectedProject: Project | null
}
const ProjectDetailModal : React.FC<modalProps> = (props) => {
    const {closeModal, showModal, selectedProject} = props;
    if (!selectedProject) return null; // nothing to show
    const {title, description, skills} = selectedProject;

    return(
        <>
        <div className={`fade modal-backdrop ${showModal ? "show" : ""}`}></div>
        <div className={`modal ${showModal ? "show" : ""}`} tabIndex={-1}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">  
                        <button onClick={closeModal} type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">
                            <span className="icon-close"></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <CustomCarousel selectedProject = {selectedProject}/>
                        <h3 className="title">{title}</h3>
                        <p className="description">{description}</p>
                        {skills.length >= 1 && <div className="skills">
                            {skills.map((skill:string) => (
                                <div className="skill-container">
                                    <span className={`skill-icon icon-${skill.toLocaleLowerCase()}`}></span>
                                    <span>{skill}</span>
                                </div>                           
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectDetailModal;