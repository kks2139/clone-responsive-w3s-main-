import React from 'react';
import Header from '../components/Header';
import IntroPanel from '../components/IntroPanel';
import CD from '../utils/codes';

interface panelListAttr {
    title: string;
    desc: string;
    codes: string;
    color?: string;
    background: string;
}

function Main(){
    const panelList: panelListAttr[] = [
        {
            title : 'HTML', 
            desc : 'The Language for building web pages',
            color : 'white',
            background : '#282A35',
            codes : CD.html
        },
        {
            title : 'CSS', 
            desc : 'The Language for styling web pages',
            background : '#D9EEE1', 
            codes : CD.css
        },
        {
            title : 'Javascript', 
            desc : 'The Language for programming web pages',
            background : '#FFF4A3', 
            codes : CD.javascript
        },
        {
            title : 'Python', 
            desc : 'A popular programming language',
            color : 'white', 
            background : '#282A35', 
            codes : CD.python
        },
        {
            title : 'SQL', 
            desc : 'A language for accessing databases',
            background : 'white', 
            codes : CD.sql
        }
    ]; 

    return (
        <div className='main-page'>
            <Header></Header>
            {panelList.map(o => <IntroPanel key={o.title} title={o.title} desc={o.desc} codes={o.codes} color={o.color} background={o.background}></IntroPanel>)}
        </div>
    );
}

export default Main;