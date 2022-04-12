import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import Year from '../utils/helpers';

function Footer() {
    return (
        <section className='flex-row footer'>
            <div className='foot col-3'>
            ©<span><Year /></span>by Team Hawk
            </div>
            <div className='foot col-3'>
                <a href="https://www.instagram.com/moolovesdonuts/"
                    alt="instagram"
                    target="_blank"
                    rel="noreferrer"><BsInstagram /></a></div>
        </section>
    )
}

export default Footer;