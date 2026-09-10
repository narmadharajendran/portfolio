import React from "react";
import "./card.scss";

interface cardProps {
    cardData : {
        title: string,
        description: string,
        image: string[],
        skills: string[]
    },
    handleClick: () => void
}
const Card : React.FC<cardProps> = (props) =>{
    const {cardData, handleClick} = props;
    const {title, description, image, skills} = cardData;
    return(
        <div className="card-container" onClick={handleClick}>
            <div className="card">
                <div className="card-image">
                    <img src={process.env.PUBLIC_URL+"/"+image[0]} alt="projectImages" height="230" style={{marginBottom: "0px", paddingBottom: "0px", position: "relative", width:"100%"}} />
                </div>
                <h3 className="title">{title}</h3>
            </div>
        </div>
    )
}

export default Card