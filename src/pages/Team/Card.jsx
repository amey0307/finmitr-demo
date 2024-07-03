import { useState } from "react";
const Card = ({ member }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className="card" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            <div className="circleimg"></div>
            <h2 id="memName">{member.name}</h2>
            <div id="details">
                {isHovered && <p >{member.details.info}</p>}

            </div>
            
        </div>
    );
};

export default Card;
