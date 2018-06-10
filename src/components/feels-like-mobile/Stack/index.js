import React, { Fragment } from "react";
import PropTypes from "prop-types";
import createNavigator from "../Navigation";

const Stack = ({
  title = "Stack",
  children
}) => {
  return (
    <Fragment>
      <p>{title}</p>
      {children}
    </Fragment>
  )
}

Stack.propTypes = {
  title: PropTypes.string.isRequired
}

export default createNavigator(Stack);
