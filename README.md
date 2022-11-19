# animals

The goal of this app is to show content on the screen
and how its going to change over time using EVENT handler
and useState function. 

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

