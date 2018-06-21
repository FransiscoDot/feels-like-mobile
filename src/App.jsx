import React, { Component } from 'react';
import Tabs from "./components/feels-like-mobile/Tabs";
import Stack from "./components/feels-like-mobile/Stack";
import Detail from "./components/feels-like-mobile/Detail";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import DeviceDetecter from "./components/feels-like-mobile/DeviceDetecter";
import Menu, { MenuItem } from "./components/feels-like-mobile/Menu";

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

const itemCog = (
  <MenuItem
    icon={IconCog}
  />
)

const ItemProfile = (
  <MenuItem
    icon={IconUser}
    onClick={() => console.log("icon clicked")}
  />
)

const MenuBelt = (
  <Menu
    items={[ItemProfile, itemCog]}
  />
)

const Settings = () => (
  <DeviceDetecter>
    {(detecter) => (
      <Stack
        title="Settings"
        detecter={detecter}
        menu={MenuBelt}
      >
        <div>
          <p>settings</p>
        </div>
      </Stack>
    )}
  </DeviceDetecter>
)

class Profile extends Component {
  render() {
    return (
      <DeviceDetecter>
        {(detecter) => (
          <Detail
            detecter={detecter}
            onBackArrowPress={() => console.log("gg")}
          >
            <div>
              <p>profile</p>
            </div>
          </Detail>
        )}
      </DeviceDetecter>
    )
  }
}

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
                <Route path="/profile" component={null} />
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
