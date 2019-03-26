
import React, { Component } from 'react';
import MainRoutes from './MainRoutes';
import MusicPlay from './components/MusicPlay';
import './index.scss';

export default class BasicLayout extends Component {
  render() {
    return (
      <div className="layout-range">
        <div className="layout-content">
          <MainRoutes></MainRoutes>
        </div>

        <MusicPlay />
      </div>
    );
  }
}
