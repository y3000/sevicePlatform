import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import './index.less';
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
      <div className="container">
        <div className="title-content box">
          <div className="title">人才培养</div>
          <div className="content">
            <p>紧贴我校办学宗旨，服务西南国土环境监测；</p>
            <p>放眼学界前沿热点，培养高质量创新型人才。</p>
          </div>
        </div>
        <div className="achievement box">
          <div className="title">大创成果</div>
          <div className="imgs">
            <div className="single">
              <img src="/2.png"></img>
            </div>
            <div className="single">
              <img src="/2.png"></img>
            </div>
            <div className="single">
              <img src="/2.png"></img>
            </div>
            <div className="single">
              <img src="/2.png"></img>
            </div>
          </div>
        </div>
        <div className="exchange box">
          <div className="title">学术交流</div>
          <div className="imgs">
            <div className="single">
              <img src="/2.png"></img>
            </div>
            <div className="single">
              <img src="/2.png"></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div>人才培养</div> */}
    </PageContainer>
  );
};

export default TeamPage;
