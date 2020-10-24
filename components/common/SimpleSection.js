import React from 'react'
import Button from './Button'

const SimpleSection = (props) => {
    return (
        <div className="SimpleSection">

            {props.imagePosition === 'left' ? (
                <>
                    <div className="image-Container" />
                    <div className="content-Container">
                        {props.title && (
                            <div className="title-Container">
                                <h3>{props.title}</h3>
                            </div>
                        )}
                        {props.text && (
                            <div className="text-Container">
                                {props.text}
                            </div>
                        )}
                        {props.button && (
                            <Button
                                text={props?.button?.text}
                                href={props?.button?.href}
                            />
                        )}
                    </div>

                </>
            ) : (
                    <>
                        
                        <div className="content-Container">
                            {props.title && (
                                <div className="title-Container">
                                    <h3>{props.title}</h3>
                                </div>
                            )}
                            {props.text && (
                                <div className="text-Container">
                                    {props.text}
                                </div>
                            )}
                            {props.button && (
                                <Button
                                    text={props?.button?.text}
                                    href={props?.button?.href}
                                />
                            )}
                        </div>
                        <div className="image-Container" />

                    </>
                )
            }

            <style jsx>{`
                .SimpleSection {
                    height: 300px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .content-Container {
                    display: flex;
                    flex-direction: column;
                    margin: 40px;
                    max-width: 450px;
                }
                .image-Container {
                    height: 200px;
                    width: 200px;
                    background: url(${props.image});
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    border-radius: 50%;
                }
            `}</style>
        </div>

    )
}









export default SimpleSection
