import { Collapse, Form, Input } from 'antd'
import { HtmlButton,BtnBold, BtnItalic, BtnRedo, BtnUnderline, BtnUndo, Editor, Toolbar, EditorProvider } from 'react-simple-wysiwyg'

const EmailTemplate = () => {

  return (
    <div>
      <Collapse
      defaultActiveKey={['1']}
      items={[{key:'1' , label: 'Email Template' ,
        children: <><Form.Item 
        label="Subject"
                name = "subject"
                rules={[{required:true, message:"Subject required"}]}>
                <Input placeholder='Enter subject'/>

        </Form.Item>

        <EditorProvider>
          <Form.Item 
          label="Body"
          name="body"
          rules={[{required:true, message:"Body required"}]}
          >
            <Editor>
              <Toolbar>
                <BtnBold />
                <BtnItalic />
                <BtnUnderline />
                <HtmlButton />
                <BtnUndo />
                <BtnRedo />
              </Toolbar>
            </Editor>
          </Form.Item>
        </EditorProvider>
        
        </>

      }]}
      />
    </div>
  )
}


export default EmailTemplate
