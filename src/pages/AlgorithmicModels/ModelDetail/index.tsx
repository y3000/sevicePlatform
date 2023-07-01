import { DoubleLeftOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Image } from 'antd';
import styles from './index.less';
/** ===================================
 * @names: 算法模型详情页面
 * @author: y3000
 * @date: 2023-06-27
 * @description:
 *======================================*/

const SmartTechnologyPage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost className={styles.content} title={false}>
      <a style={{ color: 'gray', marginBottom: '20px', display: 'block' }}>
        <DoubleLeftOutlined />
        返回
      </a>
      <div className={styles.header}>
        <h2 className={styles.title}>RAA模型</h2>
        <p className={styles.desc}>
          面向西南国土生态环境监测重大需求，提供智能化深度学习算法模型，支持不同应用场景和多模态数据输入。
        </p>
      </div>
      {/* 简介 */}
      <div className={styles.introduce}>
        <h2 className={styles.title}>1. 模型概述</h2>
        <div className={styles.text}>
          ARIMA（Autoregressive Integrated Moving
          Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。
        </div>
      </div>
      <div className={styles.introduce}>
        <h2 className={styles.title}>2. 模型算法简介</h2>
        <div className={styles.text}>
          ARIMA（Autoregressive Integrated Moving
          Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。
        </div>
      </div>
      <div className={styles.introduce}>
        <h2 className={styles.title}>3. 应用场景</h2>
        <div className={styles.text}>
          ARIMA（Autoregressive Integrated Moving
          Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。
        </div>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image width={'40vw'} src="../jiaoliu1.jpg" />
          <Image width={'40vw'} src="../jiaoliu2.jpg" />
        </Image.PreviewGroup>
      </div>
      <div className={styles.introduce}>
        <h2 className={styles.title}>1. 主要功能特点</h2>
        <div className={styles.text}>
          ARIMA（Autoregressive Integrated Moving
          Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。
        </div>
      </div>
    </PageContainer>
  );
};

export default SmartTechnologyPage;
