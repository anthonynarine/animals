# animals

The goal of this app is to show content on the screen
and how its going to change over time using EVENT handler
and useState function. 

    Main React Concepts built into this project:
    1. Events and listening for events
    2. State and updating state
    3. List and using map to transform a list

~ Button Creation ~

Problem 1.
Creating a button that a user clicks on 
that increments.

This will utilize React's Event system and the state system

                ~ Event system ~ 

    This will detect a user doing something inside the app
    such as clicking on a button or draggging in element 
    typing and so on

~ State system:
    This is how we update content on the screen

 ~ Using events:
    1. Decide what kind of event you want to watch for
    2. Create a function. 
        usually called an event handler or callback func.
    3. Name the function using pattern of handle + EvenName
    4. Pass the function as a prop to a plain event
    5. Make sure to pass the function using a valid
        event name ("onClick", "onMouseOver" etc)
    6. Make sure you pass a refrence to the function
        (don't call it)

    function App() {
        const handleClick = () => {
            console.log("Button was clicked")
        }
        return <div>
            <button onClick={handleClick}>Add Animal</button>
        </div>
    };
    
  ~ parenthesis are not used when calling our event handler 
    function (line 39) or callback (can be called either) this give the button the whole function so the button can call the function IN THE FUTURE when the button is clicked. Adding the 
    parenthesis will call the function Immediately once App.js is
    executed in the browser (no bueno)

 ~ Inline handler function calls are generally used for small events 
   tasks as the one we are currently trying to a
       function App() {
        return <div>
            <button onClick={() => console.log("Button was clicked")}>Add Animal</button>
        </div>
    };

                          ~ State system ~
    State is data that changes as the user interacts with our app
    When this data changes React updates content on the screen automatically
    This is the one and ONLY way we can change what content React shows
    (if you catch yourself saying if the users clicks here i want to show this
    it means you want to use the state system)

    1. Define a piece of state with the useState function
    2. Give a value to the useState function. This is the
       default, starting value for our piece of state
    3. Use the state in some way in our component (often
       in the return JSX)
    4  When the user does something, update the piece of satate
       this causes React to render the component


                        ~ using List in React ~
       1. We want to look at every element inside the array of animals.
       2. We then want to transform each element in the array. 

          We want to take the string in the array and trun that string into 
          an instance of the AnimalShow component. 
                This gets done by the Js map function
            
        const renderedAnimals = animals.map((animal, index) =>{
            return <AnimalShow type={animal} key={index} />
        });

        ~ the key={index}  Is React doing some record keeping
          React wants to be able to identify each individual 
          element that you are using (it's unimportant for app)

        
       ~ Handling The SVG (scalable vectory graphic) images ~
            1. Import all SVG images in AnimalShow.js
            
            2. We need to somwhow take type and use it to decidewhich of the different SVGs we want to dispaly.  

               This is accomplished by creatign a object of each svg

               const svgMap = {
                    bird,
                    cat,
                    cow,
                    dog,
                    gator,
                    horse
                };
         ~ whenever we are writing an Object where the Key is IDENTICal
           to the Value we can Js allows us to write it out as show above
           Js takes the Key and assigns it a value the at the same time.
            
            As opposed to writing it out as show below. 

                 const svgMap { 
                    bird: bird,
                    cat: cat,
                    etc...
                }

            3. Now we can look up for the key of whatever that type(prop name)
               is out of our svgMap and that will give us back an svg.

            4. we add an img tag:
               A) refrence the svg map we created
                    src = {svgMap}
               B) and look up a key of type
                <img alt="animal" src={svgMap[type]} />
          
    ~ Entire Function as of now~
            
function AnimalShow ({type}) {
    return <div>
        <img alt="animal" src={svgMap[type]} />
    </div>
};


~ Using useState to show a tiny heart that grows on userClick ~

    1. import {useState} from "react";
    2. Here we will use to div to listen for clicks not the img
    
function AnimalShow ({type}) {
    return <div onClick={handleClick}>
        <img alt="animal" src={svgMap[type]} />
    </div>
};

    3. we create a funtion to handle the click

function AnimalShow ({type}) {
    const handleClick = () => {

    }

    return <div onClick={handleClick}>
        <img alt="animal" src={svgMap[type]} />
    </div>

    4. we need to create a state that tracks the num
       of times we click. We also want to increase in size
       each time we click on it.

       1. first create a piece of state called clicks
       2. everytime a user clicks we update teh clicks piece 
          of state.

function AnimalShow ({type}) {
    const [click, setClick] = useState(0)  // 1. state created 

    const handleClick = () => {           
        setClick(click + 1)                // 2. state updated
    }

    return <div onClick={handleClick}>
        <img alt="animal" src={svgMap[type]} />
    </div>

        3. to show the heart add an img tag and add image.
           Image will be styled inline. 

        ~ Styling ~
    1. in src folder create 
        App.css
        AnimalShow.css
    2. in App.js 
        import "./App.css";
       in AnimalShow.css
        import "./AnimalShow.css";   
    3. in App.js
        the top level div will be given the className app
         <div className="app"> 
    
    4. Assign class name to App.js divs tags
        1st div className="App"
        2nd div className="animal-list"

    5. Assign Class Name to AnimalShow.js divs and img tags
        1st div (only div) className="animal-show"
        1st img className="animal"
        2nd img class Name="heart"




