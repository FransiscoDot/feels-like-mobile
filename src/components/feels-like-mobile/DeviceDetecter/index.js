import React, { Fragment } from 'react';
import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const detecter = {
  ios: md.os() === 'iOS',
  android: md.os() === 'AndroidOS',
  desktop: md.os() === null,
};

export const withDeviceDetecter = Component => {
  return props => {
    const newProps = {
      detecter,
      ...props
    }

    return (
      <Component {...newProps}/>
    )
  }
}

export default withDeviceDetecter;
