import { Button, Drawer } from "antd";
import UserTable from "./user-table/UserTable";
import { useState } from "react";
import AddUserForm from "./add-user-form/AddUserForm";

interface ManageUsersDrawerProps {
  open: boolean;
  onClose: () => void;
  organizationName: string;
}

export const ManageUsersDrawer = (props: ManageUsersDrawerProps) => {
  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <Drawer
      title={null}
      closable={false}
      placement="right"
      size="large"
      onClose={() => {
        props.onClose(); 
        setShowAddUser(false);
      }}
      open={props.open} 
    >
    {showAddUser ? 
        (<AddUserForm
          organizationName={props.organizationName} 
          onCancel={() => setShowAddUser(false)}
          onFinish={(values) => {
             console.log("Add User Values:", values);
             setShowAddUser(false);
          }}
        />
      ) :(
        <>
          <h3>Manage users for {props.organizationName}</h3> 
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" onClick={() => setShowAddUser(true)}> Add User</Button>
          </div>
          <div>
              <UserTable/>
          </div>
          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end', paddingTop:"300px" }}>
            <Button type="primary" onClick={props.onClose}>Cancel</Button>
          </div>
        </>
      )}
    </Drawer>
  );
};