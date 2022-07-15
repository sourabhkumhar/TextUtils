import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted into Uppercase", "Success")
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted into Lowercase", "Success")
    }

    const handleCapitalize = () => {
        setText(text.replace(/\b(\w)/g, s => s.toUpperCase()))
        props.showAlert("Converted first letter of all words into Capital", "Success")
    }

    const handleExtraSpace = () => {
        setText(text.replace(/\b(\w)/g, s => s.toUpperCase()))
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All extra spaces removed", "Success")
    }

    const clear = () => {
        setText("")
        props.showAlert("Text is Cleared", "Warning")
    }

    const copy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied", "Success")
    }

    const reverse = () => {
        setText(text.split("").reverse().join(""));
        props.showAlert("Converted into Reverse Characters", "Success")
    }

    const [text, setText] = useState('');
    // text = "New Text";   Wrong way to change the state
    // setText("New Text"); Correct way to change the state

    return (
        <div className='my-3' style={{color: props.currMode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" style={{backgroundColor: props.currMode==='light'?'white':'black', color: props.currMode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} placeholder="Enter Text Here..." rows="8" id="myBox"></textarea>

            <div className='my-3'>
                <button onClick={handleUpperCase} className={`btn btn-${props.currTheme} m-1`}>Uppercase</button>
                <button onClick={handleLowerCase} className={`btn btn-${props.currTheme} m-1`}>Lowercase</button>
                <button onClick={handleCapitalize} className={`btn btn-${props.currTheme} m-1`}>Capitalize</button>
                <button onClick={handleExtraSpace} className={`btn btn-${props.currTheme} m-1`}>Remove Extra Spaces</button>

                <button onClick={reverse} className={`btn btn-${props.currTheme} m-1`}>Reverse</button>

                <button onClick={clear} className={`btn btn-${props.currTheme} m-1`}>Clear</button>
                <button onClick={copy} className={`btn btn-${props.currTheme} m-1`}>Copy</button>

                <hr />

                <div className="container my-3">
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008 * (text.split(" ").filter((element) => {return element.length!==0}).length)} Minutes read</p>

                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
