import React from 'react';
import {RiCloseFill} from 'react-icons/ri';


interface menuListAttr {
    subTitle: string;
    menuName: string[];
}

interface MenuContentProps {
    category: string;
    menuList: menuListAttr[];
    onCloseMenu: ()=>void;
}

function MenuContent({category, menuList, onCloseMenu}: MenuContentProps){

    return (
        <div className='menu-content' data-category={category} style={{display : 'none'}}>
            <div className='menu-category'>
                <div>{category}</div>
                <RiCloseFill size='80' color='white' onClick={()=> {onCloseMenu()}}></RiCloseFill>
            </div>

            <div className='menu-wrapper'>
                {menuList.map(group =>{
                    return (
                        <div key={group.subTitle} className='menu-group'>
                            <div className='sub-title'>{group.subTitle}</div>
                            {group.menuName.map(name => <div key={name} className='menu-names'>{name}</div>)}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MenuContent;