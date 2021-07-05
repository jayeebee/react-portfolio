import React from 'react';
import git from "../../assets/git.svg";
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import { Image } from 'react-bootstrap';

function Footer() {
    return(
    <section>
        <a href="https://github.com/jayeebee/"><Image width="35vw" src={git} alt="git button" /></a>
        <a href="https://www.linkedin.com/in/jason-bailey-27a2b5205/"><Image width="35vw" src={linkedin} alt="this is currently in hibernation until i update it" /></a>
        <a href="https://twitter.com/dril"><Image width="35vw" src={twitter} alt="note: i am not dril" /></a>
    </section>
    )
}

export default Footer