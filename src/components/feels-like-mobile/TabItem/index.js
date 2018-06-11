import React from 'react';
import PropTypes from "prop-types";
import createNavigator from "../Navigation";
import styled from "styled-components";

const TabItem = ({
  name,
  icon,
  textColor = "white",
  detecter
}) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Name = styled.p`
    padding: 0;
    margin: 0;
    text-decoration: none;

    color: ${textColor};

    ${detecter.ios && `
      font-size: smaller;
    `}

    ${detecter.android && `
      font-size: large;
    `}

    ${detecter.ios && `
      font-size: medium;
    `}
  `;

  return (
    <Container>
      {
        icon && detecter.ios && icon
      }
      <Name>{name}</Name>
    </Container>
  )
}

TabItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  detecter: PropTypes.object.isRequired
}

export default createNavigator(TabItem);
