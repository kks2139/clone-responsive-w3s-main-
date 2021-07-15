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

    const onClickCate = (e: React.MouseEvent<HTMLDivElement>)=>{
        const cate = e.currentTarget.textContent!;
        const arrow = e.currentTarget.querySelector('svg')!;
        const mp: HTMLDivElement = getMenuPanel(cate);
        const show = mp.style.display !== 'none';
        
        mp.style.display = show ? 'none' : 'block';
        arrow.style.transform = show ? 'rotate(0deg)' : 'rotate(180deg)';
    }

    const onCloseSub = ()=>{}
    const getMenuPanel = (cate: string)=> menusRef.current!.querySelector(`div[data-category=${cate}]`) as HTMLDivElement;

    return (
        <div id='verticalMenu' className='vertical-menu' style={{display : 'none'}}>
            <section className='vertical-menu-close'>
                <RiCloseFill size='30' onClick={()=> {onCloseVerticalMenu()}}></RiCloseFill>
            </section>
            <div className='wrapper' ref={menusRef}>
                <div className='cate' onClick={onClickCate}>Tutorials<RiArrowDownSFill/></div>
                <MenuContent category={m1.category} menuList={m1.menuList} onCloseMenu={onCloseSub}></MenuContent>
                <div className='cate' onClick={onClickCate}>References<RiArrowDownSFill/></div>
                <MenuContent category={m2.category} menuList={m1.menuList} onCloseMenu={onCloseSub}></MenuContent>
                <div className='cate' onClick={onClickCate}>Exercises<RiArrowDownSFill/></div>
                <MenuContent category={m3.category} menuList={m1.menuList} onCloseMenu={onCloseSub}></MenuContent>
                <div className='cate'>Paid Courses</div>
                <div className='cate'>Shop</div>
            </div>
        </div>
    );
}

export default VerticalMenu;