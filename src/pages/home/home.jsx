import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import OurValues from '../../components/ourValues/OurValues';
import PrimaryButton from '../../components/UI/button/primaryButton';
import SecondaryButton from '../../components/UI/SecondaryButton/SecondaryButton';

import Product from '../../components/product/product';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "./home.scss"

const Home = () => {
  const items = [{
    id:1,
    title: "Футболка USA",
    price: 129,
    image: "images/product-images/1.png"
  },{
    id:2,
    title: "Купальник Glow",
    price: 99,
    image: "images/product-images/2.png"
  },{
    id:3,
    title: "Свитшот Sweet Shot",
    price: 180,
    image: "images/product-images/3.png"
  }
  ]
  return (
    <div>
      <header>
        <Navbar/>
        <div className="container">
          <div className="header__left">
            <h2>
              Новые поступления в этом сезоне
            </h2>
            <p>
              Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне.
              Время исследовать.
              <PrimaryButton onClick={()=>{window.location.href = "/shop"}}>Открыть магазин</PrimaryButton>
            </p>

          </div>
          <div className="header__right">
            <img src='/images/header-images/1.png' id="img1" alt="Portrait"/>
            <img src='/images/header-images/2.png' id="img2" alt="Portrait 2"/>
            <img src='/images/header-images/3.png' id="img3" alt="Portrait 3"/>
          </div>
        </div>
      </header>
      <section className="new__colection">
        <div className="container">
          <h2>Новая коллекция</h2>

          <div className="new__colection__inner">
            <Splide
              options={{
              type: "loop",
              perMove: 1,
              perPage: 3,
              pagination: false,
              breakpoints: {
                900: {
                  perPage: 2
                },
                500: {
                  perPage: 1
                }
              }
            }}>
              {items.map((item)=>{
                return(
                 <SplideSlide key={item.id}>
                 <Product item={item} />
               </SplideSlide>
                );
              })}
            </Splide>
            <div className="new__colection__inner-button">
              <SecondaryButton  onClick={()=>{window.location.href = "/shop"}}>Открыть магазин</SecondaryButton>
            </div>
          </div>
        </div>
      </section>
      <section className='our__values'>
        <div className="container">
          <h2>Что для нас важно</h2>
          <div className="our__values__inner">
            <OurValues
              item={{
              src: "/icons/quality.svg",
              header: "Качество",
              paragraph: "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества"
            }}/>
            <OurValues
              item={{
              src: "/icons/settings.svg",
              header: "Скорость",
              paragraph: "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах"
            }}/>
            <OurValues
              item={{
              src: "/icons/hand.svg",
              header: "Ответственность",
              paragraph: "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing"
            }}/>
          </div>
        </div>
      </section>
      <section className='our__team'>
        <div className="container">
          <h2>Команда мечты Womazing</h2>
          <div className="our__team__inner">
            <div className="our__team__inner__left">
              <Splide
                options={{
                type: "loop",
                perMove: 1,
                perPage: 1,
                autoplay:true
              }}>
                <SplideSlide>
                  <img src="/images/our-team-images/1.jpg" alt=""/>
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/our-team-images/2.jpg" alt=""/>
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/our-team-images/3.jpg" alt=""/>
                </SplideSlide>
              </Splide>
            </div>
            <div className="our__team__inner__right">
              <h3>Для каждой</h3>
              <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
              <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
                подчеркивают достоинства каждой девушки.</p>
              <a href="/about">Подробнее о бренде</a>
            </div>
          </div>

        </div>

      </section>
      <Footer/>
    </div>
  );
}

export default Home;
