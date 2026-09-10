import React from "react";
import "./home.scss"
import { TypeAnimation } from 'react-type-animation';
interface HomePageProps {
    id:string,
    innerRef: React.RefObject<HTMLDivElement | null>
}
const HomePage:React.FC<HomePageProps> = (props) => {
    const {id, innerRef} = props;

    const handleResumeClick = () => {
        window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank');
    };

    return(
        <>
            <div className="home-container" ref={innerRef} id={id}>
                <svg aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" className="iconify header-icon" data-icon="la:laptop-code" data-inline="false" style={{transform: "rotate(360deg)"}}><path fill={`var(--font-color)`} d="M5 6v13.563l-2.281 2.314A2.44 2.44 0 0 0 2 23.594A2.42 2.42 0 0 0 4.406 26h23.188A2.42 2.42 0 0 0 30 23.594a2.45 2.45 0 0 0-.719-1.719L27 19.562V6zm2 2h18v11H7zm9 1l-1.5 9H16l1.5-9zm-3.914 2l-1.719 2.068L10 13.5l.367.432L12.086 16l1.086-.863L11.81 13.5l1.36-1.637zm7.828 0l-1.086.863L20.19 13.5l-1.36 1.637l1.085.863l1.719-2.068L22 13.5l-.367-.432zM6.437 21h19.125l2.313 2.281a.46.46 0 0 1 .125.313a.386.386 0 0 1-.406.406H4.406A.386.386 0 0 1 4 23.594c0-.11.047-.234.125-.313z"></path></svg>
                <h1 className="name">Narmadha Rajendran</h1>
                <TypeAnimation
                    sequence={['Software Engineer',1000, 'Frontend Developer',1000,]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.8rem', display: 'inline-block', color:'var(--font-color)' }}
                    repeat={Infinity}
                />
                <div className="button-group">
                    <button className="resume-btn" onClick={handleResumeClick}>Resume</button>
                    <button className="github-btn"onClick={() => window.location.href = "https://github.com/narmadharajendran"}><span className="icon-github"></span></button>
                    <button className="linkedin-btn" onClick={() => window.location.href = "https://www.linkedin.com/in/narmadha-rajendran-902794119/"}><span className="icon-linked-in"></span></button>
                </div>
            </div>
        </>
    )
}

export default HomePage;