import { Button, Drawer } from "antd";
import UserTable from "./user-table/UserTable";
import { useState } from "react";
import AddUserForm from "./add-user-form/AddUserForm";

interface ManageUsersDrawerProps {
  open: boolean;
  onClose: () => void;
  organizationName: string;
}

export const ManageUsersDrawer = ({ open, onClose, organizationName }: ManageUsersDrawerProps) => {
  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <Drawer
      title={null}
      closable={false}
      placement="right"
      size="large"
     
      onClose={() => {
        onClose();
        setShowAddUser(false);
      }}
      open={open}
    >
      {showAddUser ? (
        <AddUserForm
          organizationName={organizationName}
          onCancel={() => setShowAddUser(false)}
          onFinish={(values) => {
             console.log("Add User Values:", values);
             setShowAddUser(false);
          }}
        />
      ) : (
        <>
          <h3>Manage users for {organizationName}</h3>
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" onClick={() => setShowAddUser(true)}> Add User</Button>
          </div>
          <div>
              <UserTable/>
          </div>
          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end', paddingTop:"330px" }}>
            <Button type="primary" onClick={onClose}>Close</Button>
          </div>
        </>
      )}
    </Drawer>
  );
};
