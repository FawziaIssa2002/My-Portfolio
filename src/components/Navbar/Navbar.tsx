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
// import { useRef, useState } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import logo from "../../assets/logo.png";
// import menu_open from "../../assets/menu_open.svg";
// import menu_close from "../../assets/menu_close.svg";
// import underline from "../../assets/nav_underline.svg";

// const Navbar = () => {
//   const [menue, setMenue] = useState("home");
//   const menuRef = useRef<HTMLUListElement>(null);

//   const openMenu = () => {
//     if (menuRef.current) {
//       menuRef.current.style.right = "0";
//     }
//   };

//   const closeMenu = () => {
//     if (menuRef.current) {
//       menuRef.current.style.right = "-359px";
//     }
//   };

//   return (
//     <div className="flex items-center justify-between px-[50px] py-[22px]">
//       {/* Logo */}
//       <img className="w-[10%] h-auto" src={logo} alt="logo" />

//       {/* زر فتح القائمة (موبايل) */}
//       <img
//         src={menu_open}
//         onClick={openMenu}
//         alt="menu open"
//         className="hidden max-md:block fixed right-[30px] top-[22px] cursor-pointer"
//       />

//       {/* Navbar */}
//       <div className="flex items-center justify-between">
//         <ul
//           ref={menuRef}
//           className="flex items-center list-none gap-[60px] text-[20px] p-0 m-0 max-md:flex-col max-md:items-start max-md:gap-[30px] max-md:bg-[#1f0016] max-md:w-[350px] max-md:h-full max-md:fixed max-md:top-0 max-md:z-20 max-md:transition-all max-md:duration-500 max-md:right-[-350px]"
//         >
//           {/* زر إغلاق القائمة (موبايل) */}
//           <img
//             src={menu_close}
//             onClick={closeMenu}
//             alt="menu close"
//             className="hidden max-md:block relative top-[30px] left-[290px] w-[30px] cursor-pointer"
//           />

//           {/* Links */}
//           <li className="flex flex-col gap-[5px] cursor-pointer max-md:flex-row max-md:gap-[20px] max-md:pl-[100px] max-md:text-[30px]">
//             <AnchorLink
//               className="no-underline text-white"
//               href="#home"
//             >
//               <p onClick={() => setMenue("home")}>Home</p>
//             </AnchorLink>
//             {menue === "home" ? <img src={underline} alt="" /> : <></>}
//           </li>

//           <li className="flex flex-col gap-[5px] cursor-pointer max-md:flex-row max-md:gap-[20px] max-md:pl-[100px] max-md:text-[30px]">
//             <AnchorLink
//               className="no-underline text-white"
//               offset={50}
//               href="#about"
//             >
//               <p onClick={() => setMenue("about")}>About Me</p>
//             </AnchorLink>
//             {menue === "about" ? <img src={underline} alt="" /> : <></>}
//           </li>

//           <li className="flex flex-col gap-[5px] cursor-pointer max-md:flex-row max-md:gap-[20px] max-md:pl-[100px] max-md:text-[30px]">
//             <AnchorLink
//               className="no-underline text-white"
//               offset={50}
//               href="#services"
//             >
//               <p onClick={() => setMenue("services")}>Services</p>
//             </AnchorLink>
//             {menue === "services" ? <img src={underline} alt="" /> : <></>}
//           </li>

//           <li className="flex flex-col gap-[5px] cursor-pointer max-md:flex-row max-md:gap-[20px] max-md:pl-[100px] max-md:text-[30px]">
//             <AnchorLink
//               className="no-underline text-white"
//               offset={50}
//               href="#work"
//             >
//               <p onClick={() => setMenue("work")}>Portfolio</p>
//             </AnchorLink>
//             {menue === "work" ? <img src={underline} alt="" /> : <></>}
//           </li>

//           <li className="flex flex-col gap-[5px] cursor-pointer max-md:flex-row max-md:gap-[20px] max-md:pl-[100px] max-md:text-[30px]">
//             <AnchorLink
//               className="no-underline text-white"
//               offset={50}
//               href="#contact"
//             >
//               <p onClick={() => setMenue("contact")}>Contact</p>
//             </AnchorLink>
//             {menue === "contact" ? <img src={underline} alt="" /> : <></>}
//           </li>
//         </ul>

//         {/* زر Connect */}
//         <div className="ml-[20px] px-[10px] py-[20px] rounded-[50px] bg-gradient-to-r from-[#DA7C25] to-[#B923E1] text-[22px] cursor-pointer transition-transform duration-500 hover:scale-105 hidden md:block">
//           <AnchorLink
//             className="no-underline text-white"
//             offset={50}
//             href="#contact"
//           >
//             Connect with Me
//           </AnchorLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
