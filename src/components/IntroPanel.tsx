import React from 'react';
import { useEffect, useRef } from 'react';

interface introPanelProps {
    title: string;
    desc: string;
    codes: string;
    color?: string;
    background: string;
}

function IntroPanel({title, desc, codes, color, background}: introPanelProps){
    const codeRef = useRef<HTMLDivElement | null>(null); 
    const style = {
        backgroundColor : background,
        color : color
    };

    useEffect(()=>{
        codeRef.current!.innerHTML = codes;
    }, []);

    return (
        <div className='intro-panel' style={style}>
            <div className='intro-content'>
                <div className='intro-block'>
                    <h1>{title}</h1>
                    <h4>{desc}</h4>
                    <div className='btn-1'>Learn {title}</div>
                    <div className='btn-1'>{title} Reference</div>
                </div>
                <div className='code-block'>
                    <h3>{title} Example</h3>
                    <div ref={codeRef} className='code-box'></div>
                    <div className='btn-1'>Try it yourself</div>
                </div>
            </div>
        </div>
    );
}

export default IntroPanel;