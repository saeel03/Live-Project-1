import { Button, Form, Input, Select, Space } from 'antd';
import React from 'react';

export interface AddUserFormValues {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  role: 'admin' | 'user';
}

interface AddUserFormProps {
  organizationName: string;
  onCancel: () => void;
  onFinish: (values: AddUserFormValues) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = (props) => {
  const [form] = Form.useForm();

  return (
    <div>
      <h3>Create users for {props.organizationName}</h3>
      <Form
        form={form}
        layout="vertical"
        onFinish={props.onFinish}
        className="invite-form-container"
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[{ required: true, message: 'Please enter first name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[{ required: true, message: 'Please enter last name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mobile Number"
          name="mobile"
          rules={[{ required: true, message: "Please enter mobile number" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please select a role" }]}
        >
          
            <Select  options={[
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' }
        
      ]}/>
           
        
  
        </Form.Item>

        <Form.Item>
          <Space>
            <Button onClick={props.onCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddUserForm
