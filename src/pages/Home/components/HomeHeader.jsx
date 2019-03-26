import React, { Component } from 'react';
import { Icon, Input } from 'antd';

export default class HomeHeader extends Component {
  render() {
    return (
      <div className="layout-home_header">
        <div className="header-left">
          <Icon type="left" className="header-left-arrow" />
          <Icon type="right" className="header-right-arrow" />
          <Icon type="sync" className="header-left-sync" />
          <div className="header-search-box">
            <Icon type="search" className="header-search-iconSearch" />
            <Input
              className="header-search-input"
              size="small"
              placeholder="One more time, One more Chance"
            />
          </div>
        </div>
        <div className="header-right">
          <img src="../public/IMG_6844.GIF" alt="" />
          <div className="header-name">赖雨泽</div>
          <Icon type="setting" className="header-set" />
          <Icon type="wallet" className="header-out" />
        </div>
      </div>
    );
  }
}
