import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from '../../components/About'
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact'
import Resume from '../../components/Resume'

export default function Nav() {


    return (
        <Router>
         <Switch>
            <Route exact path="react-portfolio/" component={About} />
            <Route path="react-portfolio/about" component={About} />
            <Route path="react-portfolio/contact" component={Contact} />
            <Route path="react-portfolio/portfolio" component={Portfolio} />
            <Route path="react-portfolio/resume" component={Resume} />
            <Route path="*" component={About} />
          </Switch>
        </Router>
      );

    /*return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="computer"> 🖥️ </span> Jason Bailey
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" >
                            About Me
                        </a>
                    </li>
                    <li>
                    <a href="#Contact" >
                            Contact
                        </a>
                    </li>
                    <li>
                    <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li>
                    <a href="#resume" >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
*/
}
