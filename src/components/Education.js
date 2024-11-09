import React from 'react';
import './Education.css';  // Ensure you have the corresponding CSS for styles

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education-card">
                <h3>Symbiosis Institute of Technology, Pune</h3>
                <p><strong>Degree:</strong> Bachelor's in Computer Science</p>
                <p><strong>Years:</strong> 2022 - 2026</p>
                <p><strong>GPA:</strong> 8.34 [Merit Scholarship (1st Semester)]</p>
                <p><strong>Description:</strong> I am pursuing my degree in Computer Science, with a focus on software engineering, algorithms, and machine learning.</p>
            </div>
            <div className="education-card">
                <h3>SNBP International School</h3>
                <p><strong>Degree:</strong> Class XII-CBSE</p>
                <p><strong>Years:</strong> 2020 - 2022</p>
                <p><strong>AISSCE:</strong> 94.6%</p>
                <p><strong>Description:</strong> STUDENT OF THE YEAR - 2022. I completed my high school education, specializing in math and science subjects.</p>
            </div>
            <div className="education-card">
                <h3>The Orchid School</h3>
                <p><strong>Degree:</strong> Class X-CBSE</p>
                <p><strong>Years:</strong> 2009 - 2020</p>
                <p><strong>AISSE:-:</strong> 97.6%</p>
                <p><strong>Description:</strong> Debates, Elocution, Mathematics Quiz, Science Quiz Winner, Inter-school Spelling Bee Competition Winner, Career Camp - Core Organizing Committee Member (Web Department), Basketball- House Team.</p>
            </div>
        </section>
    );
}

export default Education;
