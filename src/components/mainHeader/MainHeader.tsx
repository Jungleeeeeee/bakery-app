
import ModalSignInHeader from '@/components/modalSignInHeader/ModalSignInHeader'
import ModalLogInHeader from '@/components/modalLogInHeader/ModalLogInHeader'
import {   useState } from 'react'
import {  ModalContext } from '@/components/mainHeader/MainHeader.constants'








export default function MainHeader(){
const [isActiveToSignIn, setIsActiveToSignIn] = useState(false)
const [isActiveToLogIn, setIsActiveToLogIn] = useState(false)



    return(
         <header>
             <h1>Сайт ЭЛИТНОЙ выпечки</h1>
        {!isActiveToSignIn && isActiveToLogIn &&  (
            <ModalContext value={{isActiveToLogIn, setIsActiveToLogIn}}>
                <ModalLogInHeader/> 
            </ModalContext>
        )}
            
        {isActiveToSignIn && !isActiveToLogIn   && (
            <ModalContext value={{isActiveToSignIn, setIsActiveToSignIn}}>
                <ModalSignInHeader/> 
            </ModalContext>
        )}
            
        {!isActiveToSignIn && !isActiveToLogIn  && (
        <div>
            <button onClick={() => setIsActiveToSignIn(true)}>войти</button>
            <button onClick={() => setIsActiveToLogIn(true)} >регистрация</button>
        </div>  
        )}
            
       
        </header>
    )
}