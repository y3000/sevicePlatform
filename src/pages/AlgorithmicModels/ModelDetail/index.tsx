import { queryModelDetail } from '@/services/model/model';
import { DoubleLeftOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Image, Space, Tag } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.less';
/** ===================================
 * @names: 算法模型详情页面
 * @author: y3000
 * @date: 2023-07-01
 * @description:
 *======================================*/

/**
 * 模型详情数结构设计
 * id: number 模型id  【唯一标识符】
 * title: string 模型名称
 * descriptionTag: [] 核心算法标签
 * content: string 模型简介概述
 * algorithmicDeac: string  模型算法介绍
 * case: string 应用场景
 * feature: string  功能特点
 * caseImgUrl: imgurl[] 应用场景图片
 * **/

interface IModelData {
  id: string; // 模型id  【唯一标识符】
  title: string; // 模型名称
  descriptionTag?: string[]; //核心算法标签
  content: string; // 模型简介概述
  algorithmicDeac: string; //  模型算法介绍
  case: string; // 应用场景
  feature?: string; // 功能特点
  caseImgUrl?: string[]; // 应用场景图片地址
}

const initData: IModelData = {
  id: 'm01',
  title: 'ARIMA模型',
  descriptionTag: [],
  content:
    'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
  algorithmicDeac:
    'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
  case: 'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
  feature:
    'ARIMA（差分自回归移动平均模型）是常用的时间序列分析模型，可以用于对生态环境监测数据进行分析和预测，并实现生态环境监测预警。在生态环境监测预警方面，ARIMA模型具有以下应用作用和效果：	预测环境变量趋势：ARIMA模型可以通过对生态环境监测历史数据进行分析和预测，帮助监测人员预测下一阶段环境变量趋势，及时进行监测和调控，降低环境风险。' +
    '精确处理数据：ARIMA模型能够自动处理环境监测数据的非平稳性、趋势性和季节性，并对其进行差分或者其他处理方法，使得数据更加稳定和精确。' +
    '辅助制定政策：ARIMA模型能够对环境因素进行分析，预测环境变化，辅助政府制定相应的环境保护政策，提高夺取环境问题的效率。',
  caseImgUrl: ['../arima.png', '../arima.png'],
};

const SmartTechnologyPage: React.FC = () => {
  // const { name } = useModel('global');
  // const id =
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState({
    ...initData,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('模型id', id);
    queryModelDetail({ id: id as string }).then((res) => {
      const { success, data } = res;
      console.log('模型详情接口返回：', data);
      if (success && data) {
        setData(data);
      }
    });
  }, []);

  return (
    <PageContainer ghost className={styles.content} title={false}>
      <a
        style={{ color: 'gray', marginBottom: '20px', display: 'block' }}
        onClick={() => history.back()}
      >
        <DoubleLeftOutlined />
        返回
      </a>
      <div className={styles.header}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.desc}>
          面向西南国土生态环境监测重大需求，提供智能化深度学习算法模型，支持不同应用场景和多模态数据输入。
        </p>
        {/* 算法标签 */}
        {data.descriptionTag?.length
          ? data.descriptionTag.map((item, index) => (
              <Tag key={index} color="geekblue">
                {item}
              </Tag>
            ))
          : null}
      </div>
      {/* 简介 */}
      <div className={styles.introduce}>
        <h2 className={styles.title}>1. 模型概述</h2>
        <div className={styles.text}>{data.content}</div>
      </div>
      <div className={styles.introduce}>
        <h2 className={styles.title}>2. 模型算法简介</h2>
        <div className={styles.text}>{data.algorithmicDeac}</div>
      </div>
      <div className={styles.introduce}>
        <h2 className={styles.title}>3. 应用场景</h2>
        <div className={styles.text}>{data.case}</div>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Space>
            {data.caseImgUrl?.length
              ? data.caseImgUrl.map((item, index) => {
                  return <Image width={'100%'} src={item} key={index} />;
                })
              : ''}
          </Space>
        </Image.PreviewGroup>
      </div>
      {data.feature && (
        <div className={styles.introduce}>
          <h2 className={styles.title}>4. 主要功能特点</h2>
          <div className={styles.text}>{data.feature}</div>
        </div>
      )}
    </PageContainer>
  );
};

export default SmartTechnologyPage;
