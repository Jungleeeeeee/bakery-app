import { useEffect, useState } from "react"
import  type { PropsLoadingAnimation } from "@/components/loading/LoadingPage.types"




export const useLoading: () => PropsLoadingAnimation = () => {
   const [isLoading, setIsLoading] = useState(false)


   useEffect(()=>{

    setIsLoading(true)

       const timerLoading = setTimeout(()=>{
          
     setIsLoading(false)
      
        clearTimeout(timerLoading)

        }, 3000)
            
        
   }, [])

     
     
      return  { isLoading }
      
 
} 