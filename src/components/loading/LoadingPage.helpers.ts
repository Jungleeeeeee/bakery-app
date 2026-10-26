import { useEffect, useRef, useState } from "react"
import  type { PropsLoadingAnimation } from "@/components/loading/LoadingPage.types"




export const useLoading: () => PropsLoadingAnimation = () => {
   const [isLoading, setIsLoading] = useState(false)
   const containerLoading = useRef< HTMLDivElement | null>(null)

   useEffect(()=>{

    setIsLoading(true)
    containerLoading.current?.classList.add('.active_loading')

       const timerLoading = setTimeout(()=>{
            setIsLoading(false)

        containerLoading.current?.classList.add('.not_active_loading')

        clearTimeout(timerLoading)
        }, 3000)
            
        
   }, [])

     console.log(isLoading)
     
      return  { isLoading, containerLoading: containerLoading }
      
 
} 