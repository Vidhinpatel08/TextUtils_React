import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextFrom(props) {

    const changeMe = (e) => {
        setText(e.target.value)
    }

    const convertUpCase = () => {
        let upperCase = text.toUpperCase()
        setText(upperCase)
        props.showAlert("convert to UpperCase", 'success')

    }

    const convertloCase = () => {
        let lowercase = text.toLowerCase()
        setText(lowercase)
        props.showAlert("convert to LowerCase", 'success')

    }

    const convertClear = (e) => {
        setText('')
        props.showAlert("Text Clearing", 'success')

    }

    const convertCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copy to Clipboard", 'success')

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", 'success')

    }


    const downloadFile = () => {
        if (text !== "") {
            const link = document.createElement("a");
            const file = new Blob([text], { type: 'text/plain' });
            link.href = URL.createObjectURL(file);
            link.download = "Text_Download.txt";
            link.click();
        }
        else {
            alert("Blank file not Download")
        }
    }
    const [text, setText] = useState('');

    const currentWord = (text) => {
        return text.split(/\s+/).filter((word) => { return word !== '' }).length
    }
    return (
        <>
            <div className='container my-4' style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h2>{props.heading}</h2>

                <div className=" my-4" >
                    <textarea className="form-control" value={text} onChange={changeMe} style={{ backgroundColor: props.mode === 'light' ? 'rgb(57 50 50)' : 'white', color: props.mode === 'light' ? 'white' : 'black' }} placeholder="Leave a Text here" id="mybox" rows='8'></textarea>

                </div>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={convertUpCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={convertloCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={convertClear}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={convertCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={downloadFile}>Download File</button>
            </div>

            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Your Text Summary</h3>
                <p className='mb-0'>{currentWord(text)} words and {text.length} characters</p>
                <p>{0.008 * currentWord(text)} minutes to Read</p>
                <h3>Preview</h3>
                <label>{text.length > 0 ? text : "Nothing to Preview"}</label>
            </div>
        </>
    )
}


TextFrom.prototype = {
    heading: PropTypes.string
}
TextFrom.defaultProps = {
    heading: "Enter the text to Analyze"
}

