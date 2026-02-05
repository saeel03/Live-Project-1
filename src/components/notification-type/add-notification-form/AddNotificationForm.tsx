import { Button, Form, Input, Radio } from 'antd';
import EmailTemplate from './email-template/EmailTemplate';
interface IAddNotificationForm
{
    title: string;
    description: string;
    replyType: "manage" | "no-reply" | "custom";
    subject: string;
    body: string;
}

interface IAddNotificationFormProps {
  onClose: () => void;
}

const AddNotificationForm = ({ onClose }: IAddNotificationFormProps) => {
      const [form] = Form.useForm<IAddNotificationForm>();

      const onFinish = (values: IAddNotificationForm) => {
        console.log('Form Values:', values);
      };

  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>

        <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >

            <Form.Item
            
                label="Title"
                name = "title"
                rules={[{required:true, message:"Title required"}]}>

                    <Input placeholder="Enter title"/>
            </Form.Item>

            <Form.Item
                label="Description"
                name = "description"
                rules={[{required:true, message:"Description required"}]}>

                    <Input placeholder="Enter Description"/>
            </Form.Item>

            <Form.Item
        label="Reply Type"
        name="replyType"
        initialValue="manage"
      >
        <Radio.Group>
          <Radio value="manage">Manage Reply</Radio>
          <Radio value="no-reply">No-Reply</Radio>
          <Radio value="custom">Custom Reply Address</Radio>
        </Radio.Group>
      </Form.Item>

      <EmailTemplate/>

      <div style={{
          position: 'sticky',
          bottom: -24,
          background: 'white',
          padding: '16px 0',
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '8px',
          marginTop: 'auto',
          zIndex: 10,
         
      }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="primary" htmlType='submit'>Save</Button>
      </div>


            
        </Form>



      
    </div>
  )
}

export default AddNotificationForm
