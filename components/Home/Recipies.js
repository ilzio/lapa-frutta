import React from 'react'
import Card from '../common/Card'
import Slider from '../common/Slider'

const Recipies = (props) => {
    
    return (
        <div className="Recipies">
            <div className="headerCard">
                <Card 
                    image="/assets/cuncittina.jpeg"
                    title="Cuncittina's Recipies"
                    text="Learn to cook with my wife, Cuncittina"
                />
            </div>
            <Slider slides={props.slides} />
            <style jsx>{`  
                .headerCard{
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
}

export default Recipies
