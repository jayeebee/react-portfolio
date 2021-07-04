import React from 'react';

function Nav() {

    const  categories = [
        { name: 'title-1', description: 'des-1' },
        { name: 'title-2', description: 'des-2' },
        { name: 'title-3', description: 'des-3' },
        { name: 'title-4', description: 'des-4' }
      ];

      const handleClick = () => {
        console.log("click handled")
      }

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="computer"> 🖥️ </span> Jason Bailey
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handleClick()}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => handleClick()}>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name} >
                            <span onClick={() => { handleClick(); }} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;