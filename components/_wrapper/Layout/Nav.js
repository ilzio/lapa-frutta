import React from 'react'
import Link from 'next/link'

const Nav = ({ links }) => {
    return (
        <div className="Nav">
            {links.map(link => (
                <Link href={link.href}>
                    <a>{link.label}</a>

                </Link>

            ))}
            <style jsx>{`
               .Nav{
                   color: #0f52da;
                   font-weight: bold;
                    
               }
            `}</style>
        </div>
    )
}

export default Nav
