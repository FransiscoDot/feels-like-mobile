import React, { Children } from "react";
import PropTypes from "prop-types";
import createNavigator from "../Navigation";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tabs = ({
  children
}) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Tabs = styled.div`
    display: flex;
    justify-content: space-around;
    background: palevioltred;
  `;

  let childrens = Children.toArray(children);

  return (
    <Container>
      <div>
        {
          childrens.map(tab => {
            const Route = tab.props.children.filter(c => c.type.name === "Route")[0];
            return (
              <React.Fragment>
                {Route}
              </React.Fragment>
            )
          })
        }
      </div>
      <Tabs>
        {
          childrens.map(tab => {
            const Link = tab.props.children.filter(c => c.type.name === "Link")[0];
            return (
              <React.Fragment>
                {Link}
              </React.Fragment>
            )
          })
        }
      </Tabs>
    </Container>
  )
}

export default createNavigator(Tabs);
