import React from 'react';
import createNavigator from '../Navigation';
import getStyledComponents from './styledComponents';
import defaultOption from './defaultOptions';

function isStateless(Component) {
  return typeof Component !== 'string' && !Component.prototype.render
}

const feelsLikeStack = (navigation) => {
  navigation = {
    ...defaultOption,
    ...navigation,
  };

  const Stack = (props) => {
    const { View, Header, Title } = getStyledComponents(navigation.style);

    const newProps = {
      ...props,
    };

    const {
      component, title, headerOnDesktop, detecter,
    } = navigation;

    const header = (
      <Header>
        <Title>
          {
            title
              ? typeof title === 'function'
                ? title(newProps)
                : title
              : component.name
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
          isStateless(component)
            ? component(newProps)
            : new component(newProps).render()
        }
      </View>
    );
  };

  return Stack;
};

export default createNavigator(feelsLikeStack);
