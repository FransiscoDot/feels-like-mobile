import React from 'react'
import styled from "styled-components"

const Menu = ({
  items
}) => {
  const Container = styled.div`
    display: flex;
  `;

  return (
    <Container>
      {
        items.map((item, i) => (
          <div key={i}>
            {item}
          </div>
        ))
      }
    </Container>
  )
}

export default Menu;
