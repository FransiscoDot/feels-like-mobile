import MobileDetect from 'mobile-detect';

const navigation = (createNavigator) => {
  const md = new MobileDetect(window.navigator.userAgent);
  const detecter = {
    ios: md.os() === 'iOS',
    android: md.os() === 'AndroidOS',
    desktop: md.os() === null,
  };

  const Navigation = (props) => {
    const newProps = {
      ...props,
      detecter,
    };

    return createNavigator(newProps);
  };

  return Navigation;
};

export default navigation;
