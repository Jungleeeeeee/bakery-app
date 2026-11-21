import { useContext } from "react"
import {ModalContext} from '@/components/mainHeader/MainHeader.constants'
import { createPortal } from "react-dom"
import  {container} from '@/components/modalSignInHeader/ModalSignIn.constants'
import styles from '@/components/modalSignInHeader/ModalSignIn.module.css'

export default function ModalSignInHeader(){
     const context = useContext(ModalContext)
    
    return(
        <>
            {createPortal(
            <div className={styles.mainParent}>
            <h2 className={styles.parentTitle}>вход</h2>
            <div className={styles.parentCancelIkons} onClick={() =>{
        if(context?.setIsActiveToSignIn && context.isActiveToSignIn ){
        context.setIsActiveToSignIn(false)
        }} }>
                <div className={styles.parentCancelIkon1}></div>
                <div className={styles.parentCancelIkon2}></div>
            </div>
            <form className={styles.parentForm}>
                <label className={styles.formLabelEmail} htmlFor="input_email">ваша почта</label>
                <input className={styles.formInputEmail} id="input_email" type="text" />
                <label className={styles.formLabelPassword} htmlFor="input_password">ваш пароль</label>
                <input className={styles.formInputPassword} id="input_password" type="text" />
                <button className={styles.formButtonSignIn} type="submit">войти</button>
            </form>
            </div>, container)}
        </>
    )
}