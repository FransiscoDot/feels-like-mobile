import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PrimaryText } from "../Text";

const Stack = ({
  title,
  background,
  detecter,
  children,
}) => {
  const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 10px;
    background: ${background}
  `;

  return (
    <Fragment>
      <Header>
        <PrimaryText>{title}</PrimaryText>
      </Header>
      {
        children
      }
    </Fragment>
  )
}

Stack.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string
}

Stack.defaultProps = {
  title: "Stack",
  background: "rgb(85, 26, 139)"
}

export default Stack;
