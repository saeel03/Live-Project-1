
import './App.css'
import { InviteForm } from './pages/form/SelectOrg'
import { Routes , Route } from 'react-router-dom'
import NotificationType from './pages/notification-type/NotificationType'
function App() {


  return (
    <>
        <div>
          <Routes>

            <Route path="/" element={<NotificationType/>}/>
            <Route path="/InviteForm" element={<InviteForm/>}/>


            
          </Routes>
          
                
        </div>
    </>
  )
}

export default App
