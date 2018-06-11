import React, { Component } from 'react';
import PropTypes from "prop-types";
import likeStack from "./components/feels-like-mobile/StackNavigator";
import likeTab from "./components/feels-like-mobile/TabNavigator";
import Stack from "./components/feels-like-mobile/Stack";
import Tabs from "./components/feels-like-mobile/Tabs";
import Tab from "./components/feels-like-mobile/Tab";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

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

const IconCog = (
  <FontAwesome
    name='cog'
    size='lg'
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
  />
)

const IconUser = (
  <FontAwesome
    name='user'
    size='lg'
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "white" }}
  />
)

class App extends Component {
  render() {
    return (
      <Router>
        <Tabs>
          <Tab
            name="Settings"
            icon={IconCog}
          >
            <Route path="/settings" component={Settings} />
            <Link to="/settings" />
          </Tab>
          <Tab
            name="Profile"
            icon={IconUser}
          >
            <Route path="/profile" component={Profile} />
            <Link to="/profileg" />
          </Tab>
          <Tab
            name="Profile"
            icon={IconUser}
          >
            <Route path="/profile" component={Profile} />
            <Link to="/profile" />
          </Tab>
        </Tabs>
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
