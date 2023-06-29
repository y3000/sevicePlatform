import Title from '@/components/Header/TitleComponent';
import React from 'react';
/** ===================================
 * @names: headerTitle
 * @author: y3000
 * @date: 2023-06-27
 * @description:
 *======================================*/

const Header: React.FC = () => {
  return (
    <div>
      <div className="ant-pro-top-nav-header-main-left css-dev-only-do-not-override-qv1rgh">
        <div
          className="ant-pro-top-nav-header-logo css-dev-only-do-not-override-qv1rgh"
          id="logo"
        >
          <a>
            <img
              alt="Logo"
              src="/static/logo1.53e932c2.png"
              style={{ height: '80px' }}
            />
            <h1>
              <Title />
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
