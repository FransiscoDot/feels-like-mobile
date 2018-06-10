import React, { Component, Fragment } from 'react';
import createNavigator from "../Navigation";
import defaultOption from './defaultOptions';

const feelLikeTab = ({ tabs, detecter }) => {
  const options = {
    ...defaultOption,
    tabs,
    detecter
  };

  class Tabs extends Component {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: options.activeTab
      }

    }

    renderTab = ({ Component }) => {
      const isStateless = typeof Component !== 'string' && !Component.prototype.render;

      return isStateless
        ? Component()
        : new Component().render()
    }

    render() {
      const { tabs } = options;
      const { activeTab } = this.state;

      return (
        <Fragment>
          {
            this.renderTab(tabs[activeTab])
          }
        </Fragment>
      )
    }
  }

  return Tabs;
}

export default createNavigator(feelLikeTab);
