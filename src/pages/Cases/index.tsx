import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { Button} from 'antd';
// import './index.less';
import styles from './index.less';
/** ===================================
 * @names:应用案例
 * @author: y3000
 * @date: 2023-06-27
 * @description:
 *======================================*/
const CasesPage: React.FC = () => {

  // const { name } = useModel('global');
  return (
    <PageContainer ghost title={false}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>应用案例</div>
          <div className={styles.content}>
            <p>围绕国土环境生态监测实际应用场景，应用我所最新智能技术研究成果，解决水土资源监测核心业务需求，实现产学研一体化协调发展。</p>
          </div>
        </div>
        <div className={styles.case}>
          <div className={styles.left}>
            <video src='/青田系统短视频.mp4' controls></video>
            {/* <video loop autoPlay muted>
              <source src="/青田系统短视频.mp4"  type="video/mp4"/>
            </video> */}
          </div>
          <div className={styles.right}>
            <div className={styles.name}>青田县水环境智慧监测平台</div>
            <div className={styles.detail}>
              <p>通过智能水环境监测系统，能够全面掌握青田县水资源状态，基于系统提供的各类分析模型实时预测预警污染源排放情况，为环境治理的相关工作部署提供有力的技术支撑。</p>
            </div>
            <Button size="large"><a href='http://183.245.140.144:8000/#/login'>访问系统</a></Button>
          </div>
        </div>
        <div className={styles.case}>
          <div className={styles.left}>
            <video src='/贾汪系统短视频.mp4' controls></video>
            {/* <video loop autoPlay muted>
              <source src="/贾汪系统短视频.mp4"  type="video/mp4"/>
            </video> */}
          </div>
          <div className={styles.right}>
            <div className={styles.name}>贾汪区入河排污口动态监测系统</div>
            <div className={styles.detail}>
              <p>本系统基于无线传感与通信、智能处理与控制等先进技术，设计实现了包括水质环境参数在线采集、监测设备智能组网、实时数据无线传输、后台模型深度学习，预警预测动态发布等功能于一体的综合水环境智慧监测服务平台。</p>
            </div>
            <Button size="large"><a href='http://112.85.214.34:8100/#/login'>访问系统</a></Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CasesPage;
