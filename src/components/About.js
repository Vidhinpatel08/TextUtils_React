import React from 'react'

export default function About(props) {
    return (
        <div className='container my-3 py-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1>About Us</h1>
            <div className="accordion " id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'rgb(21 22 37)' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'rgb(21 22 37)' }}>
                            <p>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'rgb(21 22 37)' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'rgb(21 22 37)' }}>
                            <p>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'rgb(21 22 37)' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Brower Compatible</strong>

                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'rgb(21 22 37)' }}>
                            <p>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
