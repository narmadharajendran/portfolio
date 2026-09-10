import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Project } from "../../types/types";
import "./carousel.scss";

type carouselProps = {
    selectedProject : Project | null
}
const CustomCarousel: React.FC<carouselProps> = (props) => {
    const {selectedProject} = props;
    const [index, setIndex] = useState(0);
    if (!selectedProject) return null; // nothing to show
    const {image = [], title = "", description = ""} = selectedProject;

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return(
        <>  
            <div className="carousel-container">
                <div className="header">
                    <span className="circle red"></span>
                    <span className="circle yellow"></span>
                    <span className="circle green"></span>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {image.map((slide:string, index : number) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={slide}
                                alt={title}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className="custom-dots mt-3">
                {image.map((_, idx) => (
                <span
                    key={idx}
                    className={`dot ${idx === index ? "active" : ""}`}
                    onClick={() => setIndex(idx)}
                />
                ))}
            </div>
        </>
    )
}

export default CustomCarousel;