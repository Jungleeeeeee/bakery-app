
import ModalSignInHeader from '@/components/modalSignInHeader/ModalSignIn'
import ModalLogInHeader from '@/components/modalLogInHeader/ModalLogIn'
import {   useState } from 'react'
import {  ModalContext } from '@/components/mainHeader/MainHeader.constants'
import styles from './MainHeader.module.css'







export default function MainHeader(){
const [isActiveToSignIn, setIsActiveToSignIn] = useState(false)
const [isActiveToLogIn, setIsActiveToLogIn] = useState(false)


    return(
         <div className={styles.parentHeader}>
             <h1 className={styles.mainTitle}>Сайт ЭЛИТНОЙ выпечки</h1>
             <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Последние лучшие отызвы наших клиентов</h2>
                <div className={styles.parentReview}>
                    <h3 className={styles.divTitle}>Алина</h3>
                    <p className={styles.divText}>Уже не первый раз заказываю с этого сайта, проверенный продавец</p>
                  <div className={styles.parentPictureUser}>
                        <div className={styles.pictureUserHead}></div>
                        <div className={styles.pictureUserBody}></div>
                    </div>
                </div>
                
                <div className={styles.parentReview}>
                    <h3 className={styles.divTitle}>Егор</h3>
                    <p className={styles.divText}>Выбераю эту пекарню потому что меня насильно заставляют</p>
                     <div className={styles.parentPictureUser}>
                        <div className={styles.pictureUserHead}></div>
                        <div className={styles.pictureUserBody}></div>
                    </div>
                </div>
                <div className={styles.parentReview}>
                    <h3 className={styles.divTitle}>Султан</h3>
                    <p className={styles.divText}>Только элиты и блотные ребята могут заказывать у вас</p>
                     <div className={styles.parentPictureUser}>
                        <div className={styles.pictureUserHead}></div>
                        <div className={styles.pictureUserBody}></div>
                    </div>
                </div>
                <button className={styles.sectionButton}>Посмтореть все отызывы</button>
             </section>
        {!isActiveToSignIn && isActiveToLogIn &&  (
            <ModalContext value={{isActiveToLogIn, setIsActiveToLogIn}}>
                <ModalLogInHeader/> 
            </ModalContext>
            
        )}
            
        {isActiveToSignIn && !isActiveToLogIn && (
        <div>
            <ModalContext value={{isActiveToSignIn, setIsActiveToSignIn}}>
                <ModalSignInHeader/> 
            </ModalContext>
            
            </div>
        )}
        
       <div className={styles.parentButtonsToModals}>
            <button className={styles.buttonToEntry}  onClick={() => setIsActiveToSignIn(true)}>войти</button>
            <button className={styles.buttonToLogIn} onClick={() => setIsActiveToLogIn(true)} >регистрация</button>
        </div>  
        </div>
    )
}