// 运行时配置
import Footer from '@/components/Footer';
import RightContent from '@/components/Header/RightContent';
import Title from '@/components/Header/TitleComponent';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    // logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    logo: () => {
      return (
        <img
          style={{ height: '80px' }}
          alt="Logo"
          src={require('./assets/images/logo1.png')}
        />
      );
    },
    menu: {
      locale: false,
    },
    layout: 'top',
    title: <Title />,
    siderWidth: 200,
    // 菜单的收起和展开
    // collapsed: false,
    // 固定顶部
    fixedHeader: false,
    // 菜单头
    // menuHeaderRender: false,
    // 可以自定义顶栏
    // headerRender: false,
    // 可以自定义页脚
    // footerRender: false,
    // 可以自定义菜单区域
    // menuRender: false,
    // 可以为菜单增加一个额外内容，在菜单头和菜单之间
    menuExtraRender: false,
    // 右上角头像信息展示
    rightContentRender: () => <RightContent />,
    footerRender: () => <Footer />,
    fixSiderbar: true,
    logout: () => {
      console.log('退出登录');
    },
  };
};
