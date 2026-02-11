import { Drawer, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useRef } from "react";
import AddNotificationForm from "../add-notification-form/AddNotificationForm";

interface IAddNotifiactionDrawer {
  open: boolean;
  onClose: () => void;
}

export interface AddNotificationFormRef {
  resetForm: () => void;
}

const AddNotifiactionDrawer = (props: IAddNotifiactionDrawer) => {
  const { confirm } = Modal;
  const formRef = useRef<AddNotificationFormRef>(null);

  const showConfirmModal = () => {
    confirm({
      title: "Are you sure you want to close?",
      icon: <ExclamationCircleOutlined />,
      content: "Your data will be lost.",
      okText: "Yes",
      cancelText: "No",
      onOk() {
        formRef.current?.resetForm();
        props.onClose();
      },
      onCancel() {
        
      },
    });

    console.log(formRef)
  };

  return (
    <div>
      <Drawer
        title="New Notification Type"
        closable={{ placement: "end" }}
        onClose={showConfirmModal}
        size="600px"
        open={props.open}
      >
        <AddNotificationForm ref={formRef} onClose={showConfirmModal} />
      </Drawer>
    </div>
  );
};

export default AddNotifiactionDrawer;
