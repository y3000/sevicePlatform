import { history } from '@umijs/max';
import React from 'react';

const RightContent: React.FC = () => {
  const userName = '张三';
  return (
    <>
      <span>{userName}，您好！</span>
      <a href="#" onClick={() => history.push('/login')}>
        退出登录
      </a>
    </>
  );
};

export default RightContent;
