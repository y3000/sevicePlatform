import { PageContainer } from '@ant-design/pro-components';
import { history } from 'umi';
import NavCard from '../Home/components/NavCard';
// import { useModel } from '@umijs/max';
// import styles from './index.less';
/** ===================================
 * @names: 智能技术
 * @author: y3000
 * @date: 2023-06-27
 * @description:
 *======================================*/

const SmartTechnologyPage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer
      ghost
      title="智能技术：围绕国土生态环境监测预警的智能技术及其重大需求，以西南区域环境（四川）为实际应用场景，开展高水平智能技术研究。"
    >
      111
      <div>智能技术</div>
      <NavCard
        title="知识图谱"
        imgUrl="tupu.png"
        clickHandle={() => history.push('http://1.14.7.101/math_neo4j_web/')}
      />
      <NavCard title="时序模型" imgUrl="shixumoxin.png" />
      <NavCard title="异常检测" imgUrl="yichangjiance.jpg" />
      <NavCard title="PINN网络" imgUrl="pinn.jpg" />
    </PageContainer>
  );
};

export default SmartTechnologyPage;
