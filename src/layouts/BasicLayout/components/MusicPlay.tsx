
import React, { Component } from 'react';
import { Icon, Slider } from 'antd';

export default class MusicPlay extends Component {
  render() {
    return (
      <footer className="layout-footer">
        <div className="layout-footer-left">
          <div className="layout-footer-img">
            <img src="../public/IMG_6844.GIF" alt="" />
          </div>
          <div className="layout-footer-info">
            <div>One more time, One more chance</div>
            <div>山崎まさよし </div>
          </div>
          <div className="layout-footer-lv">
            标准
          </div>
          <div className="layout-footer-Collection">
            <Icon type="heart" />
          </div>
          <div className="layout-footer-mennu">
            <Icon type="ellipsis" />
          </div>
        </div>
        <div className="layout-footer-right">
          <div className="layout-footer-rewindDown">
            <Icon type="step-backward" />
          </div>
          <div className="layout-footer-play">
            <Icon type="caret-right" />
          </div>
          <div className="layout-footer-fastForward">
            <Icon type="step-forward" />
          </div>
          <div className="layout-footer-loudness">
            <Icon type="sound" />
          </div>
          <div className="layout-footer-progress">
            <Slider defaultValue={30} />
          </div>
          <div className="layout-footer-model">
            <Icon type="sync" />
          </div>
          <div className="layout-footer-effects">
            <Icon type="sliders" />
          </div>
          <div className="layout-footer-lyric">
            词
        </div>
          <div className="layout-footer-playList">
            <Icon type="ordered-list" />
          </div>
        </div>
      </footer>
    );
  }
}
