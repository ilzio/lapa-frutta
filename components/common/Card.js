import React from 'react'
import Button from './Button'

const Card = (props) => {
    return (
        <div className="Card">
            <div className="imageContainer" />
            <div className="contentContainer">
                {props.title && (
                    <div className="titleContainer">
                        <h3>
                            {props.title}
                        </h3>
                        
                    </div>
                )}
                {/* {props.separator && ( */}
                {true && (
                    <hr className="cardSeparator"/>
                )}
                {props.text && (
                    <div className="textContainer">
                        <p>
                            {props.text}
                        </p>
                    </div>
                )}
                {props.button && (
                    <div className="textContainer">
                        <Button text={props.button.text} href={props.button.href} />
                    </div>
                )}
            </div>
            <style jsx>{`
                .Card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    max-width: 250px;
                }
                .contentContainer{
                    text-align: center;
                }
                .titleContainer{
                    text-align: center;
                }
                .imageContainer{
                    height: 160px;
                    width: 160px;
                    background-image: url(${props.image});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 50%;
                }
            `}</style>
        </div>
    )
}

export default Card
