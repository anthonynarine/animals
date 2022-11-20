import "./AnimalShow.css";
import { useState } from "react";
import bird from "./svgArt/bird.svg";
import cat from "./svgArt/cat.svg";
import cow from "./svgArt/cow.svg";
import dog from "./svgArt/dog.svg";
import gator from "./svgArt/gator.svg";
import heart from "./svgArt/heart.svg";
import horse from "./svgArt/horse.svg";


const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

function AnimalShow ({type}) {
    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(clicks + 1);

    }

    return <div className="animal-show" onClick={handleClick}>
        <img className="animal" alt="animal" src={svgMap[type]} />
        <img className="heart" alt="heart" src={heart} style={{width: 10 + 10 * clicks + "px"}} />
    </div>
}

export default AnimalShow;