import React from 'react';

/*function App() {
    return (
        <div className="App">
            <h1>Welcome to My Portfolio</h1>
        </div>
    );
}*/


import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';
import './index.css';

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Projects />
            <Education /> 
            <Skills />
            <Contact />
        </div>
    );
}

export default App;



