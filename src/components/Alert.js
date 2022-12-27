import React from 'react'

export default function Alert(props) {
    const capitalized = (word) => {
        let newText = word.toLowerCase()
        return newText.charAt(0).toUpperCase() + newText.slice(1)
    }
    return (
        <div className="" style={{ height: '5px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show py-0`}  role="alert">
                <strong>{capitalized(props.alert.type)}</strong> {props.alert.msg}
            </div>}
        </div>

    )
}
