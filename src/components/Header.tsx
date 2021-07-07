import React from 'react';
import {RiArrowDownSFill, BsCircleHalf, ImEarth, AiOutlineSearch} from 'react-icons/all';

function header(){
    return (
        <div className='header'>
            <img className='main-logo' width='50' src='https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg'></img>
            <div className='header-menus'>
                <div>Tutorials<RiArrowDownSFill/></div>
                <div>Reference<RiArrowDownSFill/></div>
                <div>Exercises<RiArrowDownSFill/></div>
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
    );
}

export default header;