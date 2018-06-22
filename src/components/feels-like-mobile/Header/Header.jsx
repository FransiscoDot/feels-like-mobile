import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

import { PrimaryText } from "../Text"

const Header = ({
  title,
  backgroundColor,
  backIcon,
  menu
}) => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;

    background: ${backgroundColor}
  `;

  return (
    <Container>
      <div>
        {backIcon && backIcon}
        <PrimaryText>
          {title}
        </PrimaryText>
      </div>
      {menu && menu}
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  backIcon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]),
  menu: PropTypes.node
}

Header.defaultProps = {
  title: "Header",
  background: "rgb(85, 26, 139)",
  backIcon: null,
  menu: null
}

export default Header;
