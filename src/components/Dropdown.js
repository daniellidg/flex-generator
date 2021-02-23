import React from "react";

import { Select } from "antd";
const { Option } = Select;

export default function Operation({
  labelName,
  defaultValue,
  onChange,
  options
}) {
  return (
    <div
      style={{
        width: 220,
        margin: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <label style={{ marginRight: 8 }}>{labelName}:</label>
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        style={{ width: 120 }}
      >
        {options.map((jt, index) => (
          <Option key={index} value={jt}>
            {jt}
          </Option>
        ))}
      </Select>
    </div>
  );
}
