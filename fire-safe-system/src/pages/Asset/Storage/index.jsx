import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message, Input } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import CreateForm from './components/CreateForm';
import InnerForm from './components/InnerForm';
import { query, update, add, remove } from './service';
import { fields as pageFields, fieldsKey, formName, fieldsCitySelectKey } from './config';
/**
 * 添加节点
 * @param fields
 */

const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');

  try {
    await add({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async (fields) => {
  const hide = message.loading('正在更新');

  try {
    await update(fields);
    hide();
    message.success('编辑成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};
/**
 *  删除节点
 * @param selectedRows
 */

const handleRemove = async (selectedRows) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const deleteParams = Array.isArray(selectedRows)
      ? selectedRows.map((row) => row[fieldsKey])
      : [selectedRows[fieldsKey]];
    await remove(deleteParams);
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [defaultExpanded, setDefaultExpanded] = useState([]);
  const [editData, setEditData] = useState({});
  const actionRef = useRef();
  const [selectedRowsState, setSelectedRows] = useState([]);
  const columns = [
    ...pageFields,
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          {/* <a href="">查看</a> */}
          {/* <Divider type="vertical" /> */}
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              const editData = {
                ...record,
              };
              if (record[fieldsCitySelectKey]) {
                editData[fieldsCitySelectKey] = record[fieldsCitySelectKey].split('/');
              }
              editData.parentId = String(editData.parentId)
              setEditData(editData);
            }}
          >
            编辑
          </a>
          <Divider type="vertical" />
          <a
            href="javascript:void:0"
            onClick={async () => {
              const success = await handleRemove(record);
              if (success) {
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }
            }}
          >
            删除
          </a>
        </>
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable
        headerTitle={formName}
        actionRef={actionRef}
        options={false}
        rowKey="key"
        toolBarRender={() => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> 新建
          </Button>,
        ]}
        expandable={{ defaultExpandedRowKeys: defaultExpanded }}
        request={(params, sorter, filter) => query({ ...params, sorter, filter })}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项&nbsp;&nbsp;
              
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest();
            }}
          >
            批量删除
          </Button>
         
        </FooterToolbar>
      )}
      <CreateForm
        title={`新建${formName}`}
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      >
        <InnerForm
          onFinish={async (values) => {
            if (values[fieldsCitySelectKey]) {
              values[fieldsCitySelectKey] = values[fieldsCitySelectKey].join('/');
            }
            const success = await handleAdd(values);
            if (success) {
              handleModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
        />
        {/* <ProTable
          onSubmit={async (value) => {
            const success = await handleAdd(value);

            if (success) {
              handleModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          search={false}
          rowKey="key"
          type="form"
          form={{ layout: 'horizontal' }}
          columns={columns.slice(1, columns.length)}
          rowSelection={{}}
        /> */}
      </CreateForm>
      <CreateForm
        title={`编辑${formName}`}
        onCancel={() => handleUpdateModalVisible(false)}
        modalVisible={updateModalVisible}
      >
        <InnerForm
          initialValues={editData}
          onFinish={async (values) => {
            const objValues = {
              ...values,
            };
            objValues[fieldsKey] = editData[fieldsKey];
            if (objValues[fieldsCitySelectKey]) {
              objValues[fieldsCitySelectKey] = objValues[fieldsCitySelectKey].join('/');
            }
            const success = await handleUpdate(objValues);
            if (success) {
              handleUpdateModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
        />
        {/* <ProTable
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleUpdateModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          search={false}
          rowKey="key"
          type="form"
          form={{
            layout: 'horizontal',
            initialValues: {
              ...editData,
            },
          }}
          columns={columns}
          rowSelection={{}}
        /> */}
      </CreateForm>
    </PageContainer>
  );
};

export default TableList;
