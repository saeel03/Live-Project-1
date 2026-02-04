import { useState } from "react";
import { Button, Form, Select } from "antd";
import "./SelectOrg.css";
import { ManageUsersDrawer } from "./drawer/ManageUsersDrawer";
import { useOrganizations } from "../../hooks/useOrganizations";

export interface InviteFormValues {
  email: string;
  firstname: string;
  lastname: string;
  id: string; 
}

export const InviteForm = () => {
  const [form] = Form.useForm<InviteFormValues>();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");

  const { data, isLoading, isError } = useOrganizations();

  const onFinish = (values: InviteFormValues): void => {
    console.log(values);
  };

  const organizationOptions =
    data?.map((org) => ({
      label: org.name,
      value: org.id,
    })) ?? [];

  if (isError) {
    return <div>Failed to load organizations</div>;
  }

  return (
    <>
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="invite-form-container"
    >
  

      <Form.Item
        label="Organization"
        name="id"
        rules={[{ required: true }]}
      >
        
<Select
  placeholder="Select organization"
  loading={isLoading}
  options={organizationOptions}
  optionRender={(option) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <span>{option.label}</span>
      <Button
        size="small"
        type="primary"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDrawerTitle(option.label as string);
          setDrawerVisible(true);
        }}
      >
        Manage users
      </Button>
    </div>
  )}
/>


       
      </Form.Item>

      </Form>
      <ManageUsersDrawer
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        organizationName={drawerTitle}
      />
    </>
  );
};
