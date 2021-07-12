import React from 'react';
import { useRef } from 'react';
import {RiArrowDownSFill, BsCircleHalf, ImEarth, AiOutlineSearch} from 'react-icons/all';
import {MENUS} from '../utils/datas';
import MenuContent from './MenuContent';

function Header(){
    const menusRef = useRef<HTMLDivElement | null>(null);

    const onClickCategory = (e: React.MouseEvent<HTMLDivElement>)=>{
        getCategorys().forEach(el => el.classList.remove('clicked'));
        e.currentTarget.classList.add('clicked');
        showMenuPanel(e.currentTarget.textContent!);
    }

    const showMenuPanel = (cate: string)=>{
        const els: NodeListOf<HTMLDivElement> = getMenuPanels();
        els.forEach(el => {
            el.style.display = el.dataset.category === cate ? '' : 'none';
        });
    }

    const onCloseMenu = ()=>{
        const els: NodeListOf<HTMLDivElement> = getMenuPanels();
        els.forEach(el => el.style.display = 'none');
        getCategorys().forEach(el => el.classList.remove('clicked'));
    }

    const getCategorys = ()=> Array.prototype.slice.call(menusRef.current!.children);
    const getMenuPanels = ()=> document.querySelectorAll('div[data-category]') as NodeListOf<HTMLDivElement>;

    return (
        <>
            <div className='header'>
                <img className='main-logo' width='50' src='https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg'></img>
                <div className='header-menus' ref={menusRef}>
                    <div onClick={onClickCategory}>Tutorials<RiArrowDownSFill/></div>
                    <div onClick={onClickCategory}>References<RiArrowDownSFill/></div>
                    <div onClick={onClickCategory}>Exercises<RiArrowDownSFill/></div>
                </div>
                <div style={{margin : '0 auto'}}></div>
                <div className='icon-list'>
                    <BsCircleHalf size='22'/>
                    <ImEarth size='22'/>
                    <AiOutlineSearch size='28'/>
                </div>
                <div className='button-list'>
                    <div className='btn-1'>Paid Courses</div>
                    <div className='btn-1'>Log in</div>
                </div>
            </div>
            {MENUS.map(c => <MenuContent key={c.category} category={c.category} menuList={c.menuList} onCloseMenu={onCloseMenu}></MenuContent>)}
        </>
    );
}

export default Header;