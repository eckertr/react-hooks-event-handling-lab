// Code Keypad Component Here
/*1. In the `components/Keypad.js` file, create a `Keypad` React component.
2. In that component, render an `input` with the right type.
3. On that `input`, add an event handler that listens for the `change` event.
4. When that event fires, use `console.log` to print out the text `'Entering password...'`.*/

function Keypad() {
    function handleChange(event) {
        console.log("Entering password...")
    }
    return (<input 
    type="password"
    onChange={handleChange} />)
}

export default Keypad