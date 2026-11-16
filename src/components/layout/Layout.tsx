import MainHeader from '@/components/mainHeader/MainHeader'
import { Outlet } from "react-router-dom";
import MainSection from '@/components/mainSection/MainSection'
import MainArticle from '@/components/mainArticle/MainArticle'

export function Layout(){
  
    return(
    <div>
        <header>
            <MainHeader/>
        </header>
        <section>
            <MainSection/>
        </section>
        <article>
            <MainArticle/>
        </article>
          <Outlet />
        <footer>
            лэйаут подвал
        </footer>
    </div>
)
    
}