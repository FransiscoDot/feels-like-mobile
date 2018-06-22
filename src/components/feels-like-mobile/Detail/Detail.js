import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

import Header from "../Header";
import { PrimaryText } from "../Text";

const Detail = ({
  title,
  background,
  renderOnDesktop,
  onBackArrowPress,
  menu,
  detecter,
  children
}) => {
  const Header_ = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 10px;
    background: ${background};
  `;

  const IconContainer = styled.div`
    display: flex;

    ${onBackArrowPress && `
      cursor: pointer;
    `}

    &:hover {
      opacity: 0.6;
    }
  `;

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

export default Detail;
