import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
// import './index.less';
import styles from './index.less';
import { Image } from 'antd';
/** ===================================
 * @names: 人才培养
 * @author: y3000
 * @date: 2023-06-27
 * @description:
 *======================================*/

const TeamPage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost title={false}>
      <div className={styles.container}>
        <div className={styles.team}>
          <div className={styles.title}>人才培养</div>
          <div className={styles.content}>
            <p>紧贴我校办学宗旨，服务西南国土环境监测；</p>
            <p>放眼学界前沿热点，培养高质量创新型人才。</p>
          </div>
        </div>
        <div className={styles.achievement}>
          <div className={styles.title}>大创成果</div>
          <div className={styles.imgs}>
            <div className={styles.single}>
              <Image src="/2021.jpg"></Image>
              <p>2021挑战杯二等奖</p>
            </div>
            <div className={styles.single}>
              <Image src="/2022.jpg"></Image>
              <p>2022年住家规划师AI算法获奖照片</p>
            </div>
            <div className={styles.single}>
              <Image src="/internet.jpg"></Image>
              <p>互联网+四川省铜奖</p>
            </div>
            <div className={styles.single}>
              <Image src="/gold.jpg"></Image>
              <p>挑战杯四川省金奖</p>
            </div>
          </div>
        </div>
        <div className={styles.exchange}>
          <div className={styles.title}>学术交流</div>
          <div className={styles.imgs}>
            <div className={styles.single}>
            <Image src="/jiaoliu1.jpg"/>
            </div>
            <div className={styles.single}>
              <Image src="/jiaoliu2.jpg"/>
            </div>
          </div>
        </div>
      </div>
      {/* <div>人才培养</div> */}
    </PageContainer>
  );
};

export default TeamPage;
