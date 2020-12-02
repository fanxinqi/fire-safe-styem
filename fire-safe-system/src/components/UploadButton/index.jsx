import React  from 'react';
import { Button,message } from 'antd';
import request from '@/utils/request';

const UploadButton = (props) => {
  const { api = '/api/device/upload', onSuccess, onError } = props;
  const onFileChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    var formData = new FormData();
    formData.append('file', file);
    const hide = message.loading('正在上传');
    request
      .post(api, {
        data: formData,
        requestType: 'form',
      })
      .then(function (response) {
        hide();
        message.success('上传成功');
        onSuccess && onSuccess();
      })
      .catch(function (error) {
        hide();
        message.error('上传失败');
        onError && onError();
      });
  };

  return (
    <Button type="primary">
      批量上传
      <input
        style={{
          opacity: 0,
          position: 'absolute',
          left: '0px',
        }}
        type="file"
        onClick={(event) => {
          event.target.value = null;
        }}
        onChange={onFileChange}
      />
    </Button>
  );
};
export default UploadButton
