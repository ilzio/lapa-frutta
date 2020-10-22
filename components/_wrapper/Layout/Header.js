import React from 'react'

function Header() {
    return (
        <div className="Header">
            <div className="logoContainer" />
            <nav>
                chi siamo
                cosa facciamo
                ordina online
            </nav>
                
        <style jsx>{`
            .Header{
                width: 100%;
                height: 56px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .logoContainer {
                height: 40px;
                width: 40px;
                border-radius: 50%;
                background: url('/assets/image.png');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                object-fit: cover;
                box-sizing: border-box
            }
            .logo {
                height: 100%;
                width: 100%;
            }
        `}</style>
        </div>
    )
}

export default Header
