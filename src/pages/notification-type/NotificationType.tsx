import { Button } from 'antd'
import React, { useState } from 'react'

import AddNotifiactionDrawer from '../../components/notification-type/addnew-notification-drawer/AddNotifiactionDrawer'

//import TypeTable from '../../components/notification-type/notificationtype-table/TypeTable'

const NotificationType = () => {
    const [drawerOpen, setDrawerOpen] = useState <boolean>(false)

    const onDrawerOpen =()=>{
        setDrawerOpen(true);
    }

    
  return (
    <div>
        <div className='Header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h1>Notification type</h1>

            </div>
            
            <div>
                <Button type="link" onClick={onDrawerOpen}>Add new</Button>
            </div>
        </div>

        {/* <TypeTable/> */}

        <AddNotifiactionDrawer open={drawerOpen} onClose={()=>{
            setDrawerOpen(false)
        }}/>
        

      
    </div>
  )
}

export default NotificationType
