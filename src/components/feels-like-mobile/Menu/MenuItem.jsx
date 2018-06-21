import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

export const MenuItem = ({
  title,
  icon,
  onClick,
  textColor
}) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 4px;
  `;

  const Title = styled.p`
    padding: 0;
    margin: 0;
    text-decoration: none;

    color: ${textColor};
    font-size: ${icon === null ? `medium` : `smaller`};

  `;

  const renderIcon = icon !== null;

  return (
    <Container
      onClick={onClick}
    >
      {
        renderIcon && (
          <Fragment>
            {
              typeof icon === "function"
                ? icon()
                : icon
            }
          </Fragment>
        )
      }
      <Title>
        {title && title}
      </Title>
    </Container>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  textColor: PropTypes.string
}

MenuItem.defaultProps = {
  icon: null,
  textColor: "white"
}
