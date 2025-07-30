import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <div className={style.nav_list}>
      <ul>
        <li>
          <NavLink to='/Dashboard'>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
