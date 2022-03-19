import React from 'react';
import DressIcon from '../../icons/dress.svg';
import "./Footer.scss"
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__inner-left">
                        <div className="footer__inner-left-top">
                            <img className='small-icon' src={DressIcon} alt="" / >
                            <span>Womazing</span>
                         </div>
                        <div className="footer__inner-left-bottom">
                            <p>© Все права защищены</p>
                            <a href="#">Политика конфиденциальности</a>
                            <a href="#">Публичная оферта</a>
                        </div>
                    </div>
                    <div className="footer__inner-middle">
                        <div className="footer__inner-middle-top">
                            <a href="/">Главная</a>
                            <a href="/shop">Магазин</a>
                            <a href="/about">О бренде</a>
                            <a href="/contact">Контакты</a>
                        </div>
                        <div className="footer__inner-middle-bottom">
                        </div>
                    </div>
                    <div className="footer__inner-right">
                        <a href="tel:+7 (495) 823-54-12" id='footer-phone' >+7 (495) 823-54-12</a>
                        <a href="mailto:hello@womazing.com" id='footer-mail'>hello@womazing.com</a>
                        <div className="footer-icons">
                           <a href="https://www.instagram.com"> <img src="/icons/insta.svg" alt=""/></a>
                           <a href="https://www.facebook.com"> <img src="/icons/fb.svg" alt=""/> </a>
                             <a href="https://www.twitter.com"><img src="/icons/twiter.svg" alt=""/></a>
                        </div>
                        <div className="footer-icons">
                            <img src="/icons/visa.png" alt="" />
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
