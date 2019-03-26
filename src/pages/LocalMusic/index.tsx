import React, { Component } from 'react';
import { Button, Input } from 'antd';
import './index.scss';
export default class Local extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="localMusic">
        <div className="localMusic-topInfo">
          <img className="localMusic-topInfo-img" src="https://laiyuze.oss-cn-hangzhou.aliyuncs.com/IMG_6844.GIF
" />
          <div className="localMusic-topInfo-right">
            <div className="localMusic-topInfo-text">
              本地音乐
            </div>
            <ul>
              <li>本地歌曲(1)</li>
              <li>iTunes(0)</li>
              <li>正在下载(0)</li>
            </ul>
          </div>
        </div>

        <div className="localMusic-toolBar">
          <Button className="localMusic-toolBar-btn" icon="swap" >随机播放</Button>
          <Button className="localMusic-toolBar-btn" icon="table" >批量操作</Button>
          <Button className="localMusic-toolBar-btn" icon="folder-add" >添加歌曲</Button>
          <Input className="localMusic-toolBar-inp" placeholder="筛选" />
          <Button className="localMusic-toolBar-btn" type="primary" icon="message" />
          <Button className="localMusic-toolBar-btn" type="primary" icon="user" />
          <Button className="localMusic-toolBar-btn" type="primary" icon="like" />
        </div>

        <ul className="musicList">
          <li>
            <span>歌曲名</span>
            <span>艺人</span>
            <span>专辑</span>
            <span>时长</span>
          </li>
          <li>
            <span>
              <img src="https://laiyuze.oss-cn-hangzhou.aliyuncs.com/IMG_6844.GIF" alt="" />
              &nbsp;&nbsp;
              One more time, One more Chance
            </span>
            <span>山崎まさよし </span>
            <span>One more time, One more Chance</span>
            <span>5:30</span>
          </li>
        </ul>
      </div>
    );
  }
}
