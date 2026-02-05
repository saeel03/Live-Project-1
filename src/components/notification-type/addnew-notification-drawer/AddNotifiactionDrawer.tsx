import {  Drawer } from "antd"
import AddNotificationForm from "../add-notification-form/AddNotificationForm";

interface IAddNotifiactionDrawer
{
    open: boolean,
    onClose: () => void;
}
const AddNotifiactionDrawer = (props : IAddNotifiactionDrawer) => {
  return (
    <div>
        <Drawer
        title="New Notification Type"
        closable={{ placement: 'end' }}
        onClose={props.onClose}
        size="600px"
        open={props.open}>

        <AddNotificationForm onClose={props.onClose}/>


        </Drawer>
      
    </div>
  )
}

export default AddNotifiactionDrawer
