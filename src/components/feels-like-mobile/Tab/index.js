import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const Tab = ({
  name = "Tab",
  icon = null,
  children
}) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default Tab;
