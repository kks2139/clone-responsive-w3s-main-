import React, {useState} from 'react';
import BigCard from '../components/BigCard';
import Header from '../components/Header';
import IntroPanel from '../components/IntroPanel';
import SmallCard from '../components/SmallCard';
import {PANELS, BIGCARDS, SMALLCARDS, MIDCARDS, COLORS} from '../utils/datas';

function Main(){
    return (
        <div className='main-page'>
            <Header></Header>
            {PANELS.map(o => <IntroPanel key={o.title} title={o.title} desc={o.desc} codes={o.codes} color={o.color} background={o.background}></IntroPanel>)}
            <div className='card-box'>
                <div className='card-wrapper'>
                    {BIGCARDS.map(o => <BigCard key={o.title} title={o.title} desc={o.desc} buttons={o.buttons} backgroundColor={o.backgroundColor}></BigCard>)}
                    {SMALLCARDS.map((t,i) => <SmallCard key={t} type='small' title={t} backgroundColor={COLORS[i % 5]}></SmallCard>)}
                    {MIDCARDS.map((t,i) => <SmallCard key={t} type='middle' title={t} backgroundColor={COLORS[i % 5]}></SmallCard>)}
                </div>
            </div>
        </div>
    );
}

export default Main;