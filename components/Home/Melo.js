import React from 'react'
import SimpleSection from '../common/SimpleSection'

const Melo = () => {
    return (
        <div className="Melo">
            <SimpleSection
                imagePosition="left"
                image="/assets/vicchiareddu.jpg"
                title="My name is Cammelo"
                text="My name is Cammelo Scannapeco, I've been selling fruit since I was 5 years old, with my father. After learning web development at the age of 65 I started my own e-commerce and I now make 25 euros a day from my online sales. 
                I continue a family tradition" 
                button={
                    {
                        text: 'learn more',
                        href: 'about'
                 }
                }
            />
        </div>
    )
}

export default Melo
