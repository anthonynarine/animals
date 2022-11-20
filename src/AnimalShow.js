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
    return <div>
        <img alt="animal" src={svgMap[type]} />
    </div>
}

export default AnimalShow;