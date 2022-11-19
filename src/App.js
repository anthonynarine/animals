import {useState} from "react";
import AnimalShow from "./AnimalShow";

//This function will select a random string from the array and return it
function getRandomAnimal(){
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
    const [animals, setAnimal] = useState([]);

    const handleClick = () => {
        setAnimal([...animals, getRandomAnimal()])
    };

    return <div>
        <button onClick={handleClick}>Add Animal</button>
        <div>{animals}</div>
    </div>
};

export default App;



// 1. start off with an empty array 
// 2. everytime user clicks on that button we run handleclick and add data