import React from 'react';
import { useRef } from 'react';
import {RiArrowDownSFill, RiCloseFill} from 'react-icons/ri';
import {MENUS} from '../utils/datas';
import MenuContent from './MenuContent';

interface verticalMenuProps {
    onCloseVerticalMenu: ()=>void;
}

function VerticalMenu({onCloseVerticalMenu}: verticalMenuProps){
    const menusRef = useRef<HTMLDivElement | null>(null);
    const [m1, m2, m3] = [MENUS[0], MENUS[1], MENUS[2]]; 

    const onCloseSub = ()=>{
        
    }

    const getCategorys = ()=> Array.prototype.slice.call(menusRef.current!.children).filter(el => el.classList.contains('cate'));
    const getMenuPanels = ()=> menusRef.current!.querySelectorAll('div[data-category]') as NodeListOf<HTMLDivElement>;

    return (
        <div id='verticalMenu' className='vertical-menu' style={{display : 'none'}}>
            <section className='vertical-menu-close'>
                <RiCloseFill size='30' onClick={()=> {onCloseVerticalMenu()}}></RiCloseFill>
            </section>
            <div className='wrapper' ref={menusRef}>
                <div className='cate'>Tutorials<RiArrowDownSFill/></div>
                <MenuContent category={m1.category} menuList={m1.menuList} onCloseMenu={onCloseSub}></MenuContent>
                <div className='cate'>References<RiArrowDownSFill/></div>
                <MenuContent category={m2.category} menuList={m1.menuList} onCloseMenu={onCloseSub}></MenuContent>
                <div className='cate'>Exercises<RiArrowDownSFill/></div>
                <MenuContent category={m3.category} menuList={m1.menuList} onCloseMenu={onCloseSub}></MenuContent>
                <div className='cate'>Paid Courses</div>
                <div className='cate'>Shop</div>
            </div>
        </div>
    );
}

export default VerticalMenu;