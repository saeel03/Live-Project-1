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
      <h3>Add User</h3>
      <Form
        form={form}
        layout="vertical"
        onFinish={props.onFinish}
        //className="invite-form-container"
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[{ required: true, message: 'First Name required' }]}
        >
          <Input placeholder="Enter first name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[{ required: true, message: 'Last Name required' }]}
        >
          <Input placeholder="Enter last name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Email required" },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          label="Mobile Number"
          name="mobile"
          rules={[{ required: true, message: "Mobile Number required" }]}
        >
          <Input placeholder="Enter mobile number" />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Role required" }]}
        >
          
            <Select placeholder="Select role" options={[
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' }
        
      ]}/>
           
        
  
        </Form.Item>

        <Form.Item>
          <div  style={{ display: 'flex', justifyContent: 'flex-end' , paddingTop: '180px'}}>
            <Space>
              <Button onClick={props.onCancel}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Space>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddUserForm
