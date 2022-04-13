import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import Year from '../../utils/helpers';
import '../../assets/css/Footer.css';

function Footer() {
    return (
        <section className='flex-row footer'>
            <div className='foot col-3'>
<<<<<<< HEAD
            ©<span><Year /></span> by Team Hawk
=======
            ©<span data-testid='copyright'><Year /> by Team Hawk</span>
>>>>>>> f341716d974e57383179422b6ba055f9a5ab1af6
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