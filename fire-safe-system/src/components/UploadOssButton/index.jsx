import React from 'react';
import { Button, message } from 'antd';
import request from '@/utils/request';
let OSS = require('ali-oss');

const UploadButton = (props) => {
  const { api = '/api/device/upload',onSuccess, value, onChange, onError } = props;

  let client = new OSS({
    // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
    region: 'oss-cn-zhangjiakou',
    // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
    accessKeyId: 'LTAI4G62dSC7uZDowzGmpb3g',
    accessKeySecret: 'zTo2UvI7QIrHqfXqY3LGuZzmdFeXEp',
    bucket: 'jiejiean',
  });

  async function putObject(data) {
    const hide = message.loading('正在上传');
    try {
      // object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
      let result = await client.put(data.name, data);
      console.log(result);
      onChange && onChange(result.url || value);
      onSuccess && onSuccess(result.url || value);
      
      hide();
      console.log(result);
    } catch (e) {
      console.log(e);
      hide();
      onError && onError(e);
    }
  }

  const onFileChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    var formData = new FormData();
    formData.append('file', file);
    putObject(file);
  };

  return (
    <Button type="primary">
      上传室内地图
      <input
        style={{
          opacity: 0,
          top:'0px',
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
export default UploadButton;
