import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import style from './Signup.module.css';
import { useNavigate } from "react-router-dom";

function Signup() {
const navigate = useNavigate();

const movetoLogin = () => {
  navigate('/Login')
}
  
  return (
    <div className={`${style.container}`}>

      <div className={style.header}>
        <h1>Sign Up</h1>
        <div className={style.underline}></div>
      </div>

      <div className={style.input_container}>
        <div className={style.Input}>
          <FaUser color="8ABB6C"/>
          <input type="text" placeholder='name..'/>
        </div>
        <div className={style.Input}>
          <IoMdMail color="77BEF0"/>
          <input type="email" placeholder='email..'/>
        </div>
        <div className={style.Input}>
          <MdOutlinePassword color="E14434"/>
          <input type="password" placeholder='password..'/>
        </div>
      </div>

      <div className={style.submit_container}>
        <div className={style.submit}>Sign Up</div>
      </div>

      <div className={style.loginSection}>
        <p>Already have account? Click</p>
        <div onClick={movetoLogin} className={style.login_span}>Login</div>
      </div>
    </div>
  )
}

export default Signup
