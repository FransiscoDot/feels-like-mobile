import React, { Component } from 'react';
import Tabs from "./components/feels-like-mobile/Tabs";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import DeviceDetecter from "./components/feels-like-mobile/DeviceDetecter";

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
        <DeviceDetecter>
          {(detecter) => (
            <Tabs detecter={detecter}>
              <Tabs.Tab
                name="Settings"
                icon={IconCog}
              >
                <Route path="/settings" component={Settings} />
                <Link to="/settings" />
              </Tabs.Tab>
              <Tabs.Tab
                name="Profile"
                icon={IconUser}
              >
                <Route path="/profile" component={Profile} />
                <Link to="/profileg" />
              </Tabs.Tab>
              <Tabs.Tab
                name="Profile"
                icon={IconUser}
              >
                <Route path="/profile" component={Profile} />
                <Link to="/profile" />
              </Tabs.Tab>
            </Tabs>
          )}
        </DeviceDetecter>
      </Router>
    );
  }
}

export default App;
