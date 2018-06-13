import MobileDetect from 'mobile-detect';
import React from 'react';

const withDeviceDetecter = Component => {
  const md = new MobileDetect(window.navigator.userAgent);
  const detecter = {
    ios: md.os() === 'iOS',
    android: md.os() === 'AndroidOS',
    desktop: md.os() === null,
  };

  const ComponentWithContext = props => {
    const newProps = {
      ...props,
      detecter
    };

    return (
      <Component {...newProps} />
    )
  }

  return ComponentWithContext;
}

export default withDeviceDetecter;
