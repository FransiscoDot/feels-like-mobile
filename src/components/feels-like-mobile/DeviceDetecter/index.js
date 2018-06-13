import React, { Fragment } from 'react';
import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const detecter = {
  ios: md.os() === 'iOS',
  android: md.os() === 'AndroidOS',
  desktop: md.os() === null,
};

const DeviceDetecter = ({
  render,
  children
}) => {
  return (
    <Fragment>
      {
        children(detecter)
      }
    </Fragment>
  )
}

export default DeviceDetecter;
