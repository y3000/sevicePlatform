import { PageContainer } from '@ant-design/pro-components';
import { Carousel } from 'antd';
import { history } from 'umi';
import NavCard from './components/NavCard';
import styles from './index.less';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost title={false}>
      <div className={styles.container}>
        <Carousel className={styles.lunbo} autoplay>
          <div className={styles.lunbo1}>1</div>
          <div className={styles.lunbo2}>2</div>
          <div className={styles.lunbo3}>3</div>
        </Carousel>
        <div className={styles.nav}>
          <NavCard
            title="智能技术"
            imgUrl="technology.png"
            clickHandle={() => history.push('/technology')}
          />
          <NavCard
            title="算法模型"
            imgUrl="modals.png"
            clickHandle={() => history.push('/models')}
          />
          <NavCard
            title="应用案例"
            imgUrl="case.png"
            clickHandle={() => history.push('/cases')}
          />
          <NavCard
            title="人才培养"
            imgUrl="team.png"
            clickHandle={() => history.push('/team')}
          />
        </div>
        <div>
          <h1 style={{ textAlign: 'center', fontSize: '30px' }}>智能技术</h1>
          <div className={styles.nav}>
            <NavCard
              title="知识图谱"
              imgUrl="tupu.png"
              clickHandle={() =>
                history.push('http://1.14.7.101/math_neo4j_web/')
              }
            />
            <NavCard title="时序模型" imgUrl="shixumoxin.png" />
            <NavCard title="异常检测" imgUrl="yichangjiance.jpg" />
            <NavCard title="PINN网络" imgUrl="pinn.jpg" />
          </div>
        </div>
        <div>
          <h1 style={{ textAlign: 'center', fontSize: '30px' }}>算法模型</h1>
          <div className={styles.nav}>
            <NavCard
              title="知识图谱"
              imgUrl="tupu.png"
              clickHandle={() =>
                history.push('http://1.14.7.101/math_neo4j_web/')
              }
            />
            <NavCard title="时序模型" imgUrl="shixumoxin.png" />
            <NavCard title="异常检测" imgUrl="yichangjiance.jpg" />
            <NavCard title="PINN网络" imgUrl="pinn.jpg" />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
