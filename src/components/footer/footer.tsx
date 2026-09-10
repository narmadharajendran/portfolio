import React from "react";
import "./footer.scss";

interface FooterProps {
    id:string,
    innerRef: React.RefObject<HTMLDivElement | null>,
}
const Footer : React.FC<FooterProps> = (props) =>{
        const{id, innerRef} = props;

    return(
        <footer className="footer" id={id} ref={innerRef}>
            <span>Created By Narmadha Rajendran</span>
        </footer>
    )
}

export default Footer;