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
        <Carousel effect="fade" className={styles.lunbo} autoplay>
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
          <NavCard title="算法模型" imgUrl="modals.png" />
          <NavCard title="应用案例" imgUrl="case.png" />
          <NavCard title="人才培养" imgUrl="team.png" />
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
