import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import Year from '../../utils/helpers';
import '../../assets/css/index.css';

function Footer() {
    return (
        <section className='flex-row footer'>
            <div className='foot col-3'>
            ©<span data-testid='copyright'><Year /> by Team Hawk</span>
            </div>
            <div className='foot col-3'>
                <a href="https://www.instagram.com/moolovesdonuts/"
                    alt="instagram"
                    target="_blank"
                    rel="noreferrer"><BsInstagram /></a></div>
            <div className='legalese'>
            Team Hawk assumes no responsibilities whatever for any damages caused to Licensee, any Affiliate, any vendees, other transferees, or sublicensees of or by any product or process incorporating or made by the use of inventions licensed under this Agreement, or incorporating or made by the use of any information furnished under this Agreement.
            </div>
        </section>
    )
}

export default Footer;