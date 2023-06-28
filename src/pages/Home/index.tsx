import { PageContainer } from '@ant-design/pro-components';
import { Carousel } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost title={false}>
      <div className={styles.container}>
        <Carousel className={styles.lunbo}>
          <div className={styles.lunbo1}>1</div>
          <div className={styles.lunbo2}>2</div>
          <div className={styles.lunbo3}>3</div>
        </Carousel>
      </div>
    </PageContainer>
  );
};

export default HomePage;
