import { PageContainer } from '@ant-design/pro-components';
import { Button, Carousel, Image, Space } from 'antd';
import { history } from 'umi';
import NavCard from './components/NavCard';
import styles from './index.less';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost title={false}>
      <div className={styles.container}>
        <Carousel className={styles.lunbo} autoplay>
          <div className={styles.lunbo1}>
            <p>
              面向国土生态环境监测重大需求
              <br />
              开展高水平智能预警技术研发及应用转化
            </p>
          </div>
          <div className={styles.lunbo2}>2</div>
          <div className={styles.lunbo3}>3</div>
        </Carousel>
        {/* 导航栏 */}
        <div className={styles.nav}>
          <NavCard
            title="智能技术"
            imgUrl="technology.png"
            desc="围绕国土生态环境监测预警的智能技术及其重大需求，以西南区域环境（四川）为实际应用场景，开展高水平智能技术研究。"
            clickHandle={() => history.push('/technology')}
          />
          <NavCard
            title="算法模型"
            imgUrl="modals.png"
            desc="面向西南国土生态环境监测重大需求，提供智能化深度学习算法模型，支持不同应用场景和多模态数据输入"
            clickHandle={() => history.push('/models')}
          />
          <NavCard
            title="应用案例"
            desc="围绕国土环境生态监测实际应用场景，应用我所最新智能技术研究成果，解决水土资源监测核心业务需求，实现产学研一体化协调发展"
            imgUrl="case.png"
            clickHandle={() => history.push('/cases')}
          />
          <NavCard
            title="人才培养"
            desc="紧贴我校办学宗旨，服务西南国土环境监测；
            放眼学界前沿热点，培养高质量创新型人才"
            imgUrl="team.png"
            clickHandle={() => history.push('/team')}
          />
        </div>
        {/* 智能技术 */}
        <h1 style={{ textAlign: 'center', fontSize: '30px' }}>智能技术</h1>
        <div className={styles.techContent}>
          <div
            className={styles.tupucard}
            onClick={() => history.push('http://1.14.7.101/math_neo4j_web/')}
          >
            <h2>知识图谱</h2>
            <p>
              知识图谱（Knowledge
              Graph），在图书情报界称为知识域可视化或知识领域映射地图，
              是显示知识发展进程与结构关系的一系列各种不同的图形，用可视化技术描述知识资源及其载体，挖掘、分析、构建、绘制和显示知识及它们之间的相互联系。
            </p>
          </div>
          <div
            className={styles.descCrad}
            onClick={() => history.push('/modelDetail/m01')}
          >
            <h2>时序模型</h2>
          </div>
        </div>
        <div className={styles.techContent}>
          <div
            className={styles.wairecard}
            onClick={() => history.push('/modelDetail/m01')}
          >
            <h2>异常检测</h2>
            <p style={{ width: '50%' }}>
              Southwest Land Ecological Environment Monitoring Intelligent Early
              Warning Technology Research and Service Platform
            </p>
          </div>
          <div
            className={styles.netcard}
            onClick={() => history.push('/modelDetail/m01')}
          >
            <h2>PINN 网络</h2>
          </div>
        </div>
        {/* 算法模型 */}
        <div>
          <h1 style={{ textAlign: 'center', fontSize: '30px' }}>算法模型</h1>
          <div className={styles.nav}>
            <NavCard
              title="自回归积分滑动平均模型"
              imgUrl="arima.png"
              clickHandle={() => history.push('/modelDetail/m01')}
            />
            <NavCard
              title="条件自回归模型"
              imgUrl="cra.jpg"
              clickHandle={() => history.push('/modelDetail/m02')}
            />
            <NavCard
              title="径向基模型"
              imgUrl="rbf.jpg"
              clickHandle={() => history.push('/modelDetail/m03')}
            />
            <NavCard
              title="决策树模型"
              imgUrl="dt.jpg"
              clickHandle={() => history.push('/modelDetail/m04')}
            />
          </div>
        </div>

        {/* 应用案例 */}
        <h1 style={{ textAlign: 'center', fontSize: '30px' }}>应用案例</h1>
        <div className={styles.techContent}>
          <div className={styles.case}>
            <div className={styles.left}>
              <video src="/qing.mp4" controls></video>
            </div>
            <div className={styles.right}>
              <div className={styles.name}>青田县水环境智慧监测平台</div>
              <div className={styles.detail}>
                <p>
                  通过智能水环境监测系统，能够全面掌握青田县水资源状态，基于系统提供的各类分析模型实时预测预警污染源排放情况，为环境治理的相关工作部署提供有力的技术支撑。
                </p>
              </div>
              <Button size="large">
                <a href="http://183.245.140.144:8000/#/login">访问系统</a>
              </Button>
            </div>
          </div>
        </div>

        {/* 人才培养 */}
        <h1 style={{ textAlign: 'center', fontSize: '30px' }}>人才培养</h1>
        <div style={{ padding: '0 20px', textAlign: 'center' }}>
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <Space>
              <Image width={'40vw'} src="jiaoliu1.jpg" />
              <Image width={'40vw'} src="jiaoliu2.jpg" />
            </Space>
          </Image.PreviewGroup>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
