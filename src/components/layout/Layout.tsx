import MainHeader from '@/components/mainHeader/MainHeader'
import { Outlet } from "react-router-dom"
import MainSection from '@/components/mainSection/MainSection'
import MainArticle from '@/components/mainArticle/MainArticle'
import MainContent from '@/components/mainContent/MainContent'
import MainFooter from '@/components/mainFooter/MainFooter'

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
        <main>
            <MainContent/>
        </main>
          <Outlet />
        <footer>
            <MainFooter/>
        </footer>
    </div>
)
    
}