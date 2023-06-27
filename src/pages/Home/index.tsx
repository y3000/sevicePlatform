import { PageContainer } from '@ant-design/pro-components';
import { Carousel } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost title={false}>
      <div className={styles.container}>
        <Carousel autoplay className={styles.lunbo}>
          <div>
            <img src="lunbotu1.png" alt="" />
          </div>
          <div>
            <img src="lunbotu2.jpg" alt="" />
          </div>
          <div>
            <img src="lunbotu3.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    </PageContainer>
  );
};

export default HomePage;
