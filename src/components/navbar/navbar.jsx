import React,{useState,useEffect} from 'react';
import DressIcon from '../../icons/dress.svg';
import ShopIcon from '../../icons/shop-cart.svg';
import TelephoneIcon from '../../icons/telephone.svg';
import MenuIcon from '@mui/icons-material/Menu';
import "./navbar.scss"
const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  const [screenWidth,setScreenWidth]=useState(window.innerWidth);
  const [navFixed,setNavFixed]=useState("")
  // const [scrollHeight,setScrollHeigh]=useState(window.pageYOffset)
  window.addEventListener("scroll",()=>{
    if(window.pageYOffset>50){
      setNavFixed("active")
    }
    else{setNavFixed("")}
  })
  useEffect(()=>{
    const  changeWidth  =()=>{
      setScreenWidth(window.innerWidth)
    }
    
    window.addEventListener('resize',changeWidth);
    return ()=>{
      window.removeEventListener('resize',changeWidth);
    }
  },[])

  const toggleNav=()=>{
    setToggle(!toggle);
  }
;
  const mediaBreak=915;
  return (
    <nav className={navFixed}>
      <div className="container">
        <div className="nav__inner">
        <MenuIcon className='toggleButton' onClick={toggleNav}>fdsfds</MenuIcon>
        
          <ul className='left'>
            <li style={{display:"flex",alignItems:"center"}}> <img className='small-icon' src={DressIcon} alt="" / > Womazing</li>
          </ul>
          
          {(toggle || screenWidth>mediaBreak) && (
          <ul className='middle'>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/shop">Магазин</a>
            </li>
            <li>
              <a href="/about">О бренде</a>
            </li>
            <li>
              <a href="/contact">Контакты</a>
            </li>
          </ul>
           )}
           {(toggle || screenWidth>mediaBreak) && (
          <ul className='right'>
            <li><a href="tel:+7 (495) 823-54-12" style={{display:"flex"}} > <img className='small-icon' src={TelephoneIcon} alt="" / > +7 (495) 823-54-12</a></li>
            <li style={{cursor:"pointer"}}><img className='small-icon' src={ShopIcon} alt="" / ></li>
          </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
