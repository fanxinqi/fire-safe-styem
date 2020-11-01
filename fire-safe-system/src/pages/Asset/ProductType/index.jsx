import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message, Input } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import CreateForm from './components/CreateForm';
import InnerForm from './components/InnerForm';
import { query, update, add, remove } from './service';

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
  const hide = message.loading('正在配置');

  try {
    await update(fields);
    hide();
    message.success('配置成功');
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
    await remove({
      productTypeId: Array.isArray(selectedRows)
        ? selectedRows.map((row) => row.productTypeId)
        : selectedRows.productTypeId,
    });
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
  const [editData, setEditData] = useState({});
  const actionRef = useRef();
  const [selectedRowsState, setSelectedRows] = useState([]);
  const fileds = [
    {
      title: '公司名称',
      dataIndex: 'orgName',
      tip: '公司名称',
      width: '40%',
      rules: [
        {
          required: true,
          message: '规则名称为必填项',
        },
      ],
    },
    {
      title: '公司编码',
      dataIndex: 'shortName',
      tip: '公司编码',
      width: '40%',
      hideInSearch: true,
      hideInTable: true,
      rules: [
        {
          required: true,
          message: '规则名称为必填项',
        },
      ],
    },
    {
      title: '产品类型',
      dataIndex: 'productType',
      valueType: 'textarea',
    },
    {
      title: '是否可见',
      dataIndex: 'visible',
      hideInTable: true,
      rules: [
        {
          type: 'string',
        },
      ],
      valueEnum: {
        0: {
          text: '否',
          visible: 0,
        },
        1: {
          text: '是',
          visible: 1,
        },
      },
    },
    {
      title: '文档1',
      dataIndex: 'doc1Id',
      hideInTable: true,
      valueEnum: {
        0: {
          text: '否',
          doc1Id: 0,
        },
        1: {
          text: '是',
          doc1Id: 1,
        },
      },
    },
    {
      title: '文档2',
      dataIndex: 'doc2Id',
      hideInTable: true,
      valueEnum: {
        0: {
          text: '否',
          doc2Id: 0,
        },
        1: {
          text: '是',
          doc2Id: 1,
        },
      },
    },
    {
      title: '文档3',
      dataIndex: 'doc3Id',
      hideInTable: true,
      valueEnum: {
        0: {
          text: '否',
          doc3Id: 0,
        },
        1: {
          text: '是',
          doc3Id: 1,
        },
      },
    },
    {
      title: '文档4',
      dataIndex: 'doc4Id',
      hideInTable: true,
      valueEnum: {
        0: {
          text: '否',
          doc4Id: 0,
        },
        1: {
          text: '是',
          doc4Id: 1,
        },
      },
    },
    {
      title: '文档5',
      dataIndex: 'doc5Id',
      hideInTable: true,
      valueEnum: {
        0: {
          text: '否',
          doc5Id: 0,
        },
        1: {
          text: '是',
          doc5Id: 1,
        },
      },
    },
    {
      title: '文档6',
      dataIndex: 'doc6Id',
      hideInTable: true,
      valueEnum: {
        0: {
          text: '否',
          doc6Id: 0,
        },
        1: {
          text: '是',
          doc6Id: 1,
        },
      },
    },
  ];
  const columns = [
    ...fileds,
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          {/* <a href="">查看</a> */}
          <Divider type="vertical" />
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              console.log(record);
              // const Objrecord = {};
              // Object.keys(record).forEach((key) => {
              //   Objrecord[key] = String(record[key]);
              // });
              record.visible = Boolean(record.visible);
              setEditData(record);
            }}
          >
            编辑
          </a>
          <Divider type="vertical" />
          <a href="javascript:void:0" onClick={() => handleRemove(record)}>
            删除
          </a>
        </>
      ),
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle="产品类型"
        actionRef={actionRef}
        options={false}
        rowKey="key"
        toolBarRender={() => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> 新建
          </Button>,
        ]}
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
      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <InnerForm
          onFinish={async (value) => {
            value.visible = Number(value.visible);
            const success = await handleAdd(value);

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
          columns={columns}
          rowSelection={{}}
        /> */}
      </CreateForm>
      <CreateForm
        onCancel={() => handleUpdateModalVisible(false)}
        modalVisible={updateModalVisible}
      >
        <InnerForm
          initialValues={editData}
          onFinish={async (value) => {
            value.visible = Number(value.visible);
            value.productTypeId = editData.productTypeId;
            const success = await handleUpdate(value);

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
              handleModalVisible(false);

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
