import { PageContainer } from '@ant-design/pro-components';
// import { history } from 'umi';
// import NavCard from '../Home/components/NavCard';
import { Avatar, List } from 'antd';
// import { useModel } from '@umijs/max';
import styles from './index.less';
/** ===================================
 * @names: 智能技术
 * @author: y3000
 * @date: 2023-06-27
 * @description:
 *======================================*/

const SmartTechnologyPage: React.FC = () => {
  // const { name } = useModel('global');
  const data = [
    {
      title: '知识图谱',
      imgurl: 'tupu.png',
      href: 'http://1.14.7.101/math_neo4j_web/',
      description:
        '知识图谱（Knowledge Graph），在图书情报界称为知识域可视化或知识领域映射地图，是显示知识发展进程与结构关系的一系列各种不同的图形，用可视化技术描述知识资源及其载体，挖掘、分析、构建、绘制和显示知识及它们之间的相互联系。',
    },
    {
      title: '时序模型',
      imgurl: 'shixumoxin.png',
      href: '/models',
      description:
        'TimesNet是时间序列分析的任务-通用基础模型。受多周期性的激励影响，TimesNet可以通过模块化体系结构解决复杂的时间变化，并通过有效的初始块捕获二维空间的周期内和周期间的变化。',
    },
    {
      title: '异常检测',
      imgurl: 'yichangjiance.jpg',
      href: '/models',
      description:
        'Anomaly Transformer 通过学习关联差异(Association Discrepancy) 来提升异常的可分性。技术上，它提出了Anomaly-Attention 来表征先验关联和序列关联，以及一个极小极大优化策略来获得更容易区分的关联差异。',
    },
    {
      title: 'PINN网络',
      imgurl: 'pinn.jpg',
      href: '/models',
      description:
        'PINN是一种基于神经网络的模型，用于模拟和优化物理系统的行为，并推断出物理参数。通过一般非线性偏微分方程描述的任何给定的物理规律，应用该模型实现对传统数值计算方法的智能化改进，我们主要研究用于解决与偏微分方程(PDE)相关的各种问题:包括方程求解、参数反演、模型发现、控制与优化。',
    },
  ];
  return (
    <PageContainer ghost title={false}>
      <div className={styles.header}>
        <span className={styles.title}>智能技术</span>
        <span className={styles.detail}>
          围绕国土生态环境监测预警的智能技术及其重大需求，以西南区域环境（四川）为实际应用场景，开展高水平智能技术研究。
        </span>
      </div>
      <div className={styles.introduce}>
        <div className={styles.list}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`${item.imgurl}`}
                      style={{
                        width: '260px',
                        height: '200px',
                        borderRadius: '5px',
                      }}
                    />
                  }
                  title={
                    item.href ? (
                      <a href={`${item.href}`} style={{ fontSize: '24px' }}>
                        {item.title}
                      </a>
                    ) : (
                      <span style={{ fontSize: '26px' }}>{item.title}</span>
                    )
                  }
                  description={
                    <span style={{ fontSize: '18px' }}>{item.description}</span>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      </div>
      {/* <div className={styles.introduce}>
        <div className={styles.card}>
          <NavCard 
            title="知识图谱"
            imgUrl="tupu.png"
            clickHandle={() => history.push('http://1.14.7.101/math_neo4j_web/')}
          />
        </div>
        <div className={styles.card}>
          <NavCard title="时序模型" imgUrl="shixumoxin.png" />
        </div>
        <div className={styles.card}>
          <NavCard className={styles.card} title="异常检测" imgUrl="yichangjiance.jpg" />
        </div>
        <div className={styles.card}>
          <NavCard className={styles.card} title="PINN网络" imgUrl="pinn.jpg" />  
        </div>
      </div> */}
    </PageContainer>
  );
};

export default SmartTechnologyPage;
