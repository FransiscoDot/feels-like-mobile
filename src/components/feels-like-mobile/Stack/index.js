import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import withDeviceDetecter from "../DeviceDetecter"
import Header from "../Header";

const Stack = ({
  title,
  background,
  renderOnDesktop,
  menu,
  detecter,
  children,
}) => {
  const Header_ = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;

    background: ${background}
  `;

  let renderStack = true;
  if (detecter) {
    renderStack = !detecter.desktop || renderOnDesktop
      ? true
      : false
  }

  return (
    <Fragment>
      {
        renderStack && (
          <Header
            title={title}
            backgroundColor={background}
            menu={menu}
          />
        )
      }
      {
        children
      }
    </Fragment>
  )
}

Stack.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string,
  renderOnDesktop: PropTypes.bool,
  menu: PropTypes.object
}

Stack.defaultProps = {
  title: "Stack",
  background: "rgb(85, 26, 139)",
  renderOnDesktop: false,
  menu: null
}

export default withDeviceDetecter(Stack);
