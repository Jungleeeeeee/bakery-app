import MainHeader from '@/components/mainHeader/MainHeader'
import { Outlet } from "react-router-dom";
import MainSection from '@/components/mainSection/MainSection'

export function Layout(){
  
    return(
    <div>
        <header>
            <MainHeader/>
        </header>
        <section>
            <MainSection/>
        </section>
          <Outlet />
        <footer>
            лэйаут подвал
        </footer>
    </div>
)
    
}