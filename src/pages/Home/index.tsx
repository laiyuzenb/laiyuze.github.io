import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Not from '../NotFound';
import HomeHeader from './components/HomeHeader';
import { Icon } from 'antd';
import homeRouter from './homeRouter';
import './index.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="layout-home">
        <div className="layout-home_left">
          <div className="left-btn-item">
            <div style={{ backgroundColor: '#ed6a60' }}></div>
            <div style={{ backgroundColor: '#f6c150', marginLeft: 8 }}></div>
            <div style={{ backgroundColor: '#62c656', marginLeft: 8 }}></div>
          </div>

          <div className="musicLib">
            音乐库
          </div>
          <ul>
            <li>
              <Icon type="search" className="li-icon" />
              <span className="li-span">发现音乐</span>
            </li>
            <li>
              <Icon type="appstore" className="li-icon" />
              <span className="li-span">歌单</span>
            </li>
            <li>
              <Icon type="hdd" className="li-icon" />
              <span className="li-span">排行榜</span>
            </li>
          </ul>
          <div className="myMusic">
            我的音乐
          </div>
          <ul>
            <li className="bg-red">
              <Icon type="copy" className="li-icon" />
              <span className="li-span">本地歌曲</span>
            </li>
            <li>
              <Icon type="clock-circle" className="li-icon" />
              <span className="li-span">最近播放</span>
            </li>
            <li>
              <Icon type="heart" className="li-icon" />
              <span className="li-span">我的收藏</span>
            </li>
            <li>
              <Icon type="shopping" className="li-icon" />
              <span className="li-span">已购音乐</span>
            </li>
          </ul>
          <div className="musicLib">
            我的歌单
          </div>
          <div className="musicLib">
            收藏的歌单
          </div>
        </div>

        <div className="layout-home_right">
          <HomeHeader />
          <div className="layout-home_main">
            <Switch>
              {
                homeRouter.map((item, index) => {
                  return item.component ? (
                    <Route
                      key={item.path}
                      path={item.path}
                      component={item.component}
                      exact
                    />
                  ) : null;
                })
              }
              <Route component={Not} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
