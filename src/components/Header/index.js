import React from 'react';

function Header() {
        return(
            <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="computer"> 🖥️ </span> Jason Bailey
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="https://jayeebee.github.io/react-portfolio/about" >
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                    <a href="https://jayeebee.github.io/react-portfolio/contact" >
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                    <a href="https://jayeebee.github.io/react-portfolio/portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                    <a href="https://jayeebee.github.io/react-portfolio/resume" >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        )
    }

export default Header;