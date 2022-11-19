# animals

The goal of this app is to show content on the screen
and how its going to change over time with user clicks
on each inidvidual animal element

~ Button Creation ~

Problem 1.
Creating a button that a user clicks on 
that increments.

This will utilize React's Event system and the state system

~ Event system:
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
    
  ~ parentheses are not used when calling our event handler 
    function (line 39) or callback (can be called either) this give the button the whole function so the button can call the function IN THE FUTURE when the button is clicked. Adding the 
    parentheses will call the function Immediately once App.js is
    executed in the browser (no bueno)


