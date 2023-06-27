import { Button } from 'antd';
import { history } from 'umi';
import './style.less';
// 登录
const Login: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <div className="login">
      <h2>
        面向国土生态环境监测重大需求， 开展
        <br />
        高水平智能预警技术研发及应用转化。
      </h2>
      <div className="login-from"></div>
      <Button onClick={() => history.push('/home')}>登录</Button>
    </div>
  );
};

export default Login;
