// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import Main from './pages/Home';
import ShowPlay from './pages/ShowPlay'
const routerConfig = [
  {
    path: '/main',
    component: Main,
  },
  {
    path: '/showPlay',
    component: ShowPlay,
  },
];

export default routerConfig;
