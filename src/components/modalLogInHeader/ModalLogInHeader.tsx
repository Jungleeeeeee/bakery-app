import { createPortal } from "react-dom"
import  {container} from '@/components/modalLogInHeader/ModalLogIn.constants'
import { useContext } from "react"
import {ModalContext} from '@/components/mainHeader/MainHeader.constants'
import styles from '@/components/modalLogInHeader/ModalLogIn.module.css'

export default function ModalLogInHeader(){
     
     const context = useContext(ModalContext)
    

    
    return(
        <>
            {createPortal(
            <div className={styles.container} >
            <h2 className={styles.parentTitle}>регистрация</h2>
            <div className={styles.parentCancelIkons} onClick={() =>{
        if(context?.setIsActiveToLogIn && context.isActiveToLogIn ){
        context.setIsActiveToLogIn(false)
        }} }>
                <div className={styles.parentCancelIkon1}></div>
                <div className={styles.parentCancelIkon2}></div>
            </div>
            <form className={styles.parentForm}>
                <label className={styles.formLabelEmail} htmlFor="input_email">ваша почта</label>
                <input className={styles.formInputEmail} id="input_email" type="text" />
                <label className={styles.formLabelPassword} htmlFor="input_password">ваш пароль</label>
                <input className={styles.formInputPassword} id="input_password" type="password" />
                <label className={styles.formLabelRepeatPass} htmlFor="input_password_repeat">повторить пароль</label>
                <input className={styles.formInputRepeatPass} id="input_password_repeat" type="password" />
                <button className={styles.formButtonLogIn} type="submit">зарегистрироваться</button>
            </form>
            </div>, container)}
        </>
    )
}