import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>Dodge the Pipes: Marine Edition</h3>
                    <p>Inspired from the highly popular game, FLAPPY BIRD, which is an endless game, this project is coded in Python language and includes a fish being controlled by the user, with the objective of preventing it from colliding with the pipes.</p>
                </li>
                <li>
                    <h3>Sleep Apnea Diagnosis</h3>
                    <p>The Python code implements a machine learning pipeline using a Random Forest classifier to predict sleep disorders based on a health and lifestyle dataset. It preprocesses data, encodes categorical variables, scales features, evaluates model performance using Stratified K-Fold cross-validation, and provides predictions for new patient data.</p>

                </li>
            </ul>
        </section>
    );
}

export default Projects;
