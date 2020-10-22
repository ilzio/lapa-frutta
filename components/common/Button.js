import React from 'react'

const Button = (props) => {
    console.log('button props', props)
    return (
        <div className="Button">
            {props.text && (
                props.text
            )}
            <style jsx>{`
                .Button{
                    color: white;
                    background-color: #0f52da;
                    padding: 12px 16px;
                    width: max-content;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    )
}

export default Button
