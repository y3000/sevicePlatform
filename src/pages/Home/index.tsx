import { PageContainer } from '@ant-design/pro-components';
import { Button, Carousel, Image, Tag } from 'antd';
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
          <div className={styles.tupucard}>
            <h1>知识图谱</h1>
          </div>
          <div className={styles.descCrad}>
            <h1>时序模型</h1>
            <Tag icon={<a />} color="#55acee">
              LinkedIn
            </Tag>
            <Button
              type="primary"
              style={{ width: '200px', height: '100px', margin: '10px' }}
            >
              异常检测
            </Button>
          </div>

          {/* <div className={styles.descCrad}>
            <h1>知识图谱</h1>
          </div>
          <div className={styles.descCrad}>
            <h1>知识图谱</h1>
          </div> */}
          {/* <Row>
            <Col span={12}>知识图谱</Col>
            <Col span={12}><img src="shixumoxin.png" alt="" /></Col>
          </Row> */}

          {/* <div className={styles.nav}>
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
          </div> */}
        </div>
        <div className={styles.techContent}>
          <div className={styles.wairecard}>
            <h1>异常检测</h1>
            <p style={{ width: '50%' }}>
              Southwest Land Ecological Environment Monitoring Intelligent Early
              Warning Technology Research and Service Platform
            </p>
          </div>
          <div className={styles.netcard}>
            <h1>PINN 网络</h1>
          </div>
        </div>
        {/* 算法模型 */}
        <div>
          <h1 style={{ textAlign: 'center', fontSize: '30px' }}>算法模型</h1>
          <div className={styles.nav}>
            <NavCard
              title="自回归积分滑动平均模型"
              imgUrl="arima.png"
              clickHandle={() =>
                // history.push('http://1.14.7.101/math_neo4j_web/')
                console.log('自回归积分滑动平均模型1')
              }
            />
            <NavCard title="条件自回归模型" imgUrl="cra.jpg" />
            <NavCard title="径向基模型" imgUrl="rbf.jpg" />
            <NavCard title="决策树模型" imgUrl="dt.jpg" />
          </div>
        </div>

        {/* 应用案例 */}
        <h1 style={{ textAlign: 'center', fontSize: '30px' }}>应用案例</h1>
        <div className={styles.techContent}>
          <div className={styles.descCrad}>
            <h1>应用案例</h1>
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
            <Image width={'40vw'} src="jiaoliu1.jpg" />
            <Image width={'40vw'} src="jiaoliu2.jpg" />
          </Image.PreviewGroup>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
