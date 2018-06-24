import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";

import withDeviceDetecter from "../DeviceDetecter"
import Header from "../Header";

const Detail = ({
  title,
  background,
  renderOnDesktop,
  onBackArrowPress,
  menu,
  detecter,
  children
}) => {

  let renderDetail = true;
  if (detecter) {
    renderDetail = !detecter.desktop || renderOnDesktop
      ? true
      : false
  }

  return (
    <Fragment>
      {
        renderDetail && (
          <Header
            title={title}
            backgroundColor={background}
            menu={menu}
            backIcon={(
              <FontAwesome
                name='chevron-left'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white", marginRight: 5 }}
              />
            )}
          />
        )
      }
      {
        children
      }
    </Fragment>
  )
}

Detail.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
  renderOnDesktop: PropTypes.bool,
  onBackArrowPress: PropTypes.func,
  menu: PropTypes.node
}

Detail.defaultProps = {
  title: "Detail",
  background: "rgb(85, 26, 139)",
  renderOnDesktop: false,
  onBackArrowPress: null,
  menu: null
}

export default withDeviceDetecter(Detail);
