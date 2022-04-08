import { useEffect, useState } from "react";
import styles from '../../../styles/Home.module.css';

const Navbar = ()=> {
  const [onScroll, setOnScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const windowsTop = window.pageYOffset
    if (windowsTop >= 70){
      setOnScroll(true)
    }else{
      setOnScroll(false)
    }
  }

  const handleNavigate = (e) => {
    e.preventDefault;

    const id = e.target.className
    const position = document.querySelector(id).offsetTop;
    const to = id != 'home' ? position - 69 : position

    scrollTo({ 
      top: to,
      left: 0,
      behavior: "smooth"
    })
  }
    
  return (
    <ul className={onScroll ? styles.headerWhite : ''}>
      <li onClick={(e) => handleNavigate(e)} className="#home">Home</li>
      <li onClick={(e) => handleNavigate(e)} className="#services">Serviços</li>
      <li onClick={(e) => handleNavigate(e)} className="#partnes">Parceiros</li>
    </ul>
  )
}

export default Navbar