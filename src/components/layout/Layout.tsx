import MainHeader from '@/components/mainHeader/MainHeader'
import { Outlet } from "react-router-dom";


export function Layout(){
  
    return(
    <div>
        <header>
            <MainHeader/>
        </header>
          <Outlet />
        <footer>
            лэйаут подвал
        </footer>
    </div>
)
    
}