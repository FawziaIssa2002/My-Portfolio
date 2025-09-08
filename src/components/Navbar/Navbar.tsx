import  { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import underline from '../../assets/nav_underline.svg'

 const Navbar = () => {
    const [menue, setmenue] = useState("home");
    const menuRef = useRef<HTMLUListElement>(null);

      const openMenu = () => {
        if (menuRef.current) {
        menuRef.current.style.right = "0";
        }
    };

    const closeMenu = () => {
        if (menuRef.current) {
        menuRef.current.style.right = "-359px";
        }
    };
    return(
        <div className='nav-container' >
            <img className='logo' src={logo} alt="logo" />
            <img src={menu_open} onClick={openMenu} alt=""  className='nav-mob-open' />
            <div className="navbar">
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=> setmenue("home")}>Home</p></AnchorLink>{menue==='home'?<img src={underline} alt=''/>: <></> }</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> setmenue("about")}>About Me</p></AnchorLink>{menue==='about'?<img src={underline} alt=''/>: <></> }</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=> setmenue("services")}>Services</p></AnchorLink>{menue==='services'?<img src={underline} alt=''/>: <></> }</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=> setmenue("work")}>Portfolio</p></AnchorLink>{menue==='work'?<img src={underline} alt=''/>: <></> }</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setmenue("contact")}>Contact</p></AnchorLink>{menue==='contact'?<img src={underline} alt=''/>: <></> }</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            </div>
        </div>
    )
}

export default  Navbar 
