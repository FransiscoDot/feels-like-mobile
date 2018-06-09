import MobileDetect from 'mobile-detect';

const navigation = (createNavigator) => {
  const md = new MobileDetect(window.navigator.userAgent);
  const detecter = {
    ios: md.os() === 'iOS',
    android: md.os() === 'AndroidOS',
    desktop: md.os() === null,
  };

  const Navigation = (props) => {
    const isStateless = typeof props.Component !== 'string' && !props.Component.prototype.render;
    const newProps = {
      ...props,
      detecter,
      isStateless,
    };

    return createNavigator(newProps);
  };

  return Navigation;
};

export default navigation;
