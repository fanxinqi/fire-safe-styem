import React, { useState } from 'react';
import { Tree } from 'antd';
import { query } from './service';

class Limit extends React.Component {
  state = {
    treeData: [],
    expandedKeys: '',
    checkedKeys: '',
    selectedKeys: '',
    autoExpandParent: true,
  };
  async componentDidMount() {
    const data = await query();
    this.setState({ treeData: data });
  }
  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({ expandedKeys });
    this.setState({ autoExpandParent: false });
  };

  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  };

  onSelect = (selectedKeys, info) => {
    // this.setState({ selectedKeys });
    const { onChange, value } = this.props;
    onChange &&  onChange(selectedKeys)
  };
  render() {
    const { expandedKeys = 1, checkedKeys, selectedKeys, autoExpandParent } = this.props;
    const { treeData } = this.state;
    const firstItem = treeData[0] || {};
    const { value } = this.props;
    return (
      <Tree
        checkable
        // defaultExpandAll
        // onExpand={onExpand}
        // expandedKeys={[firstItem.key]}
        // autoExpandParent={autoExpandParent}
        // // onCheck={onCheck}
        checkedKeys={value}
        onCheck={this.onSelect}
        // selectedKeys={selectedKeys}
        treeData={this.state.treeData}
      />
    );
  }
}

export default Limit;
