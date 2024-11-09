import React from 'react';
import './Skills.css';  // Custom CSS for styling skills section

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill">
                    <i className="fab fa-java"></i> {/* Java Icon */}
                    <h3>Java</h3>
                    <div className="progress-bar">
                        <div className="progress java-progress" title="80% Proficiency"></div>
                    </div>
                </div>
                <div className="skill">
                    <i className="fab fa-cuttlefish"></i> {/* C/C++ Icon */}
                    <h3>C/C++</h3>
                    <div className="progress-bar">
                        <div className="progress cpp-progress" title="75% Proficiency"></div>
                    </div>
                </div>
                <div className="skill">
                    <i className="fab fa-python"></i> {/* Python Icon */}
                    <h3>Python</h3>
                    <div className="progress-bar">
                        <div className="progress python-progress" title="85% Proficiency"></div>
                    </div>
                </div>
                <div className="skill">
                    <i className="fas fa-database"></i> {/* SQL Icon */}
                    <h3>SQL</h3>
                    <div className="progress-bar">
                        <div className="progress sql-progress" title="80% Proficiency"></div>
                    </div>
                </div>
                <div className="skill">
                    <i className="fab fa-react"></i> {/* React Icon */}
                    <h3>React</h3>
                    <div className="progress-bar">
                        <div className="progress react-progress" title="70% Proficiency"></div>
                    </div>
                </div>
                <div className="skill">
                    <i className="fab fa-html5"></i> {/* HTML Icon */}
                    <h3>HTML</h3>
                    <div className="progress-bar">
                        <div className="progress html-progress" title="95% Proficiency"></div>
                    </div>
                </div>
                <div className="skill">
                    <i className="fab fa-css3-alt"></i> {/* CSS Icon */}
                    <h3>CSS</h3>
                    <div className="progress-bar">
                        <div className="progress css-progress" title="85% Proficiency"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
