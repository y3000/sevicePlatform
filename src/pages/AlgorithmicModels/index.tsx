/* eslint-disable @typescript-eslint/no-unused-vars */
import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { queryModelList } from '@/services/model/model';
import {
  AppstoreTwoTone,
  BlockOutlined,
  CodeSandboxOutlined,
  LikeOutlined,
  NodeIndexOutlined,
  SlidersTwoTone,
  StarOutlined,
  ToolTwoTone,
} from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Input, Modal, Radio, RadioChangeEvent, Tag, message } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';
import styles from './index.less';

/** ===================================
 * @names: 算法模型
 * @author: y3000
 * @date: 2023-06-27
 * @description:
 *======================================*/
const { Search } = Input;

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <span>
    {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
    {text}
  </span>
);

const dataSource = [
  {
    href: 'https://ant.design',
    title: `ARIMA模型`,
    // avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description: ['ARIMA模型', 'ARIMA模型', 'ARIMA模型'],
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: '',
    title: 'CAR模型',
    description: ['ARIMA模型', 'ARIMA模型', 'ARIMA模型'],
    content:
      'CAR模型既可用于分类，又可用于回归问题。它是一种基于树的先进算法，结合了分类回归树（CART）和多元自适应回归样条（MARS）的概念.',
  },
  {
    title: 'RBF模型',
    description: ['ARIMA模型', 'ARIMA模型', 'ARIMA模型'],
    content:
      'ARIMA（差分自回归移动平均模型）是常用的时间序列分析模型，可以用于对平稳时间序列和非平稳时间序列进行预测，具有较好的预测性能和可解释性。',
  },
  {
    title: '决策树模型',
    description: ['ARIMA模型', 'ARIMA模型', 'ARIMA模型'],
    content:
      '决策树是一种常用的非参数化监督学习算法，它能够用来解决分类和回归等问题。决策树基于树形结构进行决策，使用二元分割方法。',
  },
];

/**
 * 模型卡片数结构设计
 * id: number 模型id  【唯一标识符】
 * title: string 模型名称
 * descriptionTag: [] 核心算法标签
 * content: string 模型简介概述
 * **/

export interface IModelData {
  id: string; // 模型id  【唯一标识符】
  title: string; // 模型名称
  descriptionTag?: string[]; //核心算法标签
  content: string; // 模型简介概述
  algorithmicDeac: string; //  模型算法介绍
  case: string; // 应用场景
  feature?: string; // 功能特点
  caseImgUrl?: string[]; // 应用场景图片地址
}

const AlgorithmicModelsPage: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  // 搜索
  const onSearch = (value: string) => console.log(value);

  const [searchData, setSearchData] = useState({
    title: '',
    descriptionTag: [],
    content: '',
  });
  const [modelList, setModelList] = useState<IModelData[]>([]);
  // 模型类型change事件
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const warningBuilding = () => {
    Modal.info({
      title: '温馨提示',
      content: '正在建设中……',
    });
  };

  useEffect(() => {
    queryModelList(searchData)
      .then((res) => {
        const { success, data } = res;
        console.log('模型数据请求返回：', data);

        if (success && data?.length > 0) {
          setModelList(data);
        }
      })
      .catch((err) => {
        console.error('请求失败！', err);
      });
  }, []);
  return (
    <PageContainer ghost title={false} className={styles.content}>
      <div className={styles.header}>
        <h2 className={styles.title}>算法模型</h2>
        <p className={styles.desc}>
          面向西南国土生态环境监测重大需求，提供智能化深度学习算法模型，支持不同应用场景和多模态数据输入。
        </p>
      </div>
      <div className={styles.search}>
        <Search
          placeholder="请输入你需要搜索模型名称"
          onSearch={onSearch}
          enterButton
        />
      </div>

      <div className={styles.list}>
        {/* 左侧标签分类 */}
        <div className={styles.left}>
          <div className={styles.modalType}>
            <h2>
              <AppstoreTwoTone />
              模型类型
            </h2>
            <Radio.Group onChange={onChange} size="large">
              <Radio.Button value="forewarningModel" onClick={warningBuilding}>
                <CodeSandboxOutlined />
                预警模型
              </Radio.Button>
              <Radio.Button
                value="pratices"
                onClick={() =>
                  history.push('http://183.245.140.144:8000/#/login')
                }
              >
                <CodeSandboxOutlined />
                实战方案
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className={styles.modalType}>
            <h2>
              <ToolTwoTone />
              应用场景
            </h2>
            <Radio.Group onChange={onChange} size="large">
              <Radio.Button value="land" onClick={warningBuilding}>
                <BlockOutlined />
                土地资源
              </Radio.Button>
              <Radio.Button
                value="water"
                onClick={() =>
                  history.push('http://112.85.214.34:8100/#/login')
                }
              >
                <BlockOutlined />
                水利资源
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className={styles.modalType}>
            <h2>
              <SlidersTwoTone />
              核心数据
            </h2>
            <Radio.Group onChange={onChange} size="large">
              <Radio.Button value="environment" onClick={warningBuilding}>
                <NodeIndexOutlined />
                环境图谱
              </Radio.Button>
              <Radio.Button
                value="math"
                onClick={() =>
                  history.push('http://1.14.7.101/math_neo4j_web/')
                }
              >
                <NodeIndexOutlined />
                数学图谱
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
        {/* 右侧模型卡片列表 */}
        <div className={styles.right}>
          <ProList<{ title: string }>
            itemLayout="vertical"
            rowKey="id"
            headerTitle="模型列表展示"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={modelList}
            onItem={(record) => {
              return {
                onClick: (event) => {
                  console.log('点击事件', record);
                  const { id } = record as IModelData;
                  if (id) {
                    history.push(`/modelDetail/${id}`);
                  } else {
                    message.error('无法获取到模型id参数');
                  }
                }, // 点击行
                onDoubleClick: (event) => {},
                onContextMenu: (event) => {},
                onMouseEnter: (event) => {}, // 鼠标移入行
                onMouseLeave: (event) => {},
              };
            }}
            metas={{
              title: {},

              description: {
                dataIndex: 'descriptionTag',
                render: (text: any) => {
                  return text?.length ? (
                    text.map((item: any, index: React.Key) => {
                      return (
                        <Tag key={index} color="geekblue">
                          {item}
                        </Tag>
                      );
                    })
                  ) : (
                    <Tag color="geekblue">{text}</Tag>
                  );
                },
              },
              actions: {
                render: () => [
                  <IconText
                    icon={StarOutlined}
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  // <IconText
                  //   icon={MessageOutlined}
                  //   text="2"
                  //   key="list-vertical-message"
                  // />,
                ],
              },
              extra: {
                render: () => (
                  <></>
                  // <img
                  //   width={272}
                  //   alt="logo"
                  //   src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  // />
                ),
              },
              content: {
                render: (text) => {
                  return <div>{text}</div>;
                },
              },
            }}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default AlgorithmicModelsPage;
