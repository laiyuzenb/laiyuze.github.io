import Find from '../FindMusic';
import Local from '../LocalMusic';
const homeRouter = [
  {
    path: '/main/find',
    component: Find,
  },
  {
    path: '/main/local',
    component: Local,
  }
];

export default homeRouter;