import { useState } from "react";
import { Button, Table } from "antd";
import "./SelectOrg.css";
import { ManageUsersDrawer } from "./drawer/ManageUsersDrawer";
import { useOrganizations } from "../../hooks/useOrganizations";
import type { Organization } from "../../api/organizationService";

export interface InviteFormValues {
  email: string;
  firstname: string;
  lastname: string;
  id: string; 
}

export const InviteForm = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");

  const { data, isLoading, isError } = useOrganizations();

  if (isError) {
    return <div>Failed to load organizations</div>;
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: Organization) => (
        <Button
          size="small"
          type="primary"
          onClick={() => {
            setDrawerTitle(record.name);
            setDrawerVisible(true);
          }}
        >
          Manage users
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={data }
        columns={columns}
        loading={isLoading}
        className="invite-form-container"
        pagination={false}
      />
      <ManageUsersDrawer
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        organizationName={drawerTitle}
      />
    </>
  );
};
