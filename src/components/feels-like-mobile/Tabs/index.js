import React, { Children, PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tab from "../Tab";

class Tabs extends PureComponent {
  static Tab = Tab;

  render() {
    const { backgroundColor, children, detecter, renderOnDesktop } = this.props;

    const Container = styled.div`
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column-reverse;

      ${detecter.ios && `
        flex-direction: column;
      `}
    `;

    const Component = styled.div`
      height: 100%;
    `;

    const TabsContainer = styled.div`
      display: flex;
      justify-content: space-between;

      background: ${backgroundColor}
    `;

    let childrens = Children.toArray(children);
    const renderTabs = !detecter.desktop || renderOnDesktop
      ? true
      : false;

    return (
      <Container>
        <Component>
          {
            childrens.map((tab, i) => {
              const Route = tab.props.children.filter(c => c.type.name === "Route")[0];
              return (
                <React.Fragment key={i}>
                  {Route}
                </React.Fragment>
              )
            })
          }
        </Component>
        {
          renderTabs && (
            <TabsContainer>
              {
                childrens.map((tab, i) => {
                  return (
                    <React.Fragment key={i}>
                      {React.cloneElement(tab, { detecter: detecter })}
                    </React.Fragment>
                  )
                })
              }
            </TabsContainer>
          )
        }
      </Container>
    )
  }
}

Tabs.propTypes = {
  backgroundColor: PropTypes.string,
  renderOnDesktop: PropTypes.bool
};

Tabs.defaultProps = {
  backgroundColor: "rgb(85, 26, 139)",
  renderOnDesktop: false
};

export default Tabs;
