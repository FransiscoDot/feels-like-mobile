import React, { Fragment } from "react";
import PropTypes from "prop-types";

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
