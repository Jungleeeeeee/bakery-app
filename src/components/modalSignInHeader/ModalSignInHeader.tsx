import { useContext } from "react"
import {ModalContext} from '@/components/mainHeader/MainHeader.constants'
import { createPortal } from "react-dom"
import  {container} from '@/components/modalSignInHeader/ModalSignInHeader.constants'
import styles from '@/components/modalSignInHeader/ModalSignInHeader.module.css'

export default function ModalSignInHeader(){
     const context = useContext(ModalContext)
    
    return(
        <div>
            {createPortal(
            <div className={styles.container} onClick={() => {
            if(context?.setIsActiveToSignIn && context.isActiveToSignIn  ){
                context?.setIsActiveToSignIn(false)
                
            }

        }}>
            <h2>вход</h2>
            <form>
                <label htmlFor="input_email">ваша почта</label>
                <input id="input_email" type="text" />
                <label htmlFor="input_password">ваш пароль</label>
                <input id="input_password" type="text" />
                <button type="submit">войти</button>
            </form>
            </div>, container)}
        </div>
    )
}