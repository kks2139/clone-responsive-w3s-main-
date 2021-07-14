import React from 'react';

interface bigCardProps {
    title: string;
    desc: string;
    buttons: string;
    backgroundColor?: string;
}

function BigCard({title, desc, buttons, backgroundColor='white'}: bigCardProps){
    const btns = buttons.split('/');
    return (
        <div className='big-card' style={{backgroundColor : backgroundColor}}>
            <div className='big-card-tit'>{title}</div>
            <p>{desc}</p>
            {btns.map(b => <div key={b} className='btn-2'>{b}</div>)}
        </div>
    );
}

export default BigCard;