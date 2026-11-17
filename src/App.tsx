import {Loading} from '@/components/loading/LoadingPage'
import {Layout} from '@/components/layout/Layout'
import { Routes, Route } from 'react-router-dom'
import {useLoading} from '@/components/loading/LoadingPage.helpers'

function App() {
const {isLoading} = useLoading()

 return (
  isLoading ? (
    <Loading/>
  ) : (
  <div>
    <Routes>
      <Route path='/' element={<Layout />} >
        
      </Route>
    </Routes>
 </div>
 
  )

)}

export default App
