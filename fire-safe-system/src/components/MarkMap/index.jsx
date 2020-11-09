import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Radio, Modal } from 'antd';
import Taggd from './mark/src/index';
import styles from './style.less';
import DeviceSelect from '@/components/DeviceSelect';
const markIcon =
  'data:image/png;base64,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';

const MarkMap = ({ value, onChange, imgUrl }) => {
  if (!imgUrl) {
    return null;
  }
  const [curreTag, setCurreTag] = useState(undefined);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentTaggd, setTaggd] = useState(false);
  const newTag = (data) => {
    const tag = new Taggd.Tag(
      {
        x: parseFloat(data.x),
        y: parseFloat(data.y),
      },
      data.productType,
      {
        src: markIcon,
        style: 'background-color:transparent',
      },
    ).enableEditorMode();
    // let productTypeId = window.product.productTypeId;
    tag.setData(data);
    // setCurreTag(tag);
    tag.on('click', (e) => {
      setCurreTag(tag);
      form.setFieldsValue(tag.getData());
      setVisible(true);
    });
    return tag;
  };
  const createTag = () => {
    const image = document.getElementById('my-image');
    const tags = [];
    value &&
      value.forEach((item) => {
        tags.push(newTag(item));
      });
    const taggd = new Taggd(
      image,
      {
        addEvent: 'click',
        imageClickHandler: (e) => {
          alert();
        },
      },
      tags,
    ).enableEditorMode();

    taggd.on('taggd.editor.add', (taggd, position) => {
      var tag = newTag(position, '');
      taggd.addTag(tag);
      setCurreTag(tag);
      form.setFieldsValue(tag.getData());
      setVisible(true);
    });
    setTaggd(taggd);
  };

  const finshHandle = (values) => {
    const deviceJson = JSON.parse(values.deviceNo);
    const data = {
      productType: deviceJson.productTypeName,
      productTypeId: deviceJson.productTypeId,
      deviceNo: deviceJson.deviceNo,
      x: values.x,
      y: values.y,
    };
    curreTag.setData(data);
    const result = [];
    currentTaggd.tags && currentTaggd.tags.forEach((item) => {
      result.push(item.data);
    });
    onChange && onChange(result);
  };

  useEffect(() => {
    createTag();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
      }}
      className={styles.mapDetail}
    >
      <div
        style={{
          width: '50%',
        }}
      >
        {imgUrl ? <img id="my-image" style={{ width: '100%' }} src={imgUrl} /> : null}
      </div>
      <div
        style={{
          marginLeft: '30px',
        }}
      >
        {visible && (
          <Form onFinish={finshHandle} form={form}>
            {/* <Form.Item label="类型编号" name="productTypeId">
              <Input />
            </Form.Item>
            <Form.Item label="类型" name="productType">
              <Input />
            </Form.Item> */}
            <Form.Item label="设备编号" name="deviceNo">
              <DeviceSelect />
            </Form.Item>
            <Form.Item label="设备x坐标" name="x">
              <Input />
            </Form.Item>
            <Form.Item label="设备y坐标" name="y">
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              保存当前设备
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default MarkMap;
