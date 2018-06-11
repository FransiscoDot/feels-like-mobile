import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import TabItem from "../TabItem";
import { NavLink } from "react-router-dom";
import withDeviceDetecter from "../Navigation";

const Tab = ({
  name = "Tab",
  icon = null,
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
        />
      </StyledLink>
    </React.Fragment>
  )
}

export default withDeviceDetecter(Tab);
