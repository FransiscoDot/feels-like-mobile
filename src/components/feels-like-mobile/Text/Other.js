import React from 'react';
import Text from "./Text";

export const PrimaryText = props => (
  <Text
    style={{
      fontSize: "large",
      fontWeight: 500
    }}
    {...props}
  />
)

export const SecondaryText = props => (
  <Text
    style={{
      fontSize: "medium",
    }}
    color="paleturquoise"
    {...props}
  />
)
