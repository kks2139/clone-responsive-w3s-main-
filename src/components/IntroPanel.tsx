import React from 'react';

interface introPanelProps {
    title: string;
    desc: string;
    codes: string;
}

function IntroPanel({title, desc, codes}: introPanelProps){
    return (
        <div className='intro-panel'>
            <div className='intro-block'>
                <h1>{title}</h1>
                <div>The Language for {desc}</div>
                <div className='btn-1'>Learn {title}</div>
                <div className='btn-1'>{title} Reference</div>
            </div>
            <div className='code-block'>
                <h3>{title} Example</h3>
                <div>{codes}</div>
                <div className='btn-1'>Try it yourself</div>
            </div>
        </div>
    );
}

export default IntroPanel;