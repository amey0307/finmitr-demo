import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import imgg1 from "../assets/images/image 17.png";
import imgg2 from "../assets/images/image 18.png";
import 'team.css';
const Team = () => {
    const lorem20 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    const team = [
        {
            name: "John Doe",
            details: {
                info: lorem20
            }
        },
        {
            name: "Jane Smith",
            details: {
                info: lorem20
            }
        },
        {
            name: "Alice Johnson",
            details: {
                info: lorem20
            }
        },
        {
            name: "Bob Brown",
            details: {
                info: lorem20
            }
        },
        {
            name: "Charlie Davis",
            details: {
                info: lorem20
            }
        },
        {
            name: "Diana Evans",
            details: {
                info: lorem20
            }
        },
        {
            name: "Eve Foster",
            details: {
                info: lorem20
            }
        },
        {
            name: "Frank Green",
            details: {
                info: lorem20
            }
        }
    ];
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <div className="leader">
                <div className={`team ${isHovered ? '' : 'a'}`} id="a">
                    <img src={imgg1} alt="left" className="imgC"></img>
                    <h2 className="name">ARAVIND S</h2>
                    <p>{lorem20}</p>
                </div>
                <div className="team" id="b" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                    <h1 id="centrecard">INTRODUCING THE FINMITR TEAM</h1>
                </div>
                <div className={`team ${isHovered ? '' : 'c'}`} id="c">
                    <img src={imgg2} alt="right" className="imgC"></img>
                    <h2 className="name">DHRUV NAIR</h2>
                    <p>{lorem20}</p>
                </div>
            </div>
            <div className="members">
                {team.map((member, index) => (
                    <Card key={index} member={member} />
                ))}

            </div>
        </div>

    )
}
export default Team;