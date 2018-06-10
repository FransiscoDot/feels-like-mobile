import React from 'react';
import createNavigator from '../Navigation';
import getStyledComponents from './styledComponents';
import defaultOption from './defaultOptions';

const feelsLikeStack = (navigation) => {
  const navigationProps = {
    ...defaultOption,
    ...navigation,
  };

  const Stack = (props) => {
    const { View, Header, Title } = getStyledComponents(navigationProps.style);

    const newProps = {
      ...props,
    };

    const {
      Component,
      title,
      headerOnDesktop,
      detecter
    } = navigationProps;

    const isStateless = typeof Component !== 'string' && !Component.prototype.render;

    const header = (
      <Header>
        <Title>
          {
            title
              ? typeof title === 'function'
                ? title(newProps)
                : title
              : Component.name
          }
        </Title>
      </Header>
    );

    return (
      <View>
        {
          detecter.desktop
            ? headerOnDesktop
              ? header
              : null
            : header
        }
        {
          isStateless
            ? Component(newProps)
            : new Component(newProps).render()
        }
      </View>
    );
  };

  return Stack;
};

export default createNavigator(feelsLikeStack);
