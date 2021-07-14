import React from 'react';
import { useRef } from 'react';
import {RiArrowDownSFill, BsCircleHalf, ImEarth, AiOutlineSearch} from 'react-icons/all';
import {MENUS} from '../utils/datas';
import MenuContent from './MenuContent';
import VerticalMenu from './VerticalMenu';

function Header(){
    const menusRef = useRef<HTMLDivElement | null>(null);
    const secRef = useRef<HTMLDivElement | null>(null);

    const onClickCategory = (e: React.MouseEvent<HTMLDivElement>)=>{
        const category = e.currentTarget.textContent!;
        getCategorys().forEach(el => el.classList.remove('clicked'));
        
        if(category === 'Menu'){
            showVerticalMenu();  
        }else{
            e.currentTarget.classList.add('clicked');
            showMenuPanel(category);
        }
    }

    const showVerticalMenu = ()=>{
        const vm = getVerticalMenu();
        vm!.style.display = '';
    }

    const showMenuPanel = (cate: string)=>{
        const els: NodeListOf<HTMLDivElement> = getMenuPanels();
        els.forEach(el => {
            el.style.display = el.dataset.category === cate ? '' : 'none';
        });
    }

    const onCloseVerticalMenu = ()=>{
        const vm = getVerticalMenu();
        vm!.style.display = 'none';
    }

    const onCloseMenu = ()=>{
        const els: NodeListOf<HTMLDivElement> = getMenuPanels();
        els.forEach(el => el.style.display = 'none');
        getCategorys().forEach(el => el.classList.remove('clicked'));
    }

    const getCategorys = ()=> Array.prototype.slice.call(menusRef.current!.children);
    const getMenuPanels = ()=> secRef.current!.querySelectorAll('div[data-category]') as NodeListOf<HTMLDivElement>;
    const getVerticalMenu = ()=> document.querySelector('#verticalMenu') as HTMLDivElement;

    return (
        <>
            <div className='header'>
                <img className='main-logo' width='50' src='https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg'></img>
                <div className='header-menus' ref={menusRef}>
                    <div onClick={onClickCategory}>Menu<RiArrowDownSFill/></div>
                    <div onClick={onClickCategory}>Tutorials<RiArrowDownSFill/></div>
                    <div onClick={onClickCategory}>References<RiArrowDownSFill/></div>
                    <div onClick={onClickCategory}>Exercises<RiArrowDownSFill/></div>
                </div>
                <div style={{margin : '0 auto'}}></div>
                <div className='icon-list'>
                    <BsCircleHalf size='46'/>
                    <ImEarth size='46'/>
                    <AiOutlineSearch size='51'/>
                </div>
                <div className='button-list'>
                    <div className='btn-1'>Paid Courses</div>
                    <div className='btn-1'>Log in</div>
                </div>
            </div>
            <section ref={secRef}>
                {MENUS.map(c => <MenuContent key={c.category} category={c.category} menuList={c.menuList} onCloseMenu={onCloseMenu}></MenuContent>)}
            </section>
            <VerticalMenu onCloseVerticalMenu={onCloseVerticalMenu}></VerticalMenu>
        </>
    );
}

export default Header;