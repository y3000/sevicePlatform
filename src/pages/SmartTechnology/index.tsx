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
      description: '知识图谱描述'
    },
    {
      title: '时序模型',
      imgurl: 'shixumoxin.png',
      description: '时序模型描述'
    },
    {
      title: '异常检测',
      imgurl: 'yichangjiance.jpg',
      description: '异常检测描述'
    },
    {
      title: 'PINN网络',
      imgurl: 'pinn.jpg',
      description: 'PINN网络描述'
    },
  ];
  return (
    <PageContainer
      ghost
      title={false}
    >
      <div className={styles.header}>
        <span className={styles.title}>智能技术</span>
        <span className={styles.detail}>围绕国土生态环境监测预警的智能技术及其重大需求，以西南区域环境（四川）为实际应用场景，开展高水平智能技术研究。</span>
      </div>
      <div className={styles.introduce}>
        <div className={styles.list}>
          <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`${item.imgurl}`} style={{ width: '450px', height: '300px', borderRadius:'0'}}/>}
              title={item.href?<a href={`${item.href}`}  style={{fontSize: '30px'}}>{item.title}</a>:<span style={{fontSize: '30px'}}>{item.title}</span>}
              description={<span style={{fontSize: '20px'}}>{item.description}</span>}
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
