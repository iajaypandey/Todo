import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { MdLogin } from "react-icons/md";

function Navbar() {
  return (
    <div className={`${style.navbar} `}>
        <ul className={style.navlist}>
                <NavLink to='/' className={({isActive})=> isActive ? style.activeLink : style.navBtn}>
                    <IoMdHome />
                    <p>Home</p>
                </NavLink>

                <NavLink to='/Signup' className={({isActive})=> isActive ? style.activeLink : style.navBtn}>
                    <MdLogin/> 
                    <p>Sign up</p>
                </NavLink>
        </ul>
    </div>
  )
}

export default Navbar