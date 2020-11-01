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
    query({ orgName: value }).then((d) => {
      if (currentValue === value) {
        const { data } = d;
        const reData = [];
        data.forEach((r) => {
          reData.push({
            value: r.locationId,
            text: r.locationName,
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
  componentDidMount() {
    fetch('', (data) => this.setState({ data }));
  }
  handleSearch = (value) => {
    if (value) {
      fetch(value, (data) => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = (value) => {
    const { onChange } = this.props;
    this.setState({ value });
    onChange && onChange(value);
  };

  render() {
    const options = this.state.data.map((d) => <Option key={d.value}>{d.text}</Option>);
    return (
      <Select
        defaultValue={this.props.value}
        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;
