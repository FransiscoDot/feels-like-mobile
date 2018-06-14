import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import TabItem from "../TabItem";
import { NavLink } from "react-router-dom";

const Tab = ({
  name,
  icon,
  backgroundColor,
  children,
  detecter
}) => {
  const link = children.filter(c => c.type.name === "Link")[0];

  const StyledLink = styled(NavLink)`
    text-decoration: none;
    padding: 8px 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${backgroundColor};

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    &.active {
      ${detecter.android && `
        border-bottom: 3px solid palevioletred;
      `};

      ${!detecter.android && `
        background: rgba(0, 0, 0, 0.2);
      `};

      ${detecter.desktop && `
        background: rgba(0, 0, 0, 0.4);
      `}
    }
  `;

  return (
    <React.Fragment>
      <StyledLink {...link.props}>
        <TabItem
          name={name}
          icon={icon}
          detecter={detecter}
        />
      </StyledLink>
    </React.Fragment>
  )
}

Tab.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ]),
  backgroundColor: PropTypes.string,
  detecter: PropTypes.shape({
    ios: PropTypes.bool.isRequired,
    android: PropTypes.bool.isRequired,
    desktop: PropTypes.bool.isRequired
  })
}

Tab.defaultProps = {
  name: "Tab",
  icon: null,
  backgroundColor: "inherit"
}

export default Tab;
