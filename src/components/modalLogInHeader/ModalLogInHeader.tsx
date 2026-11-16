import { createPortal } from "react-dom"
import  {container} from '@/components/modalLogInHeader/Modal.constants'
import { useContext } from "react"
import {ModalContext} from '@/components/mainHeader/MainHeader.constants'
import styles from '@/components/modalLogInHeader/Modal.module.css'
export default function ModalLogInHeader(){
     
     const context = useContext(ModalContext)
    

    
    return(
        <div >
            {createPortal(
            <div className={styles.container} onClick={() =>{
     if(context?.setIsActiveToLogIn && context.isActiveToLogIn ){
        context.setIsActiveToLogIn(false)
        
     }         
    
        } }>
            <h2>регистрация</h2>
            <form>
                <label htmlFor="input_email">ваша почта</label>
                <input id="input_email" type="text" />
                <label htmlFor="input_password">ваш пароль</label>
                <input id="input_password" type="password" />
                <label htmlFor="input_password_repeat">повторить пароль</label>
                <input id="input_password_repeat" type="password" />
                <button type="submit">зарегистрироваться</button>
            </form>
            </div>, container)}
        </div>
    )
}