import React from 'react';
import { Modal } from 'antd';

const CreateForm = props => {
  const { modalVisible, onCancel,title } = props;
  return (
    <Modal
      destroyOnClose
      title={title}
      width={800}
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default CreateForm;
