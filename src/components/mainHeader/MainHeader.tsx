
import ModalSignInHeader from '@/components/modalSignInHeader/ModalSignInHeader'
import ModalLogInHeader from '@/components/modalLogInHeader/ModalLogInHeader'
import {   useState } from 'react'
import {  ModalContext } from '@/components/mainHeader/MainHeader.constants'








export default function MainHeader(){
const [isActiveToSignIn, setIsActiveToSignIn] = useState(false)
const [isActiveToLogIn, setIsActiveToLogIn] = useState(false)


    return(
         <>
             <h1>Сайт ЭЛИТНОЙ выпечки</h1>
             <section>
                <h2>Последние лучшие отызвы наших клиентов</h2>
                <div>
                    <div></div>
                    <h3>Алина</h3>
                    <p>Уже не первый раз заказываю с этого сайта, проверенный продавец</p>
                </div>
                <div>
                    <div></div>
                    <h3>Егор</h3>
                    <p>Выбераю эту пекарню потому что меня насильно заставляют</p>
                </div>
                <div>
                    <div></div>
                    <h3>Султан</h3>
                    <p>Только элиты и блотные ребята могут заказывать у вас</p>
                </div>
                <button>Посмтореть все отызывы</button>
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
        
       <div>
            <button  onClick={() => setIsActiveToSignIn(true)}>войти</button>
            <button  onClick={() => setIsActiveToLogIn(true)} >регистрация</button>
        </div>  
        </>
    )
}