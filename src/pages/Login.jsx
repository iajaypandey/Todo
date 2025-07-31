import { IoMdMail } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import style from './Signup.module.css';

function Login() {
  return (
    <div className={`${style.container}`}>

      <div className={style.header}>
        <h1>Login</h1>
        <div className={style.underline}></div>
      </div>

      <div className={style.input_container}>
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
        <div className={style.submit} >Login</div>
        <div className={style.forget_password}>Lost Password ? Click here</div>
      </div>
    </div>
  )
}

export default Login