import React, { Children, PureComponent } from "react";
import PropTypes from "prop-types";
import createNavigator from "../Navigation";
import styled from "styled-components";

class Tabs extends PureComponent {
  render() {
    const { backgroundColor, children, detecter } = this.props;

    const Container = styled.div`
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column-reverse;

      ${detecter.ios && `
        flex-direction: column;
      `}
    `;

    const Component = styled.div`
      height: 100%;
    `;

    const Tabs = styled.div`
      display: flex;
      justify-content: space-between;

      background: ${backgroundColor}
    `;

    let childrens = Children.toArray(children);

    return (
      <Container>
        <Component>
          {
            childrens.map((tab, i) => {
              const Route = tab.props.children.filter(c => c.type.name === "Route")[0];
              return (
                <React.Fragment key={i}>
                  {Route}
                </React.Fragment>
              )
            })
          }
        </Component>
        <Tabs>
          {
            childrens.map((tab, i) => {
              return (
                <React.Fragment key={i}>
                  {tab}
                </React.Fragment>
              )
            })
          }
        </Tabs>
      </Container>
    )
  }
}

// const Tabs = ({
//   backgroundColor = "rgb(85, 26, 139)",
//   children,
//   detecter
// }) => {
//   const Container = styled.div`
//     height: 100%;
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column-reverse;

//     ${detecter.ios && `
//       flex-direction: column;
//     `}
//   `;

//   const Component = styled.div`
//     height: 100%;
//   `;

//   const Tabs = styled.div`
//     display: flex;
//     justify-content: space-between;

//     background: ${backgroundColor}
//   `;

//   let childrens = Children.toArray(children);

//   return (
//     <Container>
//       <Component>
//         {
//           childrens.map((tab, i) => {
//             const Route = tab.props.children.filter(c => c.type.name === "Route")[0];
//             return (
//               <React.Fragment key={i}>
//                 {Route}
//               </React.Fragment>
//             )
//           })
//         }
//       </Component>
//       <Tabs>
//         {
//           childrens.map((tab, i) => {
//             return (
//               <React.Fragment key={i}>
//                 {tab}
//               </React.Fragment>
//             )
//           })
//         }
//       </Tabs>
//     </Container>
//   )
// }

export default createNavigator(Tabs);
