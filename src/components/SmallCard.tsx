import React from 'react';

interface smallCardProps {
    type: string;
    title: string;
    backgroundColor: string;
}

function SmallCard({type, title, backgroundColor}: smallCardProps){
    const cls = type === 'small' ? 'small-card' : 'middle-card';
    return (
        <div className={cls} style={{backgroundColor : backgroundColor}}>
            <p>{title}</p>
        </div>
    );
}

export default SmallCard;