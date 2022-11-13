import { SkillProps } from "./skills.types";
import { useEffect, useState } from "react";

const Skills = (props: SkillProps) => {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 800);
    }, []);

    return ( 
        <div>
            <ul>
            {skills.map((item,index) => <li key={index}>{item}</li>)
            }
            </ul>
            {
                isLoggedIn ? (
                    <button>Start learning</button>
                ) : (
                    <button onClick={() =>  setIsLoggedIn(true)}>Login</button>
                )
            }
          
        </div>
     );
}
 
export default Skills;