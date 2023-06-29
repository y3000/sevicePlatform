import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import './index.less';
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
      <div className="container">
        <div className="title-content box">
          <div className="title">应用案例</div>
          <div className="content">
            <p>围绕国土环境生态监测实际应用场景，应用我所最新智能技术研究成果，解决水土资源监测核心业务需求，实现产学研一体化协调发展。</p>
          </div>
        </div>
        <div className="qing box">
          <div className="video">
            {/* <audio></audio> */}
            <img src="/2.png"></img>
          </div>
          <div className="btn">
          {/* <Button size={size}>Default</Button> */}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CasesPage;
