import React from 'react';
import { Select } from 'antd';
import { query } from './service';

const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    // const str = querystring.encode({
    //   code: 'utf-8',
    //   q: value,
    // });
    query({ orgCode: value }).then((d) => {
      if (currentValue === value) {
        const { data } = d;
        //   const { list = [] } = data || {}
        const reData = [];
        data.forEach((r) => {
          reData.push({
            value: r.roleId,
            text: r.roleName,
          });
        });
        callback(reData);
      }
    });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
    value: undefined,
  };

  handleChange = (value) => {
    const { onChange } = this.props;
    this.setState({ value });
    onChange && onChange(value);
  };

  render() {
    const options = this.props.options.map((d) => <Option key={d.roleId}>{d.roleName}</Option>);
    return (
      <Select
        defaultValue={this.props.value}
        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        // showArrow={false}
        filterOption={false}
        // onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;
