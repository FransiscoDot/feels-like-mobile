import styled from 'styled-components';

const getStyledComponents = (style = {}) => {
  const View = styled.div`
    display: flex;
    flex-direction: column;

    ${style.view && `
      && {
        ${style.view}
      }
    `}
  `;

  const Header = styled.div`
    padding: 5px 10px;
    display: inherit;
    align-items: center;
    justify-content: flex-start;
    background: cornflowerblue;

    ${style.header && `
      && {
        ${style.header}
      }
    `}

    ${({ theme }) => theme.stack && theme.stack.header && `
      && {
        background: ${theme.stack.header.backgroundColor}
      }
    `}
  `;

  const Title = styled.text`
    font-weight: 600;
    font-size: large;
    color: white;

    ${style.title && `
      && {
        ${style.title}
      }
    `}

    ${({ theme }) => theme.stack && theme.stack.title && `
      && {
        color: ${theme.stack.title.color}
      }
    `}
  `;

  return {
    View,
    Header,
    Title,
  };
};

export default getStyledComponents;
