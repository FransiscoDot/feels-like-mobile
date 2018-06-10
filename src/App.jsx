import React, { Component } from 'react';
import PropTypes from "prop-types";
import likeStack from "./components/feels-like-mobile/StackNavigator";
import likeTab from "./components/feels-like-mobile/TabNavigator";
import Stack from "./components/feels-like-mobile/Stack";
import Tabs from "./components/feels-like-mobile/Tabs";
import Tab from "./components/feels-like-mobile/Tab";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Settings = () => (
  <div>
    <p>settings</p>
  </div>
)

class Profile extends Component {
  render() {
    return (
      <div>
        <p>profile</p>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Stack >
          <Profile />
          <Settings />
        </Stack> */}
          <Tabs>
            <Tab>
              <Route path="/settings" component={Settings} />
              <Link to="/settings">settings</Link>
            </Tab>
            <Tab>
              <Route path="/profile" component={Profile} />
              <Link to="/profile">profile</Link>
            </Tab>
          </Tabs>
        </div>
      </Router>
    );
  }
}

export default App;

// export default likeStack({
//  Component: App
// });

// export default likeTab({
//   tabs: [
//     {
//       Component: App
//     },
//     {
//       Component: Profile
//     }
//   ]
// })
