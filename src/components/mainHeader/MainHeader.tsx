
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