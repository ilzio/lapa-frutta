import React from 'react'
import Logo from "./Logo"
import Nav from "./Nav"
const links = [
    {
        label: "About Us",
        href: "about"
    },
    {
        label: "Why choose us",
        href: "what"
    },
    {
        label: "Order Online",
        href: "order"
    },
]

function Header() {
    return (
        <div className="Header">
            <Logo image="/assets/image.png" />
            <Nav links={links} />
            <style jsx>{`
            .Header{
                width: 100%;
                height: 56px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
            }
            
        `}</style>
        </div>
    )
}

export default Header
