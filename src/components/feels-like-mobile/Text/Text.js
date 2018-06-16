import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = ({
  children,
  color,
  style
}) => {
  const StyledLabel = styled.label`
    color: ${color};
  `;

  return (
    <StyledLabel style={style}>
      {children}
    </StyledLabel>
  )
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  style: PropTypes.object
};

Text.defaultProps = {
  color: "white"
}

export default Text;
