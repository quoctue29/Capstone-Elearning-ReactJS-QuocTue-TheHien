import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Thiết kế Web
      </a>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Lập trình di động
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Lập trình Front end
      </a>
    ),
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Lập trình Full Stack
      </a>
    ),
    key: "4",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Tư duy lập trình
      </a>
    ),
    key: "4",
  },
];

const DropdownMenu = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="block mt-4 lg:inline-block text-amber-500 lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-amber-600 mr-2">
          DANH SÁCH KHÓA HỌC
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
