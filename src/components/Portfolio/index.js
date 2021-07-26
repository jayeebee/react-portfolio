import React from 'react';
import { Card, Button, Image, ResponsiveEmbed } from 'react-bootstrap';
import git from "../../assets/git.svg";
import budgetTracker from "../../assets/budget-tracker.jpg"
import readmeGen from "../../assets/readme-gen.jpg"
import riddleMe from "../../assets/riddle-me.jpg"
import robotGlad from "../../assets/robot-gladiators.jpg"
import runBuddy from "../../assets/run-buddy.jpg"
import yaynayz from "../../assets/yaynayz.jpg"
import www from "../../assets/www.svg"
import dokaly from "../../assets/dokaly.PNG"

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <Card style={{ width: '18rem', backgroundColor: 'var(--secondary)' }}>
                <Card.Body>
                    <Image src={budgetTracker} alt="budget-tracker" />
                   <Card.Title style={{color: 'var(--tertiary)'}}>Budget Tracker</Card.Title>
                   <a href="https://github.com/jayeebee/budget-tracker"><Image width="35vw" src={git} alt="git button" /></a>
                   <a href="https://shrouded-inlet-08557.herokuapp.com/"><Image width="35vw" src={www} alt="www button" /></a>
                </Card.Body>
            </Card>
            <br />
            <hr />
            <br />
            <Card style={{ width: '18rem', backgroundColor: 'var(--secondary)' }}>
                <Card.Body>
                    <Image src={readmeGen} alt="read me generator" />
                   <Card.Title style={{color: 'var(--tertiary)'}}>ReadMe Generator</Card.Title>
                   <a href="https://github.com/jayeebee/readme-generator"><Image width="35vw" src={git} alt="git button" /></a>
                   <a href="https://github.com/jayeebee/readme-generator"><Image width="35vw" src={www} alt="www button" /></a>
                </Card.Body>
            </Card>
            <br />
            <hr />
            <br />
            <Card style={{ width: '18rem', backgroundColor: 'var(--secondary)' }}>
                <Card.Body>
                    <Image src={riddleMe} alt="riddle me this" />
                   <Card.Title style={{color: 'var(--tertiary)'}}>Riddle Me This</Card.Title>
                   <a href="https://github.com/brookesemke/trivia"><Image width="35vw" src={git} alt="git button" /></a>
                   <a href="https://brookesemke.github.io/trivia/"><Image width="35vw" src={www} alt="www button" /></a>
                </Card.Body>
            </Card>
            <br />
            <hr />
            <br />
            <Card style={{ width: '18rem', backgroundColor: 'var(--secondary)' }}>
                <Card.Body>
                    <Image src={robotGlad} alt="robot gladiators" />
                   <Card.Title style={{color: 'var(--tertiary)'}}>Robot Gladiators</Card.Title>
                   <a href="https://github.com/jayeebee/robot-gladiators"><Image width="35vw" src={git} alt="git button" /></a>
                   <a href="https://github.com/jayeebee/robot-gladiators/branches"><Image width="35vw" src={www} alt="www button" /></a>
                </Card.Body>
            </Card>
            <br />
            <hr />
            <br />
            <Card style={{ width: '18rem', backgroundColor: 'var(--secondary)' }}>
                <Card.Body>
                    <Image src={runBuddy} alt="run buddy" />
                   <Card.Title style={{color: 'var(--tertiary)'}}>Run Buddy</Card.Title>
                   <a href="https://github.com/jayeebee/run-buddy"><Image width="35vw" src={git} alt="git button" /></a>
                   <a href="https://jayeebee.github.io/run-buddy/"><Image width="35vw" src={www} alt="www button" /></a>
                </Card.Body>
            </Card>
            <br />
            <hr />
            <br />
            <Card style={{ width: '18rem', backgroundColor: 'var(--secondary)' }}>
                <Card.Body>
                    <Image src={yaynayz} alt="budget-tracker" />
                   <Card.Title style={{color: 'var(--tertiary)'}}>YayNayz</Card.Title>
                   <a href="https://github.com/luiscabrera77/yaynayz"><Image width="35vw" src={git} alt="git button" /></a>
                   <a href="http://yaynayz.com/"><Image width="35vw" src={www} alt="www button" /></a>
                </Card.Body>
            </Card>
            <br />
            <hr />
            <br />
            <Card style={{ width: '18rem', backgroundColor: 'var(--secondary)' }}>
                <Card.Body>
                    <Image src={dokaly} alt="dokaly" />
                   <Card.Title style={{color: 'var(--tertiary)'}}>Dokaly</Card.Title>
                   <a href="https://github.com/luiscabrera77/dokaly21"><Image width="35vw" src={git} alt="git button" /></a>
                   <a href="https://powerful-eyrie-95631.herokuapp.com/"><Image width="35vw" src={www} alt="www button" /></a>
                </Card.Body>
            </Card>
        </section>
        
    );
    
}

export default Portfolio