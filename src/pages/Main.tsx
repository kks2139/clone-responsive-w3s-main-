import React from 'react';
import Header from '../components/Header';
import IntroPanel from '../components/IntroPanel';

interface panelListAttr {

}

function Main(){
    const panelList = [
        {title: 'HTML', desc: 'The L', codes : ''}
    ]; 

    return (
        <div className='main-page'>
            <Header></Header>
            <IntroPanel title='HTML' desc='building web pages' codes='<span>HTML TEST<span>'></IntroPanel>
        </div>
    );
}

export default Main;