import React from 'react'

export default function Header() {
    return (
        <nav className="navbar bg-light mb-4 p-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <div className="d-flex">
                        <img src="../vite.svg" className="logo mr-2" alt="Vite logo" />
                        <div>GraphQL + MERN</div>
                    </div>
                </a>
            </div>
        </nav>
    )
}
