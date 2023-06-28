import { DoubleRightOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import style from '../../index.less';

/**
 * @author: y3000
 * @description: 导航卡片
 * @date 2023-06-28 21:10
 */
const { Meta } = Card;

interface CardProps {
  title: string;
  imgUrl: string;
  clickHandle?: () => void;
}
const NavCard: React.FC<CardProps> = ({ title, imgUrl, clickHandle }) => {
  return (
    <div className={style.navCard}>
      <Card
        hoverable
        style={{ width: 300, display: 'inline-block' }}
        cover={<img alt="example" src={imgUrl} />}
        onClick={clickHandle}
      >
        <Meta
          title={
            <span>
              {title} <YoutubeOutlined />{' '}
            </span>
          }
          description={
            <span>
              查看详情
              <DoubleRightOutlined style={{ marginLeft: '5px' }} />
            </span>
          }
        />
      </Card>
    </div>
  );
};

export default NavCard;
