import { UserOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import React from 'react';
const RightContent: React.FC = () => {
  const userName = '张三';
  return (
    <div style={{ color: 'gray' }}>
      <UserOutlined className={'prefixIcon'} />
      <span style={{ marginLeft: '3px' }}> {userName}，您好！</span>
      <a href="#" onClick={() => history.push('/login')}>
        退出登录
      </a>
    </div>
  );
};

export default RightContent;
