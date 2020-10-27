import React from 'react'

const Button = (text) => {
    return (
        <div className="Button">
            {text && (
                text
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
