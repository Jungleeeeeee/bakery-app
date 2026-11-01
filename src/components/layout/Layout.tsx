
import { Outlet } from "react-router-dom";


export function Layout(){
  
    return(
    <div>
        <header>
            лэйаут шапка
        </header>
          <Outlet />
        <footer>
            лэйаут подвал
        </footer>
    </div>
)
    
}